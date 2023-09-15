import { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

interface AuthContextType {
  name: string;
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string, name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [authToken, setAuthToken] = useState<string>('');
  const [authName, setAuthName] = useState<string>('');

  function authenticate(token: string, name: string) {
    setAuthToken(token);
    setAuthName(name);
  }

  function logout() {
    setAuthToken('');
    setAuthName('');
  }

  const value = {
    name: authName,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
