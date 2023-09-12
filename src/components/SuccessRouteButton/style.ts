import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    elevation: 3,
  },
  innerText: {
    fontFamily: 'Roboto-Medium500',
    color: Colors.white,
    fontSize: 18,
  },
});
