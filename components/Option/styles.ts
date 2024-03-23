import {StyleSheet} from 'react-native';
import {BASE_PADDING, scale} from '../../utils/helpers';
import {SF_PRO_MEDIUM} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  optionContainer: {
    width: '100%',
    marginBottom: scale(8),
    borderRadius: scale(8),
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  slide: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: scale(8),
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },
  optionText: {
    paddingLeft: scale(12),
    paddingVertical: scale(BASE_PADDING * 1.6),
    fontFamily: SF_PRO_MEDIUM,
    fontSize: scale(17),
    lineHeight: scale(20.29),
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: {width: 1, height: 1.5},
    textShadowRadius: 1,
    width: '85%',
  },
  thumbsImage: {
    top: -scale(8),
    width: scale(35),
    height: scale(35),
    resizeMode: 'contain',
  },
});

export default styles;
