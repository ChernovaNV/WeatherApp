import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';

export const gStyle = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
  },

  title: {
    fontFamily: 'Lato-Regular',
    color: 'white',
    marginBottom: 10,
    marginRight: 15
  },

  text: {
    fontSize: SIZES.text,
    lineHeight: 30,
    color: 'white',
    marginRight: 15,
    marginBottom: 15
  },
})
