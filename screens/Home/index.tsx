import {useState} from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
  withSpring,
  useDerivedValue,
} from 'react-native-reanimated';

import FlashCard from '../../components/FlashCard';
import {CARD_HEIGHT} from '../../utils/constants';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

const THRESHOLD = CARD_HEIGHT * 0.25;
const MCQ_URL = 'https://cross-platform.rp.devfactory.com/for_you';
const REVEAL_ANSWER_URL = 'https://cross-platform.rp.devfactory.com/reveal?id=';

const timingConfig = {
  easing: Easing.out(Easing.linear),
};

const BUFFER_SIZE = 1;

export default function Home() {
  const flashCardPosition = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const currentHeight = useSharedValue(0);

  const [mcqs, setMcqs] = useState<IQuestion[]>([]);
  const [fetchedCount, setFetchedCount] = useState(0);

  const fetchMCQ = async (): Promise<void> => {
    try {
      const response = await fetch(MCQ_URL);
      const data: IMCQ = await response.json();
      const answer: ICorrectAnswer | [] = await revealAnswer(data.id);
      setMcqs(mcqs => [
        ...mcqs,
        {...data, answer, user_choice: {id: '', answer: ''}} as IQuestion,
      ]);
      setFetchedCount(fetchedCount + 1);
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

  const onChoice = (option: IOption, index: number) => {
    const _mcqs = [...mcqs];
    _mcqs[index] = {
      ..._mcqs[index],
      user_choice: option,
    };
    setMcqs(_mcqs);
  };

  const swipe = Gesture.Pan()
    .onUpdate(({translationY}) => {
      if (
        currentIndex.value !== fetchedCount - 1 &&
        !(currentIndex.value === 0 && translationY > 0)
      ) {
        flashCardPosition.value = currentHeight.value + translationY;
        return;
      }
    })
    .onFinalize(({translationY}) => {
      if (
        translationY <= -THRESHOLD &&
        currentIndex.value !== fetchedCount - 1
      ) {
        flashCardPosition.value = withTiming(
          currentHeight.value - CARD_HEIGHT,
          timingConfig,
        );
        currentHeight.value = currentHeight.value - CARD_HEIGHT;
        currentIndex.value = currentIndex.value + 1;
      } else if (translationY >= THRESHOLD && currentIndex.value) {
        flashCardPosition.value = withTiming(
          currentHeight.value + CARD_HEIGHT,
          timingConfig,
        );
        currentHeight.value = currentHeight.value + CARD_HEIGHT;
        currentIndex.value = currentIndex.value - 1;
      } else {
        flashCardPosition.value = withSpring(currentHeight.value, {
          duration: 300,
          stiffness: 1,
          dampingRatio: 0.85,
        });
      }
    });

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: flashCardPosition.value,
      },
    ],
  }));

  useDerivedValue(() => {
    if (fetchedCount - currentIndex.value <= BUFFER_SIZE) {
      runOnJS(fetchMCQ)();
    }
  }, [fetchedCount]);

  if (mcqs.length < 2) {
    return <Loader />;
  }

  return (
    <View>
      <Header />
      <GestureDetector gesture={swipe}>
        <Animated.View style={[cardStyle]}>
          {mcqs.map((item, index) => {
            return (
              <FlashCard
                key={index}
                cardDetails={item}
                onChoice={item => onChoice(item, index)}
              />
            );
          })}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
