import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

interface Props {
  type: 'email' | 'name' | 'password';
  placeholder: string;
  onChangeText: (enteredValue: string) => void;
  value: string;
  isValid: boolean;
  isEmpty: boolean;
}

export default function UserInput({
  type,
  placeholder,
  onChangeText,
  value,
  isValid,
  isEmpty,
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
      <View style={styles.iconContainer}>
        {isEmpty ? null : isValid ? (
          <AntDesign name="check" size={24} color={Colors.success} />
        ) : (
          <AntDesign name="close" size={24} color={Colors.fail} />
        )}
      </View>
    </View>
  );
}
