import { useState, useEffect } from "react";
import { projectStorage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setURL] = useState(null);

    useEffect(() => {
        const storageRef = ref(projectStorage, file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => setURL(url));
            }
        );
    }, [file]);

    return { progress, url, error };
}

export default useStorage;