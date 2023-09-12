import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function SignUp({ navigation }: NavigationProps) {
  function signUpHandler() {
    console.log('firebase auth - sign up with email');
    navigation.navigate('AuthRoutes');
  }
  function alreadyHaveAccountHandler() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <ActionRouteButton onPress={alreadyHaveAccountHandler}>
        Already have an account?
      </ActionRouteButton>
      <SuccessRouteButton onPress={signUpHandler}>SIGN UP</SuccessRouteButton>
    </View>
  );
}
