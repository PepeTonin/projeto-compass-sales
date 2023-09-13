import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/GlobalColors';
export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.lightBackground,
  },
  titleContainer: {
    width: '100%',
    marginTop: 100,
    marginLeft: 20,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
