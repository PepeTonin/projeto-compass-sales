import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function SignUp({ navigation, route }: NavigationProps) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <ScreenTitle>Sign up</ScreenTitle>
      </View>
      <View style={styles.innerContainer}>
        <SignUpForm navigation={navigation} route={route}/>
      </View>
    </View>
  );
}
