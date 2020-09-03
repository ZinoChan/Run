import React from 'react'

export default function Register() {
    return (
        <section className="register">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-xl-6">
                        <div className="auth-img">
                            <h2>Register</h2>
                        </div>
                    </div>
                    <div className="col-xl-6" style={{alignSelf: "center"}}>
                        <form className="auth-form">
                            <div className="form-header d-flex justify-content-between">
                                <p>Login</p> <p className="active">Register</p>
                            </div>
                            <div className="social-auth d-flex justify-content-between">
                                <p>Facebook</p>
                                <p>Twitter</p>
                                <p>Google +</p>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <button className="btn btn-dark auth-btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}