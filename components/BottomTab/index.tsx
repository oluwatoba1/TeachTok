import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import styles from './styles';
import {IMAGES} from '../../assets/images';

const Icon = ({
  routeName,
  isActive,
}: {
  routeName: string;
  isActive: boolean;
}) => {
  switch (routeName) {
    case 'Home':
      return (
        <Image
          source={IMAGES.homeIcon}
          style={[styles.tabIcon, isActive && styles.activeTabIcon]}
        />
      );

    case 'Discover':
      return (
        <Image
          source={IMAGES.discoverIcon}
          style={[styles.tabIcon, isActive && styles.activeTabIcon]}
        />
      );

    case 'Activity':
      return (
        <Image
          source={IMAGES.activityIcon}
          style={[styles.tabIcon, isActive && styles.activeTabIcon]}
        />
      );

    case 'Bookmarks':
      return (
        <Image
          source={IMAGES.bookmarkIcon}
          style={[styles.tabIcon, isActive && styles.activeTabIcon]}
        />
      );

    case 'Profile':
      return (
        <Image
          source={IMAGES.profileIcon}
          style={[styles.tabIcon, isActive && styles.activeTabIcon]}
        />
      );

    default:
      throw new Error(`TabBar Icon Error: ${routeName} not found`);
  }
};

const TabItem = ({
  route,
  index,
  navigation,
  state,
}: {
  route: BottomTabBarProps['state']['routes'][number];
  index: number;
  navigation: BottomTabBarProps['navigation'];
  state: BottomTabBarProps['state'];
}) => {
  const label = route.name;
  const isActive = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isActive && !event.defaultPrevented) {
      route.name === 'Home' && navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <Pressable
      android_disableSound
      onLongPress={onLongPress}
      onPress={onPress}
      style={[styles.tab]}>
      <Icon routeName={label} isActive={isActive} />
      <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
        {label}
      </Text>
    </Pressable>
  );
};

function TabBar({state, navigation}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => (
        <TabItem
          key={index}
          index={index}
          route={route}
          navigation={navigation}
          state={state}
        />
      ))}
    </View>
  );
}

export default TabBar;
