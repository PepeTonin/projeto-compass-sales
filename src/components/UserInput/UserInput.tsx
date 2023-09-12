import { TextInput, View } from 'react-native';
import {} from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  type: 'email' | 'name' | 'password';
  placeholder: string;
  onChangeText: (enteredValue: string) => void;
  value: string;
}

export default function UserInput({
  type,
  placeholder,
  onChangeText,
  value,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.innerText}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
    </View>
  );
}
