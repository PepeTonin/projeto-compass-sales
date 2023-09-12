import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ActionRouteButton from '../../components/ActionRouteButton/ActionRouteButton';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function Login({ navigation }: NavigationProps) {
  function loginHandler() {
    console.log('firebase auth - login');
    navigation.navigate('AuthRoutes');
  }

  function forgotPasswordHandler() {
    navigation.navigate('ForgotPassword');
  }

  function returnScreenHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BackRouteButton onPress={returnScreenHandler} />
      <Text>Login</Text>
      <ActionRouteButton onPress={forgotPasswordHandler}>
        Forgot your password?
      </ActionRouteButton>
      <SuccessRouteButton onPress={loginHandler}>LOGIN</SuccessRouteButton>
    </View>
  );
}
