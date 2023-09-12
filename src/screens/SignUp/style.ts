import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/GlobalColors';
export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  titleContainer: {
    width: '100%',
    marginTop: 80,
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
