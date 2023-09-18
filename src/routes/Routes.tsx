import { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import { AuthContext } from '../context/auth-context';
import AuthRoutes from './routes/AuthRoutes';
import NonAuthRoutes from './routes/NonAuthRoutes';
import LoadingOverlay from '../components/LoadingOverlay/LoadingOverlay';
import { StatusBarContext } from '../context/status-bar-color-context';

export default function Routes() {
  const statusBarStyleContext = useContext(StatusBarContext);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('dark');

  const authContext = useContext(AuthContext);
  const [isNotTryingToLogin, setIsNotTryingToLogin] = useState(false);

  useEffect(() => {
    if (statusBarStyleContext.style === 'light') {
      setStatusBarStyle(() => 'light');
    }

    if (statusBarStyleContext.style === 'dark') {
      setStatusBarStyle(() => 'dark');
    }
  }, [statusBarStyleContext.style]);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('authToken');
      const storedName = await AsyncStorage.getItem('authName');
      if (storedToken) {
        authContext.authenticateWithAsyncStorage(storedToken, storedName);
      }
      setIsNotTryingToLogin(true);
    }
    fetchToken();
  }, []);

  if (isNotTryingToLogin) {
    return (
      <>
        <StatusBar style={statusBarStyle} />
        {!authContext.isAuthenticated && <NonAuthRoutes />}
        {authContext.isAuthenticated && <AuthRoutes />}
      </>
    );
  }

  return <LoadingOverlay />;
}
