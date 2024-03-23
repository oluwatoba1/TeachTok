import {StyleSheet} from 'react-native';

import {BASE_PADDING, scale, scaleHeight} from '../../utils/helpers';
import {BOTTOM_TAB_CONTAINER_HEIGHT} from '../../utils/constants';
import {colors} from '../../theme/colors';
import {SF_PRO_MEDIUM} from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: scale(BASE_PADDING * 1.6),
    paddingVertical: scale(6),
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.black,
    height: BOTTOM_TAB_CONTAINER_HEIGHT,
  },

  tabLabel: {
    color: colors.tabLabelColor,
    fontFamily: SF_PRO_MEDIUM,
    fontSize: scale(10),
    lineHeight: scale(11.93),
    marginTop: scaleHeight(3),
  },
  activeTabLabel: {
    color: colors.white,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(BASE_PADDING * 4.8),
  },
  tabIcon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
  },
  activeTabIcon: {
    tintColor: colors.white,
  },
});

export default styles;
