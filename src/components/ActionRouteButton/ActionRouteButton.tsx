import { Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  children: string;
  onPress: () => void;
}

export default function ActionRouteButton({ children, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <FontAwesome name="long-arrow-right" size={24} color={Colors.primary} />
    </Pressable>
  );
}
