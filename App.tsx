import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import NonAuthRoutes from './src/routes/NonAuthRoutes';

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
    <View onLayout={onLayoutRootView} style={styles.rootAppContainer}>
      <StatusBar style="dark" />
      <NonAuthRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  rootAppContainer: {
    flex: 1,
  },
});
