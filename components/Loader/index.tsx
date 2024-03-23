import {Text, View} from 'react-native';
import styles from './styles';

export default function Loader() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Retrieving questions...</Text>
    </View>
  );
}
