import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../constants';

function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Получение погоды...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.mainBg,
    paddingBottom: 50,
    paddingLeft: 30 
  },
  text: {
    color: COLORS.primary,
    fontSize: SIZES.text
  }
})

export default Loading;
