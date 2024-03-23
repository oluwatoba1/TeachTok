import {Dimensions, StatusBar} from 'react-native';
import {scale} from './helpers';

const {height} = Dimensions.get('window');
export const statusBarHeight = StatusBar.currentHeight || scale(20);
export const BOTTOM_TAB_CONTAINER_HEIGHT = scale(60);
export const CARD_HEIGHT =
  height + statusBarHeight - BOTTOM_TAB_CONTAINER_HEIGHT;

export const THRESHOLD = CARD_HEIGHT * 0.25;

export const BASE_PADDING = 10;
