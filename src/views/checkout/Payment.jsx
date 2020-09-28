import React from 'react'
import { CHECKOUT_STEP_2 } from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { paymentValidation } from '../../helpers/validation';
import TextInput from '../../components/checkout/TextInput';

export default function Payment() {
    return (
        <div className="payment d-flex align-items-center w-50 mx-auto min-vh-100">
            <div className="container-fluid">
                <h1 className="display-1 mb-5 text-center">Payment</h1>
                <Formik
                    initialValues={{
                        cardName: '',
                        cardNumber: '',
                        cvvCode: '',
                        date: ''
                    }}

                    validationSchema={paymentValidation}

                    onSubmit={(values, { resetForm}) => {
                        
                        console.log(values);
                        resetForm();
                    }}
                >
                    {({handleSubmit}) =>
                        <form 
                            className="details-form"  
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                                <div className="form-group mb-3">
                                    <TextInput label="Name on Card*" name="cardName" type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <TextInput label="Card Number*" name="cardNumber" type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <TextInput label="Cvv Code*" name="cvvCode" type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <TextInput label="Expirity Date*" name="date" type="date" className="form-control"/>
                                </div>
                            <div className="d-flex justify-content-between mt-5">
                                <NavLink to={CHECKOUT_STEP_2} className="btn btn-dark">Back</NavLink>
                                <button className="btn btn-dark" type="submit">Confirm</button>
                            </div>
                        </form>
                    }
                

                </Formik>
            </div>
        </div>
    )
}
