import { useSelector } from 'react-redux';
import { REGISTER } from '../constants/routes';
import { useLocation, Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = useSelector(
    (state) => state.auth.id && state.auth.type === 'client'
  );

  if (!auth) return <Navigate to={REGISTER} state={{ from: location }} />;

  return children;
}
