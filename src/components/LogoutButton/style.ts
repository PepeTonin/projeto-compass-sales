import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginRight: 4,
    fontFamily: 'Roboto-Medium500',
    color: Colors.white,
    fontSize: 18,
  },
});
