import { Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  onPress: () => void;
}

export default function LogoutButton({ onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Logout</Text>
      <MaterialIcons name="logout" size={24} color={Colors.white} />
    </Pressable>
  );
}
