import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import SuccessRouteButton from '../../components/SuccessRouteButton/SuccessRouteButton';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function ForgotPassword({ navigation }: NavigationProps) {
  function sendRequestForgotPasswordHandler() {
    console.log('firebase auth - new passowrd');
  }

  function returnScreenHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BackRouteButton onPress={returnScreenHandler} />
      <Text>Forgot password</Text>
      <SuccessRouteButton onPress={sendRequestForgotPasswordHandler}>
        SEND
      </SuccessRouteButton>
    </View>
  );
}
