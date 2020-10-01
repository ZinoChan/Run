import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


export default function Filter() {
    return (
        <div className="filter">
            <div className="container-fluid">
                <div className=" filter-content">
                    <motion.div 
                        className="filter-btn"
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: .6,
                            delay: .5
                        }}
                    >
                        <button className="btn main-btn" >Filter  <FontAwesomeIcon className="ml-2" icon={faFilter}/></button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
