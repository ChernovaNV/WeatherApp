import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Loading from './components/Loading';
import MainScreen from './components/MainScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import GlobalStates from './GlobalStates';



const FONTS = () => Font.loadAsync({
  'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
});

export default function App() { 
  const [font, setFont] = useState(false);
  
  
  if (font) {
    return ( 
      <View style={styles.container}>
        <GlobalStates>
          <MainScreen /> 
        </GlobalStates>
      </View>
    );
  } else { 
    return (
      <View>
        <AppLoading 
          startAsync={FONTS} 
          onFinish={() => setFont(true)} 
          onError={console.error}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: SIZESWINDOW.width,
    // height: SIZESWINDOW.height,
    alignItems: 'center',
    justifyContent: 'center', 
    overflow: 'visible',
  },
});
