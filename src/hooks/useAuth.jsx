import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PreLoader from '../components/ui/PreLoader';

const UseAuth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const { isUser, isAuthenticating } = useSelector((state) => ({
    isUser: state.auth.id && state.auth.type === 'client',
    isAuthenticating: state.app.isAuthenticating,
  }));

  useEffect(() => {
    if (isUser) {
      navigate(from, { replace: true });
    }
  }, [isUser, from, navigate]);

  return (
    <>
      {isAuthenticating && <PreLoader />}
      {!isAuthenticating && children}
    </>
  );
};

export default UseAuth;
