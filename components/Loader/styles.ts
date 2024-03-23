import {StyleSheet, Dimensions} from 'react-native';
import {CARD_HEIGHT} from '../../utils/constants';
import {colors} from '../../theme/colors';
import {SF_PRO_SEMIBOLD} from '../../theme/fonts';
import {scale} from '../../utils/helpers';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  loadingContainer: {
    height: CARD_HEIGHT,
    width,
    backgroundColor: 'rgba(0, 0, 0, .8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: SF_PRO_SEMIBOLD,
    fontSize: scale(30),
    color: colors.white,
  },
});

export default styles;
