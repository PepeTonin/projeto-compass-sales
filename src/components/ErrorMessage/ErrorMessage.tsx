import { Text } from 'react-native';

import { styles } from './style';

interface Props {
  type: 'email' | 'name' | 'password';
}

export default function ErrorMessage({ type }: Props) {
  function setTextDynamicly(type: string) {
    switch (type) {
      case 'name':
        return 'Not a valid name. Should have 4 or more characters.';
      case 'email':
        return 'Not a valid email address. Should be "your@email.com"';
      case 'password':
        return 'Not a valid password. Should have 6 or more characters.';
    }
  }
  return <Text style={styles.text}>{setTextDynamicly(type)}</Text>;
}
