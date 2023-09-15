import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function Login({ navigation, route }: NavigationProps) {
  function returnScreenHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.backButtonContainer}>
        <BackRouteButton onPress={returnScreenHandler} text="Sign up" />
      </View>
      <View style={styles.titleContainer}>
        <ScreenTitle>Login</ScreenTitle>
      </View>
      <View style={styles.innerContainer}>
        <LoginForm navigation={navigation} route={route} />
      </View>
    </View>
  );
}
