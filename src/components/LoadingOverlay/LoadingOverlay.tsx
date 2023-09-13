import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { styles } from './style';

interface Props {
  message: string;
}

export default function LoadingOverlay({ message }: Props) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
