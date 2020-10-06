import React, {useState} from 'react'
import { CHECKOUT_STEP_2, SHOP } from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import { paymentValidation } from '../../helpers/validation';
import TextInput from '../../components/checkout/TextInput';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import ConfirmModal from '../../components/ui/ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '../../components/checkout/CheckBox';


export default function Payment() {

    const [isOpenModal, setOpenModal] = useState(false);
    const openModal = () => setOpenModal(true);

    const closeModal = () => setOpenModal(false);

    const pageTransition = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    }

    return (
        <motion.div 
            className="payment d-flex align-items-center w-50 mx-auto min-vh-100"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            <div className="container-fluid">
                <h1 className="display-1 mb-5 text-center">Payment</h1>
                <Formik
                    initialValues={{
                        cardName: '',
                        cardNumber: '',
                        cvvCode: '',
                        date: '',
                        terms: ''
                    }}

                    validationSchema={paymentValidation}

                    onSubmit={(values, { resetForm}) => {
                        openModal();
                        toast.success('Order Successfully Confirmed');
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
                                <CheckBox name="terms"/>
                            <div className="d-flex justify-content-between mt-5">
                                <NavLink to={CHECKOUT_STEP_2} className="btn btn-dark">Back</NavLink>
                                <button className="btn btn-dark" type="submit" >Confirm</button>
                            </div>
                        </form>
                    }
                

                </Formik>
                <ConfirmModal
                    isOpen={isOpenModal}
                    closeModal={closeModal}
                    
                >
                    <FontAwesomeIcon icon={faCheckCircle} style={{color:"#28a745", fontSize: "3rem"}}/>
                    <p className="confirm-para my-4">Order Successfully Confirmed</p>
                    <NavLink to={SHOP} className="btn btn-success">Back to Shop</NavLink>
                    <button 
                        className="btn btn-light position-absolute modal-btn" 
                        onClick={closeModal}
                    >X</button>
                </ConfirmModal>
            </div>
        </motion.div>
    )
}
