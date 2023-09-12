import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import UserInput from '../../components/UserInput/UserInput';
import {
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

export default function Login({ navigation }: NavigationProps) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  function loginHandler() {
    console.log('firebase auth - login');
    navigation.replace('AuthRoutes');
  }

  function forgotPasswordHandler() {
    navigation.navigate('ForgotPassword');
  }

  function returnScreenHandler() {
    navigation.goBack();
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
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.backButtonContainer}>
          <BackRouteButton onPress={returnScreenHandler} />
        </View>
        <View style={styles.titleContainer}>
          <ScreenTitle>Login</ScreenTitle>
        </View>
        <View style={styles.inputsContainer}>
          <UserInput
            type="email"
            placeholder="Email"
            onChangeText={updateEnteredEmailHandler}
            value={enteredEmail}
            isValid={isEmailValid}
            isEmpty={isEmailEmpty}
          />
          <UserInput
            type="password"
            placeholder="Password"
            onChangeText={updateEnteredPasswordHandler}
            value={enteredPassword}
            isValid={isPasswordValid}
            isEmpty={isPasswordEmpty}
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
      </View>
    </View>
  );
}
