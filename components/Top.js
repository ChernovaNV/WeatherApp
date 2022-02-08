import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { AuthContext } from '../context';

import { gStyle } from '../styles/style';
import { COLORS, SIZES } from '../constants';
import { TEMP } from '../constants/objects';
import { ArrowIcon } from './icons/icons';

import ModalChangeCity from './ModalChangeCity';
import MyButton from './UI/MyButton';
import RadioButtons from './UI/RadioButtons';


const Top = () => {
  const {currentSity, setCurrentSity} = useContext(AuthContext);
  const {openModal, setOpenModal} = useContext(AuthContext);

  return (
    <View>
      <ModalChangeCity/>
      <View style={[gStyle.directionRow, styles.top]}>
        <Text style={[gStyle.title, styles.titleTop]}>{currentSity.name}</Text>
        <RadioButtons temps={TEMP}/>
      </View>
      <View style={gStyle.directionRow}>
        <MyButton 
          style= {{marginRight: 30}}
          title='Сменить город' 
          onPress={() => setOpenModal(true)}
        />
        <View style={gStyle.directionRow}>
          <ArrowIcon width={20} height={25}/>
          <MyButton title='Мое местоположение'/>
        </View>
      </View>   
    </View>
  )
};

export default Top;

const styles = StyleSheet.create({ 
  top: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleTop: {
    fontSize: SIZES.cityTitle,
    lineHeight: 60
  },
  deg: {
    marginRight: 10,
    color: COLORS.primary,
    fontSize: 16
  },
  buttonTemp: {
    width: 39,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTempLeft: {
    borderTopLeftRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    left: 1
  },
  buttonTempRight: {
    borderTopEndRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
  }
});