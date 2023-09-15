import { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import { AuthContext } from '../../context/auth-context';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function MainScreen({ navigation, route }: NavigationProps) {
  const authContext = useContext(AuthContext);

  function logoutHandler(){
    authContext.logout()
  }

  return (
    <View style={styles.container}>
      <Text>MAIN SCREEN NAME: {authContext.name}</Text>
      <Button title="LOGOUT" onPress={logoutHandler} />
    </View>
  );
}
