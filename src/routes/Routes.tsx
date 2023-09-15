import { useContext, useState, useEffect } from 'react';
import NonAuthRoutes from './routes/NonAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';
import { AuthContext } from '../context/auth-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingOverlay from '../components/LoadingOverlay/LoadingOverlay';

export default function Routes() {
  const authContext = useContext(AuthContext);

  const [isTryingToLogin, setIsTryingToLogin] = useState(true);
  
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('authToken');
      const storedName = await AsyncStorage.getItem('authName');
      if (storedToken) {
        authContext.authenticateWithAsyncStorage(storedToken, storedName);
      }
      setIsTryingToLogin(false);
    }
    fetchToken();
  }, []);
    
  if (isTryingToLogin) {
    <LoadingOverlay />
  }

  return (
    <>
      {!authContext.isAuthenticated && <NonAuthRoutes />}
      {authContext.isAuthenticated && <AuthRoutes />}
    </>
  );
}
