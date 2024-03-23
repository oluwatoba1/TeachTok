import {Image, View, Text} from 'react-native';

import {IMAGES} from '../../assets/images';
import styles from './styles';

interface FooterProps {
  playlistText: string;
}

export default function Playlist({playlistText}: FooterProps) {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerPlayerContainer}>
        <Image source={IMAGES.musicPlayer} style={styles.footerPlayerIcon} />
        <Text style={styles.footerPlayerText}>{playlistText}</Text>
      </View>
      <Image source={IMAGES.forwardIcon} style={styles.footerForwardIcon} />
    </View>
  );
}
