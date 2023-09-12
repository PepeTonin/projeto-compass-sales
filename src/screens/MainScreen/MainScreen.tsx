import { Text, View, Button } from 'react-native';

import { styles } from './style';

export default function MainScreen({ navigation }: any) {
  function onPress() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text>MAIN SCREEN</Text>
      <Button title="back to sign up screen" onPress={onPress} />
    </View>
  );
}
