import React from 'react';
import { SHOP } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector } from 'react-redux';
import nike from '../../assets/nike.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import VectorSvg from '../../components/ui/VectorSvg';



export default function Home() {

    const authenticating = useSelector(state => !!state.app.isAuthenticating);

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
            {authenticating ? <PreLoader theme="light" /> : null}
            <motion.section
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                className="home position-relative d-flex align-items-center"
            >

                <div className="vector">
                    <VectorSvg />
                </div>

                <div className="container-fluid">
                    <div className="home-content">

                        <div className="home-text">
                            <motion.h1
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    duration: 1,
                                    delay: .9

                                }}
                            >2021 New Collection</motion.h1>
                            <motion.p
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    duration: 1,
                                    delay: .9,
                                }}
                            > New level Designs,<br /> explore our 2020 collection <br /> with more comfort and style.

                            </motion.p>
                        </div>




                        <motion.div
                            className="shoe"
                        // initial={{ scale: 0 }}
                        // animate={{ scale: 1, rotate: -16, translateY: -300 }}
                        // transition={{
                        //     type: "spring",
                        //     stiffness: 260,
                        //     damping: 20,
                        //     duration: 1,
                        //     delay: .5
                        // }}

                        >
                            <img src={nike} alt="shoe" className="inline-block shoe-img" />

                            <NavLink
                                to={SHOP}
                                className="btn home-btn"
                            >Shop Now</NavLink>
                        </motion.div>

                        <div className="socials">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>


                </div>

            </motion.section>
        </>
    )
}
