import { useContext } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import { AuthContext } from '../../context/auth-context';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

type RootStackParamList = {
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthRoutes: any;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export default function MainScreen({ navigation, route }: NavigationProps) {
  const authContext = useContext(AuthContext);

  function logoutHandler() {
    authContext.logout();
  }

  const image = require('../../assets/images/compass-background-image.png');

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={image}
      resizeMode="cover"
    >
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.topText}>Hello, {authContext.name}</Text>
          <LogoutButton onPress={logoutHandler} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Compass sale</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
