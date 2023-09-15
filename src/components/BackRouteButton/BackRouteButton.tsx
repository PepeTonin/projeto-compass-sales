import { Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  onPress: () => void;
  text?: string;
}

export default function BackRouteButton({ onPress, text }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AntDesign name="left" size={24} color={Colors.black} />
      {!!text? <Text style={styles.text}>{text}</Text>: null}
    </Pressable>
  );
}
