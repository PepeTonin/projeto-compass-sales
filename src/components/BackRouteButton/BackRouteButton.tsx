import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  onPress: () => void;
}

export default function BackRouteButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name="left" size={24} color={Colors.black} />
    </Pressable>
  );
}
