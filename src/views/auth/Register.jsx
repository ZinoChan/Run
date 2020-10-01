import React from 'react'
import { signInWithGoogle } from '../../actions/authActions'
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';


export default function Register() {
    const dispatch = useDispatch();

    const handleSignIn = () => dispatch(signInWithGoogle());

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <motion.button 
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: .6}}
                className="btn btn-dark"
                onClick={handleSignIn}
            >
                Sign In With Google
            </motion.button>
        </div>
    )
}
