import { useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AuthContextProvider from './src/context/auth-context';
import StatusBarContextProvider from './src/context/status-bar-color-context';
import Routes from './src/routes/Routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black900': require('./src/assets/fonts/Roboto-Black900.ttf'),
    'Roboto-Bold700': require('./src/assets/fonts/Roboto-Bold700.ttf'),
    'Roboto-Medium500': require('./src/assets/fonts/Roboto-Medium500.ttf'),
    'Roboto-Regular400': require('./src/assets/fonts/Roboto-Regular400.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.rootAppContainer}>
      <AuthContextProvider>
        <StatusBarContextProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </StatusBarContextProvider>
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootAppContainer: {
    flex: 1,
  },
});
