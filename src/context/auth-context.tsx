import { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  name: string | null;
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string, name: string) => void;
  authenticateWithAsyncStorage: (token: string | null, name: string | null) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [authToken, setAuthToken] = useState<string | null>('');
  const [authName, setAuthName] = useState<string | null>('');

  async function authenticate(token: string, name: string) {
    setAuthToken(token);
    setAuthName(name);
    await AsyncStorage.setItem('authToken', token);
    await AsyncStorage.setItem('authName', name);
  }

  function authenticateWithAsyncStorage(token: string | null, name: string | null) {
    setAuthToken(token);
    setAuthName(name);
  }

  async function logout() {
    setAuthToken('');
    setAuthName('');
    await AsyncStorage.setItem('authToken', '');
    await AsyncStorage.setItem('authName', '');
  }

  const value = {
    name: authName,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    authenticateWithAsyncStorage: authenticateWithAsyncStorage,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
