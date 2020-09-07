import React from 'react'

export default function BillingDetails() {
    return (
        <div className="biling-details d-flex align-items-center min-vh-100">
            <div className="container-fluid w-50">
                <h1 className="display-1 mb-5 text-center">Billing Details</h1>
                <form className="details-form">
                    <div className="row">
                        <div className="col-xl-6 form-group mb-3">
                            <label>Full Name*</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-xl-6 form-group mb-3">
                            <label>Email*</label>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="col-xl-6 form-group mb-3">
                            <label>House Number And Street Name*</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-xl-6 form-group mb-3">
                            <label>Country*</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-xl-6 form-group mb-3">
                            <label>Town / City*</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-xl-6 form-group mb-3">
                            <label>Phone Number*</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <button className="btn btn-dark">Back</button>
                        <button className="btn btn-dark">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
