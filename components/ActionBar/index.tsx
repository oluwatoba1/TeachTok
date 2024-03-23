import {Image, ImageSourcePropType, Text, View} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../assets/images';

interface IActionBarItem {
  icon: ImageSourcePropType;
  text: string;
}

const ACTION_BAR_ITEMS: IActionBarItem[] = [
  {icon: IMAGES.like, text: '87'},
  {icon: IMAGES.comments, text: '2'},
  {icon: IMAGES.bookmark, text: '203'},
  {icon: IMAGES.share, text: '17'},
];

const ActionBarItem = ({icon, text}: IActionBarItem) => (
  <View>
    <Image source={icon} style={styles.actionBarIcon} />
    <Text style={styles.actionBarIconText}>{text}</Text>
  </View>
);

export default function ActionBar({avatar}: {avatar: string}) {
  return (
    <View style={styles.actionBarContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: avatar}} style={styles.avatarImage} />
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </View>
      {ACTION_BAR_ITEMS.map((item, index) => (
        <ActionBarItem key={index} icon={item.icon} text={item.text} />
      ))}
    </View>
  );
}
