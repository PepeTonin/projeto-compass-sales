import { useState, useEffect } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ActionRouteButton from '../../ActionRouteButton/ActionRouteButton';
import SuccessRouteButton from '../../SuccessRouteButton/SuccessRouteButton';
import UserInput from '../../UserInput/UserInput';
import {
  emailValidation,
  passwordValidation,
} from '../../../util/inputValidations';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function LoginForm({ navigation }: NavigationProps) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const setIsSubmittedToFalseWhenScreenRenders = navigation.addListener(
      'focus',
      () => {
        setIsSubmitted(false);
      }
    );
    return setIsSubmittedToFalseWhenScreenRenders;
  }, [navigation]);

  function loginHandler() {
    console.log('firebase auth - login');
    setIsSubmitted(true);
    // navigation.replace('AuthRoutes');
  }

  function forgotPasswordHandler() {
    navigation.navigate('ForgotPassword');
  }

  function updateEnteredEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);

    if (emailValidation(enteredValue)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (enteredValue.length > 0) {
      setIsEmailEmpty(false);
    } else {
      setIsEmailEmpty(true);
    }

    setIsSubmitted(false);
  }

  function updateEnteredPasswordHandler(enteredValue: string) {
    setEnteredPassword(enteredValue);

    if (passwordValidation(enteredValue)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }

    if (enteredValue.length > 0) {
      setIsPasswordEmpty(false);
    } else {
      setIsPasswordEmpty(true);
    }

    setIsSubmitted(false);
  }

  return (
    <>
      <View style={styles.inputsContainer}>
        <UserInput
          type="email"
          placeholder="Email"
          onChangeText={updateEnteredEmailHandler}
          value={enteredEmail}
          isValid={isEmailValid}
          isEmpty={isEmailEmpty}
          isSubmitted={isSubmitted}
        />
        <UserInput
          type="password"
          placeholder="Password"
          onChangeText={updateEnteredPasswordHandler}
          value={enteredPassword}
          isValid={isPasswordValid}
          isEmpty={isPasswordEmpty}
          isSubmitted={isSubmitted}
        />
      </View>
      <View style={styles.textContainer}>
        <ActionRouteButton onPress={forgotPasswordHandler}>
          Forgot your password?
        </ActionRouteButton>
      </View>
      <View style={styles.buttonContainer}>
        <SuccessRouteButton onPress={loginHandler}>LOGIN</SuccessRouteButton>
      </View>
    </>
  );
}