import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import NonAuthRoutes from './src/routes/NonAuthRoutes';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style="dark" />
      <NonAuthRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 40,
  },
});
