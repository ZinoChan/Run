import { useState } from 'react';
import { CHECKOUT_STEP_2, SHOP } from '@/constants/routes';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { paymentValidation } from '@/helpers/validation';
import TextInput, { Label } from '@/components/checkout/TextInput';
import { toast } from 'react-hot-toast';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '@/components/checkout/CheckBox';
import { useAppDispatch } from '@/store';
import { clearCart } from '@/reducers/cartReducer';

export default function Payment() {
  const [isOpenModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setOpenModal(true);

  const closeModal = () => {
    setOpenModal(false);
    navigate(SHOP, { replace: true });
  };

  const dispatch = useAppDispatch();

  return (
    <section className="d-flex align-items-center mx-auto min-vh-100">
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold mb-3 text-center">Payment</h1>
        <Formik
          initialValues={{
            cardName: '',
            cardNumber: '',
            cvvCode: '',
            date: '',
            terms: '',
          }}
          validationSchema={paymentValidation}
          onSubmit={(values, { resetForm }) => {
            openModal();
            toast.success('Order Successfully Confirmed');
            resetForm();
            dispatch(clearCart());
          }}
        >
          {({ handleSubmit }) => (
            <form
              className="w-50 mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="form-group mb-3">
                <Label label="Name on Card*" />
                <TextInput
                  name="cardName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <Label label="Card Number*" />
                <TextInput
                  name="cardNumber"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <Label label="Cvv Code*" />
                <TextInput
                  name="cvvCode"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <Label label="Expirity Date*" />
                <TextInput name="date" type="date" className="form-control" />
              </div>
              <CheckBox name="terms" />
              <div className="d-flex justify-content-between mt-2">
                <Link to={CHECKOUT_STEP_2} className="btn btn-dark">
                  Back
                </Link>
                <button className="btn btn-dark" type="submit">
                  Confirm
                </button>
              </div>
            </form>
          )}
        </Formik>
        <ConfirmModal isOpen={isOpenModal} closeModal={closeModal}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: '#28a745', fontSize: '3rem' }}
          />
          <p className="confirm-para my-4">Order Successfully Confirmed</p>
          <Link to={SHOP} className="btn btn-success">
            Back to Shop
          </Link>
          <button
            className="btn btn-light position-absolute modal-btn"
            onClick={closeModal}
          >
            X
          </button>
        </ConfirmModal>
      </div>
    </section>
  );
}
