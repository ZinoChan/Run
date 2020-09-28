import React from 'react'
import { signInWithGoogle } from '../../actions/authActions'
import { useDispatch } from 'react-redux';

export default function Register() {
    const dispatch = useDispatch();

    const handleSignIn = () => dispatch(signInWithGoogle());

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <button 
                className="btn btn-dark"
                onClick={handleSignIn}
            >
                Sign In With Google
            </button>
        </div>
    )
}
