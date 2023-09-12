import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';
import UserInput from '../../components/UserInput/UserInput';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';

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

  function signUpHandler() {
    console.log('firebase auth - sign up with email');
    navigation.replace('AuthRoutes');
  }

  function alreadyHaveAccountHandler() {
    navigation.navigate('Login');
  }

  function updateEnteredNameHandler(enteredValue: string) {
    setEnteredName(enteredValue);
  }

  function updateEnteredEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);
  }

  function updateEnteredPasswordHandler(enteredValue: string) {
    setEnteredPassword(enteredValue);
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
          />
          <UserInput
            type="email"
            placeholder="Email"
            onChangeText={updateEnteredEmailHandler}
            value={enteredEmail}
          />
          <UserInput
            type="password"
            placeholder="Password"
            onChangeText={updateEnteredPasswordHandler}
            value={enteredPassword}
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
