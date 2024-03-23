import {StyleSheet, Dimensions} from 'react-native';
import {BASE_PADDING, scale, scaleHeight} from '../../utils/helpers';
import {CARD_HEIGHT} from '../../utils/constants';
import {colors} from '../../theme/colors';
import {SF_PRO_REGULAR, SF_PRO_SEMIBOLD} from '../../theme/fonts';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  flashCardContainer: {
    flexDirection: 'column',
    width,
    height: CARD_HEIGHT,
    justifyContent: 'flex-end',
  },
  flashCardBody: {
    paddingLeft: scale(BASE_PADDING * 1.6),
    paddingRight: scale(BASE_PADDING * 0.8),
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: scale(12),
    marginBottom: scaleHeight(16),
  },
  questionContainer: {
    marginTop: scaleHeight(55),
    width: scale(294),
    height: scaleHeight(578),
    justifyContent: 'space-between',
    gap: scale(24),
  },
  multilineContainer: {
    paddingVertical: scale(40),
    alignItems: 'flex-start',
  },
  userName: {
    fontFamily: SF_PRO_SEMIBOLD,
    fontSize: scale(15),
    lineHeight: scale(17.9),
    marginBottom: scaleHeight(6),
    color: colors.white,
  },
  description: {
    fontFamily: SF_PRO_REGULAR,
    fontSize: scale(13),
    lineHeight: scale(15.51),
    color: colors.white,
  },
});

export default styles;
