import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PreLoader from '@/components/ui/PreLoader';
import { useAppSelector } from '@/store';

const UseAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  /* @ts-ignore */
  const from = location?.state?.from?.pathname || '/';

  const { isUser, isAuthenticating } = useAppSelector((state) => ({
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
