import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { animate, motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url){
            const createdAt = serverTimestamp()
            const docRef = addDoc(collection(db, 'images'), {
                url: url,
                date: createdAt
            }).then(() => {
                console.log("Documento añadido");
                })
                .catch(function(error) {
                console.error("Error al añadir el documento: ", error);
                });
            console.log(url);
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar" initial={{ width: 0 }} animate={{width: progress + '%'}} ></motion.div>
    )
}

export default ProgressBar;