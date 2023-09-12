import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import UserInput from '../../components/UserInput/UserInput';

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
  }

  function updateEnteredPasswordHandler(enteredValue: string) {
    setEnteredPassword(enteredValue);
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
          />
          <UserInput
            type="password"
            placeholder="Password"
            onChangeText={updateEnteredPasswordHandler}
            value={enteredPassword}
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
