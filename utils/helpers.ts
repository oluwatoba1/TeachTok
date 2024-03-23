import {Dimensions} from 'react-native';
import {THRESHOLD} from './constants';

const {width, height} = Dimensions.get('screen');

const GUIDELINEBASEWIDTH = 375;
const GUIDELINEBASEHEIGHT = 812;

export const scale = (size: number, factor: number = 1.02) =>
  (width / GUIDELINEBASEWIDTH / factor) * size;

export const scaleHeight = (size: number) =>
  (height / GUIDELINEBASEHEIGHT) * size;

export const computeClock = (seconds: number): string => {
  const hour = Math.floor(seconds / 3600);
  const remainderForMinutes = seconds % 3600;
  const minutes = Math.floor(remainderForMinutes / 60);
  const remainderForSeconds = remainderForMinutes % 60;

  return (
    String(hour).padStart(2, '0') +
    'h ' +
    String(minutes).padStart(2, '0') +
    'm ' +
    String(remainderForSeconds).padStart(2, '0') +
    's'
  );
};

export const BASE_PADDING = 10;

export const meetsSwipeCriteria = (
  dy: number,
  direction: 'up' | 'down' | 'any',
  currentIndex: number,
  itemLength: number,
): boolean => {
  if (direction === 'down') {
    return dy < -THRESHOLD && currentIndex !== itemLength;
  } else if (direction === 'up') {
    return dy > THRESHOLD && currentIndex !== 0;
  } else {
    return (
      (dy < 0 && currentIndex !== itemLength) || (dy > 0 && currentIndex !== 0)
    );
  }
};

export const slicer = (
  array: IQuestion[],
  currentIndex: number,
  size: number = 4,
): IQuestion[] => {
  if (currentIndex === 0) return array.slice(0, 2);

  return array.slice(currentIndex - 1, currentIndex + (size - 1));
};
