import {Dimensions, StyleSheet} from 'react-native';
import {BASE_PADDING, scale} from '../../utils/helpers';
import {colors} from '../../theme/colors';
import {CARD_HEIGHT, statusBarHeight} from '../../utils/constants';

const {width} = Dimensions.get('screen');

const headerItemWidth = (width - 2 * (BASE_PADDING * 1.6)) / 3;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: statusBarHeight + scale(8),
    left: 0,
    right: 0,
    height: scale(31),
    paddingHorizontal: scale(BASE_PADDING * 1.6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  timerContainer: {
    width: headerItemWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerIcon: {
    width: scale(20),
    height: scale(19),
    resizeMode: 'contain',
  },
  timer: {
    color: colors.neutralGray,
    fontSize: scale(14),
    lineHeight: scale(16.71),
  },
  centerTextContainer: {
    width: headerItemWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    color: colors.white,
    fontSize: scale(16),
    lineHeight: scale(22),
  },
  centerTextBottomBar: {
    width: scale(30),
    height: scale(4),
    backgroundColor: colors.white,
  },
  searchIconContainer: {
    width: headerItemWidth,
    alignItems: 'flex-end',
  },
  searchIcon: {
    width: scale(22),
    height: scale(22),
    resizeMode: 'contain',
  },
});

export default styles;
