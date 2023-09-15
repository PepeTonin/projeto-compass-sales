import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native';

import { styles } from './style';
import { Colors } from '../../styles/GlobalColors';

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}
