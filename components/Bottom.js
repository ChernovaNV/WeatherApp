import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SIZES } from '../constants';
import { AuthContext } from '../context';

import { gStyle } from '../styles/style';

const Bottom = () => {
  const {city, setCity} = useContext(AuthContext);
  const {currentSity, setCurrentSity} = useContext(AuthContext);

  return (
    <View style={styles.bottom}>
      <View style={styles.itemBottom}>
        <Text 
          style={[gStyle.title, styles.titleBottom]}
        >
          Ветер
        </Text>
        <Text 
          style={[gStyle.text, styles.textBottom]}
        >
          {currentSity.windSpeed} м/с, {currentSity.windDirection}
        </Text>
      </View>
      <View>
        <Text 
          style={[gStyle.title, styles.titleBottom]}
        >
          Давление
        </Text>
        <Text 
          style={[gStyle.text, styles.textBottom]}
        >
          {currentSity.pressure} мм рт. ст.
          </Text>
      </View>
      <View>
        <Text 
          style={[gStyle.title, styles.titleBottom]}
        >
          Влажность
        </Text>
        <Text 
          style={[gStyle.text, styles.textBottom]}
        >
          {currentSity.humidity}%
        </Text>
      </View>
      <View>
        <Text 
          style={[gStyle.title, styles.titleBottom]}
        >
          Вероятность дождя
        </Text>
        <Text 
          style={[gStyle.text, styles.textBottom]}
        >
          {currentSity.rain}%
        </Text>
      </View>
    </View>
  ) 
};

export default Bottom;

const styles = StyleSheet.create({ 
  bottom: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemBottom: {
    width: SIZES.widthBottom
  },
  titleBottom: {
    fontSize: SIZES.opacityText,
    lineHeight: 21.6,
    opacity: 0.6
  },
  textBottom: {
    fontFamily: 'Lato-Bold',
    paddingBottom: 35
  }
})