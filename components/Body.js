import React, { useContext } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { SIZES } from '../constants';
import { AuthContext } from '../context';

import { gStyle } from '../styles/style';
import { CloudyIcon, SnowIcon, RainIcon, StormIcon, SunnyIcon } from './icons/icons';


const Body = () => {
  const {currentSity, setCurrentSity} = useContext(AuthContext);

  const weatherIcon = weatherType => {
    if (weatherType == 'Clouds' || weatherType == 'Smoke' || weatherType == 'Mist' || weatherType == 'Fog' || weatherType == 'Haze' || weatherType == 'Dust' ||  weatherType == 'Sand' || weatherType == 'Ash' || weatherType == 'Squall') {
      return <CloudyIcon width={SIZES.iconSize} height={SIZES.iconSize}/>;
    }
    if (weatherType == 'Snow') {
      return <SnowIcon width={SIZES.iconSize} height={SIZES.iconSize}/>;
    }
    if (weatherType == 'Rain' || weatherType == 'Drizzle') { 
      return <RainIcon width={SIZES.iconSize} height={SIZES.iconSize}/>;
    }
    if (weatherType == 'Thunderstorm') {
      return <StormIcon width={SIZES.iconSize} height={SIZES.iconSize}/>;
    }
    if (weatherType == 'Clear' ) { 
      return <SunnyIcon width={SIZES.iconSize} height={SIZES.iconSize} fill='yellow'/>;
    }
    rerutn(null)
  };
  return (
    <View style={styles.body}>
      <View style={[gStyle.directionRow, styles.top]}>
        {weatherIcon(currentSity.weather)}
        <Text style={[gStyle.title, styles.titleBody]}>{currentSity.temp}&#176;</Text>
      </View>
      <Text style={[gStyle.text, styles.textBody]}>{currentSity.description}</Text>
    </View>
  );
};
  
export default Body;

const styles = StyleSheet.create({ 
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    alignItems: 'center'
  },
  titleBody: {
    marginLeft: 25,
    fontSize: SIZES.largeTitle,
    lineHeight: 190,
  },
  textBody: {
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
    fontSize: SIZES.subtitle
  },
});