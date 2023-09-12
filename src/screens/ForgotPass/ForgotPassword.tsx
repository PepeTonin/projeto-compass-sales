import { useState } from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import UserInput from '../../components/UserInput/UserInput';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function ForgotPassword({ navigation }: NavigationProps) {
  const [enteredEmail, setEnteredEmail] = useState('');

  function sendRequestForgotPasswordHandler() {
    console.log('firebase auth - new passowrd');
  }

  function returnScreenHandler() {
    navigation.goBack();
  }

  function updateEnteredEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.backButtonContainer}>
          <BackRouteButton onPress={returnScreenHandler} />
        </View>
        <View style={styles.titleContainer}>
          <ScreenTitle>Forgot password</ScreenTitle>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <UserInput
            type="email"
            placeholder="Email"
            onChangeText={updateEnteredEmailHandler}
            value={enteredEmail}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SuccessRouteButton onPress={sendRequestForgotPasswordHandler}>
            SEND
          </SuccessRouteButton>
        </View>
      </View>
    </View>
  );
}
