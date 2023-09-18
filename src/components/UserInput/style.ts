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
  isInvalidInputContainer: {
    borderWidth: 1,
    borderColor: Colors.fail,
  },
  labelText: {
    display: 'none',
    marginTop: 4,
    fontFamily: 'Roboto-Regular400',
    color: Colors.gray,
    fontSize: 12,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 22,
  },
  innerText: {
    flex: 1,
    height: '100%',
    fontFamily: 'Roboto-Medium500',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontSize: 16,
    color: Colors.black,
  },
  errorMessageContainer: {
    alignItems: 'center',
    marginBottom: 4,
  },
  notEmptyInputLabel: {
    display: 'flex',
  },
  notEmptyInputInnerContainer: {
    marginTop: 2,
  },
});
