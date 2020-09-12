import React from 'react'
import { REGISTER } from '../../constants/routes';
import { NavLink } from 'react-router-dom';


export default function Login() {
    return (
        <section className="login">
            <div className="container-fluid">
                <div className="row auth-row">
                    <div className="col-xl-6 ">
                        <div className="auth-img">
                            <h2>LOGIN</h2>
                        </div>
                    </div>
                    <div className="col-xl-6" style={{alignSelf: "center"}}>
                        <form className="auth-form">
                            <div className="form-header d-flex justify-content-between">
                                <p className="active">Login</p> <NavLink to={REGISTER}>Register</NavLink>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <button className="btn btn-dark auth-btn">Login</button>
                            <p className="text-center">Forget your password ?</p>
                            <div className="social-auth d-flex justify-content-between">
                                <p>Facebook</p>
                                <p>Twitter</p>
                                <p>Google +</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
