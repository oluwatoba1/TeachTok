import {Dimensions} from 'react-native';
import {MCQ_URL, REVEAL_ANSWER_URL, THRESHOLD} from './constants';
import {Dispatch, SetStateAction} from 'react';

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

export const fetchMCQ = async (
  updateMcq: Dispatch<SetStateAction<IQuestion[]>>,
  updateFetchCount: Dispatch<SetStateAction<number>>,
): Promise<void> => {
  try {
    const response = await fetch(MCQ_URL);
    const data: IMCQ = await response.json();
    const answer: ICorrectAnswer | [] = await revealAnswer(data.id);
    updateMcq(mcqs => [
      ...mcqs,
      {...data, answer, user_choice: {id: '', answer: ''}} as IQuestion,
    ]);
    updateFetchCount(fetchedCount => fetchedCount + 1);
  } catch (error) {
    console.error(error);
  }
};

const revealAnswer = async (mcqId: number): Promise<ICorrectAnswer | []> => {
  try {
    const response = await fetch(REVEAL_ANSWER_URL + mcqId);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
