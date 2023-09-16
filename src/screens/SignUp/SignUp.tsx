import { useContext, useEffect } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm';
import { StatusBarContext } from '../../context/status-bar-color-context';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function SignUp({ navigation, route }: NavigationProps) {
  const statusBarStyleContext = useContext(StatusBarContext);

  useEffect(() => {
    statusBarStyleContext.setStatusBarDark();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <ScreenTitle>Sign up</ScreenTitle>
      </View>
      <View style={styles.innerContainer}>
        <SignUpForm navigation={navigation} route={route} />
      </View>
    </View>
  );
}
