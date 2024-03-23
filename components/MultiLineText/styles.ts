import {TextStyle, ViewStyle} from 'react-native';

import {scale} from '../../utils/helpers';
import {SF_PRO_MEDIUM} from '../../theme/fonts';

interface MultiLineTextBackgroundStyle {
  (index: number, lineLength: number, backgroundColor: string): ViewStyle;
}

interface IMultiLineTextStyle {
  (color: string): TextStyle;
}

type MultiLineTextStyle = {
  multilineTextBackground: MultiLineTextBackgroundStyle;
  multilineText: IMultiLineTextStyle;
};

const styles: MultiLineTextStyle = {
  multilineTextBackground: (
    index: number,
    lineLength,
    backgroundColor: string,
  ) => ({
    backgroundColor,
    borderRadius: scale(8),
    alignSelf: 'flex-start',
    borderTopLeftRadius: index > 0 ? 0 : scale(8),
    borderBottomLeftRadius: index !== lineLength ? 0 : scale(8),
    borderTopRightRadius: scale(8),
    borderBottomRightRadius: !index ? index : scale(8),
  }),
  multilineText: (color: string) => ({
    fontFamily: SF_PRO_MEDIUM,
    color,
    // lineHeight: scale(26.25),
  }),
};

export default styles;
