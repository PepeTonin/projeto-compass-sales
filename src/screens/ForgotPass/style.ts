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

  textContainer: {
    width: '100%',
    marginTop: 60,
  },
  text: {
    fontFamily: 'Roboto-Medium500',
    fontSize: 16,
    lineHeight: 20,
  },
  inputsContainer: {
    width: '100%',
    marginTop: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
  },
});
