import { REGISTER } from '../constants/routes';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import React from 'react';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const auth = useAppSelector(
    (state) => state.auth.id && state.auth.type === 'client'
  );

  if (!auth)
    return <Navigate to={REGISTER} state={{ from: location }} replace />;

  return children;
}
