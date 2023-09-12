import { useCallback } from 'react';
import { TextInput, View } from 'react-native';
import {} from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

SplashScreen.preventAutoHideAsync();

interface Props {
  type: 'email' | 'name' | 'password';
  placeholder: string;
  onChangeText: () => void;
  value: string;
}

export default function UserInput({
  type,
  placeholder,
  onChangeText,
  value,
}: Props) {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TextInput
        style={styles.innerText}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={type==='password'}
      />
    </View>
  );
}
