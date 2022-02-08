import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import { COLORS, SIZES } from '../../constants';


const MyButton = ({style, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={styles.text}>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: SIZES.opacityText,
    lineHeight: 21,
    opacity: 0.6,
    color: COLORS.primary
  },

})

export default MyButton;
