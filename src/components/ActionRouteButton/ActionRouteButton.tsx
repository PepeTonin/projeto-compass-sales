import { PropsWithChildren } from 'react';
import { Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  onPress: () => void;
  icon: 'arrow' | 'new-account'
}

export default function ActionRouteButton({ children, onPress, icon }: PropsWithChildren<Props>) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      {icon === 'arrow' && <FontAwesome name="long-arrow-right" size={24} color={Colors.primary} />}
      {icon === 'new-account' && <FontAwesome name="user-plus" size={20} color={Colors.primary} />}
    </Pressable>
  );
}
