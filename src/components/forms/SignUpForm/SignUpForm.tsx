import { useState, useEffect, useContext } from 'react';
import { Alert, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import SuccessRouteButton from '../../SuccessRouteButton/SuccessRouteButton';
import ActionRouteButton from '../../ActionRouteButton/ActionRouteButton';
import UserInput from '../../UserInput/UserInput';
import { createUser } from '../../../util/auth';
import { storeUserName } from '../../../util/userData';
import { AuthContext } from '../../../context/auth-context';
import {
  nameValidation,
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

export default function SignUpForm({ navigation }: NavigationProps) {
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

  const [isDoingRequest, setIsDoingRequest] = useState(false);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    const setIsSubmittedToFalseWhenScreenRenders = navigation.addListener(
      'focus',
      () => {
        setIsSubmitted(false);
        setEnteredName('');
        setIsNameEmpty(true);
        setEnteredEmail('');
        setIsEmailEmpty(true);
        setEnteredPassword('');
        setIsPasswordEmpty(true);
      }
      );
    return setIsSubmittedToFalseWhenScreenRenders;
  }, [navigation]);

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
    setEnteredEmail(enteredValue.toLowerCase());

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

  async function signUpHandler() {
    setIsSubmitted(true);
    setIsDoingRequest(true);
    if (isNameValid && isEmailValid && isPasswordValid) {
      try {
        const { token, uid } = await createUser(enteredEmail, enteredPassword);
        await storeUserName({ name: enteredName, uid: uid });
        authContext.authenticate(token, enteredName);
      } catch (error) {
        console.log(error)
        Alert.alert(
          'Authentication failed!',
          'Could not create user, please check your inputs or try again later.'
        );
      }
    }
    setIsDoingRequest(false);
  }

  return (
    <>
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
        <SuccessRouteButton onPress={signUpHandler}>SIGN UP</SuccessRouteButton>
      </View>
    </>
  );
}
