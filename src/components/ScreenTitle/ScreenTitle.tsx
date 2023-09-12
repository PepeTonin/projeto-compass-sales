import { Text } from 'react-native';

import { styles } from './style';

interface Props {
  children: string;
}

export default function ScreenTitle({ children }: Props) {
  return <Text style={styles.text}>{children}</Text>;
}
