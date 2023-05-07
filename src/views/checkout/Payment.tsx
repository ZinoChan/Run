import { useState } from 'react';
import { CHECKOUT_STEP_2, SHOP } from '@/constants/routes';
import { Link, useNavigate } from 'react-router-dom';
import { paymentValidation } from '@/helpers/validation';
import TextInput, { Label } from '@/components/checkout/TextInput';
import { toast } from 'react-hot-toast';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '@/components/checkout/CheckBox';
import { useAppDispatch } from '@/store';
import { clearCart } from '@/reducers/cartReducer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Payment() {
  const [isOpenModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setOpenModal(true);

  const closeModal = () => {
    setOpenModal(false);
    navigate(SHOP, { replace: true });
  };

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentValidation),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    openModal();
    toast.success('Order Successfully Confirmed');
    dispatch(clearCart());
  };

  return (
    <section className="d-flex align-items-center mx-auto min-vh-100">
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold mb-3 text-center">Payment</h1>
        <form
          className="w-50 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group mb-3">
            <Label label="Name on Card*" />
            <TextInput
              name="cardName"
              type="text"
              className="form-control"
              register={register}
              error={errors.cardName}
            />
          </div>
          <div className="form-group mb-3">
            <Label label="Card Number*" />
            <TextInput
              name="cardNumber"
              type="text"
              className="form-control"
              register={register}
              error={errors.cardNumber}
            />
          </div>
          <div className="form-group mb-3">
            <Label label="Cvv Code*" />
            <TextInput
              name="cvvCode"
              type="text"
              className="form-control"
              register={register}
              error={errors.cvvCode}
            />
          </div>
          <div className="form-group mb-3">
            <Label label="Expirity Date*" />
            <TextInput
              name="date"
              type="date"
              className="form-control"
              register={register}
              error={errors.date}
            />
          </div>
          <CheckBox name="terms" register={register} error={errors.terms} />
          <div className="d-flex justify-content-between mt-2">
            <Link to={CHECKOUT_STEP_2} className="btn btn-dark">
              Back
            </Link>
            <button className="btn btn-dark" type="submit">
              Confirm
            </button>
          </div>
        </form>
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
