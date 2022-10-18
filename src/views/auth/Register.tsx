import { motion } from 'framer-motion';
import UseAuth from '../../hooks/useAuth';
import { useAppDispatch } from '@/store';
import { signInWithGoogle } from '@/reducers/authReducer';

export default function Register() {
  const dispatch = useAppDispatch();

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
