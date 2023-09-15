import { useContext } from 'react';
import NonAuthRoutes from './routes/NonAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';
import { AuthContext } from '../context/auth-context';

export default function Routes() {
  const authContext = useContext(AuthContext);
  return (
    <>
      {!authContext.isAuthenticated && <NonAuthRoutes />}
      {authContext.isAuthenticated && <AuthRoutes />}
    </>
  );
}
