import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: Colors.white,
    elevation: 3,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  innerText: {
    flex: 1,
    height: '100%',
    fontFamily: 'Roboto-Medium500',
    textAlignVertical: 'center',
    textAlign: 'left',
    fontSize: 16,
    color: Colors.black,
    marginLeft: 20,
  },
  iconContainer: {
    marginRight: 20,
  },
});
