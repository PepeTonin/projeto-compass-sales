import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  backButtonContainer: {
    marginTop: 50,
    marginLeft: 20,
    height: 20,
    alignItems: 'flex-start',
  },
  titleContainer: {
    width: '100%',
    marginTop: 30,
    marginLeft: 20,
  },
  innerContainer: {
    margin: 20,
  },
});
