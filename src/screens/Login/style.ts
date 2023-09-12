import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  innerContainer: {
    margin: 20,
  },
  backButtonContainer: {
    marginTop: 30,
    height: 20,
    alignItems: 'flex-start',
  },
  titleContainer: {
    width: '100%',
    marginTop: 30,
  },
  inputsContainer: {
    width: '100%',
    marginTop: 40,
  },
  textContainer: {
    width: '100%',
    marginTop: 16,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
  },
});
