import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';
import {scale} from '../../utils/helpers';

interface MultiLineTextProps {
  text: string;
  fontSize: number;
  maxWidth: number;
  backgroundColor?: string;
  textColor?: string;
}

export default function MultiLineText({
  text,
  fontSize,
  maxWidth,
  backgroundColor = colors.oliveGray,
  textColor = colors.lightGray,
}: MultiLineTextProps) {
  const characterWidth = scale(fontSize) * 0.5;
  const [multiLine, setMultiLine] = useState<{text: string; width: number}[]>(
    [],
  );

  const computeTextTrays = () => {
    const textTray = text.split(' ');
    let lineOfTexts = '';
    const _multiLine = [];
    for (const text of textTray) {
      if (!lineOfTexts.length) {
        lineOfTexts += text;
      } else {
        if ((lineOfTexts + ' ' + text).length * characterWidth < maxWidth) {
          lineOfTexts += ' ' + text;
        } else {
          _multiLine.push({
            text: lineOfTexts,
            width: lineOfTexts.length * characterWidth,
          });
          lineOfTexts = text;
        }
      }
    }
    _multiLine.push({
      text: lineOfTexts,
      width: lineOfTexts.length * characterWidth,
    });
    setMultiLine(_multiLine);
  };

  useEffect(() => {
    computeTextTrays();
  }, [text]);

  return multiLine.map((line, index) => (
    <View
      key={index}
      style={[
        styles.multilineTextBackground(
          index,
          multiLine.length - 1,
          backgroundColor,
        ),
      ]}>
      <Text
        style={[styles.multilineText(textColor), {fontSize: scale(fontSize)}]}>
        {line.text}
      </Text>
    </View>
  ));
}
