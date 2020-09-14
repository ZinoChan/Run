import React from 'react';
import AccountNav from './AccountNav';

export default function Account() {
    return (
       <section className="account min-vh-100 d-flex align-items-center">
           <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-3">
                        <AccountNav/>
                    </div>
                    <div className="col-xl-9">
                        <h1 className="display-1 mb-1 text-center">Account Details</h1>
                        <p className="text-dark font-weight-bold text-center mb-5">Edit field to change*</p>
                        <form className="details-form">
                            <div className="row">
                                <div className="col-lg-6 form-group mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-lg-6 form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="col-lg-6 form-group mb-3">
                                    <label>House Number And Street Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-lg-6 form-group mb-3">
                                    <label>Country</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-lg-6 form-group mb-3">
                                    <label>Town / City</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-lg-6 form-group mb-3">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-5">
                                <button className="btn btn-dark">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </section>
    )
}
