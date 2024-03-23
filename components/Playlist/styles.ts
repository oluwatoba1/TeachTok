import {StyleSheet} from 'react-native';
import {scale} from '../../utils/helpers';
import {colors} from '../../theme/colors';
import {SF_PRO_SEMIBOLD} from '../../theme/fonts';

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.darkGray,
    paddingLeft: scale(16),
    paddingRight: scale(10),
    paddingVertical: scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerPlayerContainer: {
    flexDirection: 'row',
  },
  footerPlayerIcon: {
    width: scale(20),
    height: scale(16),
    resizeMode: 'contain',
  },
  footerPlayerText: {
    fontFamily: SF_PRO_SEMIBOLD,
    fontSize: scale(13),
    lineHeight: scale(15.51),
    color: colors.white,
    marginLeft: scale(4),
  },
  footerForwardIcon: {
    width: scale(11),
    height: scale(16),
    resizeMode: 'contain',
  },
});

export default styles;
