import React from 'react'
import { CHECKOUT_STEP_2 } from '../../constants/routes'
import { NavLink } from 'react-router-dom'


export default function Payment() {
    return (
        <div className="payment d-flex align-items-center w-50 mx-auto min-vh-100">
            <div className="container-fluid">
                <h1 className="display-1 mb-5 text-center">Payment</h1>
                <form className="details-form">
                    <div className=" form-group mb-3">
                        <label>Name On Card*</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className=" form-group mb-3">
                        <label>Card Number*</label>
                        <input type="phone" className="form-control"/>
                    </div>
                    <div className=" form-group mb-3">
                        <label>Expirity Date*</label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <NavLink to={CHECKOUT_STEP_2} className="btn btn-dark">Back</NavLink>
                        <button className="btn btn-dark">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
