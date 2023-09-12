import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 343,
    height: 48,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    elevation: 5,
  },
  innerText: {
    fontFamily: 'Roboto-Medium500',
    color: Colors.whiteText,
    fontSize: 14,
  },
});
