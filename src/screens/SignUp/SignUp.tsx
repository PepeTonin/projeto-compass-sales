import { useState, useEffect } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';
import UserInput from '../../components/UserInput/UserInput';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../util/inputValidations';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function SignUp({ navigation }: NavigationProps) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isNameEmpty, setIsNameEmpty] = useState(true);
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

  function signUpHandler() {
    console.log('firebase auth - sign up with email');
    setIsSubmitted(true);
    // navigation.replace('AuthRoutes');
  }

  function alreadyHaveAccountHandler() {
    navigation.navigate('Login');
  }

  function updateEnteredNameHandler(enteredValue: string) {
    setEnteredName(enteredValue);

    if (nameValidation(enteredValue)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }

    if (enteredValue.length > 0) {
      setIsNameEmpty(false);
    } else {
      setIsNameEmpty(true);
    }

    setIsSubmitted(false);
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
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <ScreenTitle>Sign up</ScreenTitle>
        </View>
        <View style={styles.inputsContainer}>
          <UserInput
            type="name"
            placeholder="Name"
            onChangeText={updateEnteredNameHandler}
            value={enteredName}
            isValid={isNameValid}
            isEmpty={isNameEmpty}
            isSubmitted={isSubmitted}
          />
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
          <ActionRouteButton onPress={alreadyHaveAccountHandler}>
            Already have an account?
          </ActionRouteButton>
        </View>
        <View style={styles.buttonContainer}>
          <SuccessRouteButton onPress={signUpHandler}>
            SIGN UP
          </SuccessRouteButton>
        </View>
      </View>
    </View>
  );
}
