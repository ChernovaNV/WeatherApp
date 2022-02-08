import React, { useContext, useEffect } from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';
import { AuthContext } from '../context';
import * as Font from 'expo-font';

import Top from './Top';
import Body from './Body';
import Bottom from './Bottom';
import { COLORS, SIZES, SIZESWINDOW, WEATHER_API_KEY } from '../constants';
import { COORDINATES, SCALE, WEATHEROPTIONS } from '../constants/objects';
import { getWeather } from '../functions/getWeather';
import Loading from './Loading';


const MainScreen = () => {
  const {temp, setTemp} = useContext(AuthContext);
  const {currentSity, setCurrentSity} = useContext(AuthContext);
  const {isLoadingWeather, setIsLoadingWeather} = useContext(AuthContext);
  const {currentNameSity, setCurrentNameSity} = useContext(AuthContext);

  useEffect(() => {
  const fetchWeather = async () => {
    const weatherData = await getWeather(COORDINATES[currentNameSity].lat, COORDINATES[currentNameSity].lon, WEATHER_API_KEY, SCALE[temp]);
    setCurrentSity(weatherData);
    setIsLoadingWeather(false);
    console.log(weatherData);
  } 
    fetchWeather();
  }, [temp, currentNameSity]);

  if ( !isLoadingWeather) {
    return (
      <SafeAreaView 
      style={
        [styles.container, 
        {backgroundColor: WEATHEROPTIONS[currentSity.weather]}]
      }>
        <Top/>
        <Body />  
        <Bottom /> 
      </SafeAreaView>
    );
  } else {
    return (
      <Loading/>
    )
  }
}

export default MainScreen;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '100%',
    maxWidth: SIZESWINDOW.width,
    height: '100%',
    backgroundColor: COLORS.mainBg,
    paddingTop: SIZES.paddingT,
    paddingLeft: SIZES.paddingL,
    paddingRight: SIZES.paddingR,
    color: 'white',
  },
});

