import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular400',
    color: Colors.black,
    fontSize: 12,
  },
});
