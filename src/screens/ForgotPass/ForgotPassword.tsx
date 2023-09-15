import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import ForgotPasswordForm from '../../components/forms/ForgotPassForm/ForgotPasswordForm';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function ForgotPassword({ navigation, route }: NavigationProps) {
  function returnScreenHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.backButtonContainer}>
        <BackRouteButton onPress={returnScreenHandler} text='Login' />
      </View>
      <View style={styles.titleContainer}>
        <ScreenTitle>Forgot password</ScreenTitle>
      </View>
      <View style={styles.innerContainer}>
        <ForgotPasswordForm navigation={navigation} route={route} />
      </View>
    </View>
  );
}
