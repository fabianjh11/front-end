import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, orderBy, onSnapshot, query} from "firebase/firestore";

const useFirestore = (coleccion) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(db, coleccion), orderBy('date', 'desc'));
        const unsub = onSnapshot(q, snapshot => {
                setDocs(
                    snapshot.docs.map(doc => ({...doc.data(), id:doc.id}))
                )
            }
        )

        return () => unsub();
    }, [coleccion]);

    return { docs };
}

export default useFirestore;