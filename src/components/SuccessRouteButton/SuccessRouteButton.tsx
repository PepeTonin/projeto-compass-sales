import { Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

interface Props {
  children: string;
  onPress: () => void;
}

export default function SuccessRouteButton({ children, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.innerText}>{children}</Text>
    </TouchableOpacity>
  );
}
