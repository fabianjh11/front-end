import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if(!e.target.classList.contains('backdrop')) return;
        setSelectedImg(null);
    }

    return (
        <motion.div className="backdrop" onClick={handleClick} initial={{ opacity: 0}} animate={{ opacity: 1 }}>
            <motion.img src={selectedImg} alt="img grande" initial={{ y: "-100vh", x: "-50vh"}} animate={{ y: 0, x: 0}} />
        </motion.div>
    )
}

export default Modal;