import React from 'react';
import { CHECKOUT_STEP_1, CHECKOUT_STEP_3 } from '../../constants/routes';
import { NavLink, useNavigate } from 'react-router-dom';
import TextInput from '../../components/checkout/TextInput';
import { Formik } from 'formik';
import { billingValidation } from '../../helpers/validation';

const BillingDetails = () => {
  const navigate = useNavigate();

  return (
    <section className=" d-flex align-items-center mx-auto min-vh-100">
      <div className="glass"></div>
      <div className="container-fluid">
        <h1 className="fs-1 mb-5 text-center">Billing Details</h1>
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
            navigate(CHECKOUT_STEP_3, { replace: true });
          }}
        >
          {({ handleSubmit }) => (
            <form
              className="w-75 mx-auto"
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
              <div className="d-flex justify-content-between mt-2">
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
    </section>
  );
};

export default BillingDetails;
