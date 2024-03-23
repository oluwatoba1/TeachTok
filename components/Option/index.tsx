import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  interpolateColor,
  withSequence,
} from 'react-native-reanimated';
import {colors} from '../../theme/colors';
import styles from './styles';
import {scale} from '../../utils/helpers';
import {IMAGES} from '../../assets/images';

interface OptionProps {
  option: IOption;
  onChoice: (value: IOption) => void;
  selected: boolean;
  isCorrect: boolean;
  hasCorrectAnswer: boolean;
  choice: IOption | null;
}

const Option = ({
  option,
  onChoice,
  selected,
  isCorrect,
  hasCorrectAnswer,
  choice,
}: OptionProps) => {
  const animation = useSharedValue(0);
  const background = useSharedValue(0);
  const [slideBackgroundColor, setSlideBackgroundColor] =
    useState<string>('transparent');

  const verifyChoice = () => {
    if (selected || hasCorrectAnswer) {
      setSlideBackgroundColor(
        isCorrect || hasCorrectAnswer ? colors.green : colors.red,
      );
      animation.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.linear),
      });
      background.value = withSequence(
        withTiming(1, {
          duration: 0,
          easing: Easing.out(Easing.linear),
        }),
        withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.linear),
        }),
      );
    }
  };

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      background.value,
      [0, 1],
      [colors.semiTransparentWhite, colors.white],
    );
    return {
      ...styles.optionContainer,
      backgroundColor,
    };
  });

  const fillLength = scale(294);

  const fillStyle = useAnimatedStyle(() => {
    const fillWidth = interpolate(animation.value, [0, 1], [0, fillLength]);
    return {
      ...styles.slide,
      backgroundColor: slideBackgroundColor,
      width: fillWidth,
    };
  });

  useEffect(() => {
    if (!!choice?.id) {
      verifyChoice();
    }
  }, [choice]);

  return (
    <Pressable onPress={() => onChoice(option)} disabled={!!choice?.id}>
      <Animated.View style={containerStyle}>
        <Animated.View style={fillStyle} />
        <View style={styles.optionContent}>
          <Text style={styles.optionText}>{option.answer}</Text>
          {/* the gif image has whitespace that distorts the centering */}
          {selected ? (
            <Image
              source={isCorrect ? IMAGES.thumbsUp : IMAGES.thumbsDown}
              style={[
                styles.thumbsImage,
                {
                  transform: [{rotate: !isCorrect ? '180deg' : '0deg'}],
                  top: scale(isCorrect ? -8 : 8),
                },
              ]}
            />
          ) : null}
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default Option;
