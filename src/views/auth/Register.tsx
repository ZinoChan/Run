import UseAuth from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/store';
import { createAccount, signInWithGoogle } from '@/reducers/authReducer';
import { GoogleOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '@/helpers/validation';
import TextInput, { Label } from '@/components/checkout/TextInput';
import { Link } from 'react-router-dom';
import { LOGIN } from '@/constants/routes';
import PreLoader from '@/components/ui/PreLoader';

type Values = {
  fullName: string;
  email: string;
  password: string;
};

export default function Register() {
  const dispatch = useAppDispatch();
  const { authStatus, isAuthenticating } = useAppSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: yupResolver(registerValidation),
  });

  const handleSignUp = () => dispatch(signInWithGoogle());

  const onSubmit = (values: Values) => {
    dispatch(
      createAccount({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <UseAuth>
      <section className="py-4">
        {isAuthenticating && <PreLoader />}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2>Create an account</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              {authStatus && (
                <div className="alert alert-danger" role="alert">
                  {authStatus.message}
                </div>
              )}

              <div className="login-wrap p-0">
                <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
                  <div className="form-group mb-4">
                    <Label label="full name" />
                    <TextInput
                      name="fullName"
                      type="text"
                      className="form-control form-input mb-1"
                      register={register}
                      error={errors.fullName}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Label label="email" />
                    <TextInput
                      name="email"
                      type="text"
                      className="form-control form-input mb-1"
                      register={register}
                      error={errors.email}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Label label="password" />
                    <TextInput
                      name="password"
                      type="password"
                      className="form-control form-input mb-1"
                      register={register}
                      error={errors.password}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <button
                      type="submit"
                      className="form-control btn btn-danger submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div>
                      <span className="me-1">
                        already have an account ?
                      </span>
                      <Link to={LOGIN}>Login</Link>
                    </div>
                  </div>
                </form>
                <p className="w-100 text-center my-2">— Or Sign Up With —</p>
                <div className="social d-flex text-center">
                  <button
                    className="btn btn-dark d-flex w-100 justify-content-center align-items-center"
                    onClick={handleSignUp}
                  >
                    <GoogleOutlined />
                    <span className="ms-2">Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UseAuth>
  );
}
