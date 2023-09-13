import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.white,
    elevation: 3,
    marginTop: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  invalidInputContainer: {
    borderWidth: 1,
    borderColor: Colors.fail,
  },
  innerText: {
    flex: 1,
    height: '100%',
    fontFamily: 'Roboto-Medium500',
    textAlignVertical: 'center',
    textAlign: 'left',
    fontSize: 16,
    color: Colors.black,
  },
  errorMessageContainer: {
    alignItems: 'center',
    marginBottom: 4,
  },
});
