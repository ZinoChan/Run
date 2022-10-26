import UseAuth from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/store';
import { signIn, signInWithGoogle } from '@/reducers/authReducer';
import { GoogleOutlined } from '@ant-design/icons';
import { Form, Formik, FormikProps } from 'formik';
import { loginValidation } from '@/helpers/validation';
import TextInput, { Label } from '@/components/checkout/TextInput';
import { Link } from 'react-router-dom';
import { REGISTER } from '@/constants/routes';
import PreLoader from '@/components/ui/PreLoader';

type Values = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { authStatus, isAuthenticating } = useAppSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating,
  }));

  const handleSignIn = () => dispatch(signInWithGoogle());

  return (
    <UseAuth>
      <section className="py-4">
        {isAuthenticating && <PreLoader />}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2>Login</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              {authStatus && (
                <div className="alert alert-danger" role="alert">
                  {' '}
                  {authStatus.message}{' '}
                </div>
              )}
              <div className="login-wrap p-0">
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={loginValidation}
                  onSubmit={(values, { resetForm }) => {
                    resetForm();
                    dispatch(
                      signIn({ email: values.email, password: values.password })
                    );
                  }}
                >
                  {(props: FormikProps<Values>) => (
                    <Form action="#" className="signin-form">
                      <div className="form-group mb-4">
                        <Label label="email" />
                        <TextInput
                          name="email"
                          type="text"
                          className="form-control form-input mb-1"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <Label label="password" />
                        <TextInput
                          type="password"
                          className="form-control form-input mb-1"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div className="form-group mb-2">
                        <button
                          type="submit"
                          className="form-control btn btn-danger submit px-3"
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="form-group d-md-flex">
                        <div>
                          <span className="me-1">don't have an account ? </span>
                          <Link to={REGISTER}>Create Account</Link>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
                <p className="w-100 text-center my-2">— Or Sign In With —</p>
                <div className="social d-flex text-center">
                  <button
                    className="btn btn-dark d-flex w-100 justify-content-center align-items-center"
                    onClick={handleSignIn}
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
};

export default Login;
