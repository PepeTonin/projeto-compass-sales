import { PropsWithChildren, createContext, useState } from 'react';

interface StatusBarContextType {
  style: string;
  setStatusBarDark: () => void;
  setStatusBarLight: () => void;
}

export const StatusBarContext = createContext({} as StatusBarContextType);

export default function StatusBarContextProvider({
  children,
}: PropsWithChildren) {
  const [statusBarStyle, setStatusBarStyle] = useState('dark');

  function setStatusBarDark() {
    setStatusBarStyle('dark');
  }

  function setStatusBarLight() {
    setStatusBarStyle('light');
  }

  const value = {
    style: statusBarStyle,
    setStatusBarDark: setStatusBarDark,
    setStatusBarLight: setStatusBarLight,
  };

  return (
    <StatusBarContext.Provider value={value}>
      {children}
    </StatusBarContext.Provider>
  );
}
