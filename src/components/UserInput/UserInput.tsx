import {  } from 'react';
import { TextInput, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface Props {
  type: 'email' | 'name' | 'password';
  placeholder: string;
  onChangeText: (enteredValue: string) => void;
  value: string;
  isValid: boolean;
  isEmpty: boolean;
  isSubmitted: boolean;
}

export default function UserInput({
  type,
  placeholder,
  onChangeText,
  value,
  isValid,
  isEmpty,
  isSubmitted,
}: Props) {

  return (
    <View
      style={[
        styles.outerContainer,
        isSubmitted && !isValid && styles.isInvalidInputContainer,
      ]}
    >
      <Text style={[styles.labelText, !isEmpty && styles.notEmptyInputLabel]}>{placeholder}</Text>
      <View style={[styles.innerContainer, !isEmpty && styles.notEmptyInputInnerContainer]}>
        <TextInput
          style={styles.innerText}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={type === 'password'}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
        {isEmpty && !isSubmitted ? null : isValid ? (
          <AntDesign name="check" size={24} color={Colors.success} />
        ) : (
          <AntDesign name="close" size={24} color={Colors.fail} />
        )}
      </View>
      {isSubmitted && !isValid ? (
        <View style={styles.errorMessageContainer}>
          <ErrorMessage type={type} />
        </View>
      ) : null}
    </View>
  );
}
