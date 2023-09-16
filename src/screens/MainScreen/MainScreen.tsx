import { useContext, useEffect } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import { styles } from './style';
import { AuthContext } from '../../context/auth-context';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { StatusBarContext } from '../../context/status-bar-color-context';

export default function MainScreen() {
  const authContext = useContext(AuthContext);
  const statusBarStyleContext = useContext(StatusBarContext);

  useEffect(() => {
    statusBarStyleContext.setStatusBarLight();
  }, []);

  function logoutHandler() {
    authContext.logout();
  }

  function capitalizeName(name: string | null) {
    if (name) {
      let firstLetter = name[0].toUpperCase();
      let capitalizedName = firstLetter + name.slice(1);
      return capitalizedName;
    }
    return false;
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
          <Text style={styles.topText}>
            Hello,{' '}
            <Text style={styles.topName}>
              {capitalizeName(authContext.name)}
            </Text>
          </Text>
          <LogoutButton onPress={logoutHandler} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Compass sale</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
