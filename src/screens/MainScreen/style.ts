import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalColors';

export const styles = StyleSheet.create({
  imageBackground: {
    height: 600,
  },
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontFamily: 'Roboto-Bold700',
    color: Colors.white,
    fontSize:18,
  },
  topName:{
    color: Colors.primary,
    fontSize:20,
  },
  titleContainer: {
    marginTop: 300,
    marginHorizontal: 20,
  },
  titleText: {
    textAlign: 'left',
    width: 300,
    fontFamily: 'Roboto-Black900',
    color: Colors.white,
    fontSize: 48,
  },
});
