import React from 'react';
import { SHOP } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector } from 'react-redux';



export default function Home() {

    const authenticating =  useSelector(state => !!state.app.isAuthenticating );

    const pageTransition = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    }

    

     


    return (
        <>
        {authenticating ? <PreLoader theme="light"/> : null}
        <motion.section
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition} 
            className="home position-relative d-flex align-items-center"
        >
            
                    <motion.div 
                        className="home-overlay"
                        initial={{ width: 0, opacity: 0}}
                        animate={{ width: '60%' , opacity: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: .5
                        }}
                    >
                    <motion.h1
                        initial={{ x: -100,opacity: 0 }}
                        animate={{ x: 0, opacity: .4  }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1,
                            delay: .9

                        }}
                    >Nike</motion.h1>
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: .4 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1,
                            delay: .9,
                        }}
                    >2020</motion.h2>
                </motion.div>
                
                <motion.div 
                    className="shoe"
                    initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: -16, translateY: -300 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1,
                            delay: .5
                        }}
                    
                ></motion.div>

                    <div className="home-text">
                        <motion.h1 
                            className="home-title"
                            initial={{ y: -100, opacity: 0}}
                            animate={{ y: 0 , opacity: 1}}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: 1.2,
                                delay: 1.9,
                            }}
                        >THE NEW ARRIVALS</motion.h1>
                        <motion.p
                             className="home-title"
                             initial={{ y: 100, opacity: 0}}
                             animate={{ y: 0 , opacity: 1}}
                             transition={{
                                 type: "spring",
                                 stiffness: 260,
                                 damping: 20,
                                 duration: 1.2,
                                 delay: 1.9,
                             }}
                        >
                        we are taking nike to the next level, with our new 2020 collection more comfort and style ready to run.
                        </motion.p>
                        <motion.div
                            initial={{ x: 100, opacity: 0}}
                            animate={{ x: 0 , opacity: 1}}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: 1.2,
                                delay: 1.9,
                            }}
                        >
                            <NavLink 
                                to={SHOP} 
                                className="btn home-btn"
                            >Shop Now</NavLink>
                        </motion.div>
                    </div>
                
            
        </motion.section>
        </>
    )
}
