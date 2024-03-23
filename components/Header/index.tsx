import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import {IMAGES} from '../../assets/images';
import {computeClock} from '../../utils/helpers';
import styles from './styles';

export default function Header() {
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <View style={styles.header}>
      <View style={styles.timerContainer}>
        <Image source={IMAGES.clock} style={styles.timerIcon} />
        <Text style={styles.timer}>{computeClock(timer)}</Text>
      </View>
      <View style={styles.centerTextContainer}>
        <Text style={styles.centerText}>For You</Text>
        <View style={styles.centerTextBottomBar}></View>
      </View>
      <View style={styles.searchIconContainer}>
        <Image source={IMAGES.searchIcon} style={styles.searchIcon} />
      </View>
    </View>
  );
}
