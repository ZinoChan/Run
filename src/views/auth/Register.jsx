import React from 'react';
import { signInWithGoogle } from '../../actions/authActions';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import UseAuth from '../../hooks/useAuth';

export default function Register() {
  const dispatch = useDispatch();

  const handleSignIn = () => dispatch(signInWithGoogle());

  return (
    <UseAuth>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="btn btn-dark"
          onClick={handleSignIn}
        >
          Sign In With Google
        </motion.button>
      </div>
    </UseAuth>
  );
}
