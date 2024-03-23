import {StyleSheet} from 'react-native';
import {scale} from '../../utils/helpers';
import {colors} from '../../theme/colors';
import {
  SF_PRO_BOLD,
  SF_PRO_MEDIUM,
} from '../../theme/fonts';

const styles = StyleSheet.create({
  actionBarContainer: {
    alignItems: 'center',
    gap: scale(15),
  },
  avatarContainer: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45),
    borderWidth: 1,
    borderColor: colors.white,
  },
  avatarImage: {
    width: scale(43),
    height: scale(43),
    resizeMode: 'contain',
  },
  addButton: {
    position: 'absolute',
    left: 11.5,
    bottom: -scale(10),
    backgroundColor: colors.emerald,
    width: scale(22),
    height: scale(22),
    borderRadius: scale(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontFamily: SF_PRO_BOLD,
    fontSize: scale(12),
    lineHeight: scale(14.31),
    color: colors.white,
  },
  actionBarIcon: {
    width: scale(30),
    height: scale(30),
    resizeMode: 'contain',
  },
  actionBarIconText: {
    fontFamily: SF_PRO_MEDIUM,
    fontSize: scale(12),
    lineHeight: scale(14.32),
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
