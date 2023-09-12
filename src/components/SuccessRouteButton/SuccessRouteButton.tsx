import { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { styles } from './style';

SplashScreen.preventAutoHideAsync();

interface Props {
  children: string;
  onPress: () => void;
}

export default function SuccessRouteButton({ children, onPress }: Props) {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium500': require('../../assets/fonts/Roboto-Medium500.ttf'),
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
    <TouchableOpacity
      onLayout={onLayoutRootView}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.innerText}>{children}</Text>
    </TouchableOpacity>
  );
}
