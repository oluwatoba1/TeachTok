import React from 'react';
import {View, Text, ImageBackground, Dimensions, Pressable} from 'react-native';

import styles from './styles';
import Option from '../Option';
import MultiLineText from '../MultiLineText';
import Playlist from '../Playlist';
import ActionBar from '../ActionBar';

const {width} = Dimensions.get('window');

interface FlashCardProps {
  cardDetails: IQuestion;
  onChoice: (option: IOption) => void;
}

export default function FlashCard({cardDetails, onChoice}: FlashCardProps) {
  return (
    <ImageBackground
      style={styles.flashCardContainer}
      source={{uri: cardDetails.image}}>
      <View style={styles.flashCardBody}>
        <View style={styles.questionContainer}>
          <View style={styles.multilineContainer}>
            <MultiLineText
              text={cardDetails.question}
              maxWidth={width * 0.75}
              fontSize={22}
            />
          </View>
          <View>
            {cardDetails.options.map((option, index) => (
              <Option
                choice={cardDetails.user_choice}
                selected={cardDetails.user_choice?.id === option.id}
                isCorrect={
                  !!cardDetails.answer?.correct_options?.some(
                    answer => answer.id === cardDetails.user_choice?.id,
                  )
                }
                hasCorrectAnswer={
                  !!cardDetails.answer?.correct_options?.some(
                    answer => answer.id === option.id,
                  )
                }
                onChoice={() => onChoice(option)}
                option={option}
                key={index}
              />
            ))}
          </View>

          <View>
            <Text style={styles.userName}>{cardDetails.user?.name || ''}</Text>
            <Text style={styles.description}>{cardDetails.description}</Text>
          </View>
        </View>
        {/* Action bar */}
        <ActionBar avatar={cardDetails.user.avatar} />
      </View>
      <Playlist playlistText={cardDetails.playlist} />
    </ImageBackground>
  );
}
