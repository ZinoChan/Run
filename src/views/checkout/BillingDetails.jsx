import React from 'react';
import { CHECKOUT_STEP_1, CHECKOUT_STEP_3 } from '../../constants/routes';
import { NavLink, withRouter } from 'react-router-dom';
import TextInput from '../../components/checkout/TextInput';
import { Formik } from 'formik';
import { billingValidation } from '../../helpers/validation';
import { motion } from 'framer-motion';

const BillingDetails = ({ history }) => {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="billing-details d-flex align-items-center mx-auto w-50 min-vh-100"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="container-fluid">
        <h1 className="display-1 mb-5 text-center">Billing Details</h1>
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            address: '',
            country: '',
            city: '',
            phone: '',
          }}
          validationSchema={billingValidation}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            history.push(CHECKOUT_STEP_3);
          }}
        >
          {({ handleSubmit }) => (
            <form
              className="details-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="row">
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="Full Name*"
                    name="fullname"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="Email*"
                    name="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="House Number And Street Name*"
                    name="address"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="Country*"
                    name="country"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="Town / City*"
                    name="city"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-xl-6 form-group mb-3">
                  <TextInput
                    label="Phone*"
                    name="phone"
                    type="phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <NavLink to={CHECKOUT_STEP_1} className="btn btn-dark">
                  Back
                </NavLink>
                <button className="btn btn-dark" type="submit">
                  Continue
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default withRouter(BillingDetails);
