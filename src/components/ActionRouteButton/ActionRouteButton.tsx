import { useCallback } from 'react';
import { Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

SplashScreen.preventAutoHideAsync();

interface Props {
  children: string;
  onPress: () => void;
}

export default function ActionRouteButton({ children, onPress }: Props) {
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
    <Pressable
      onLayout={onLayoutRootView}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
      <FontAwesome name="long-arrow-right" size={24} color={Colors.primary} />
    </Pressable>
  );
}
