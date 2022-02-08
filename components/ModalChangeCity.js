import React, { useState, useContext, useEffect } from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Button} from 'react-native';

import { COLORS, SIZES } from '../constants';
import { AuthContext } from '../context';

const ModalChangeCity = () => {
  const {city, setCity } = useContext(AuthContext);
  const [otherCity, setOtherCity] = useState('Петропавловск-Комчатский');
  const {currentNameSity, setCurrentNameSity} = useContext(AuthContext);
  const {openModal, setOpenModal} = useContext(AuthContext);


  const changeCity = () => {
    const newCity = otherCity;
    setOtherCity(currentNameSity);
    setCurrentNameSity(newCity);
    setOpenModal(false); 
  }
  
  if(openModal) {
    return ( 
      <TouchableHighlight style={[styles.modal]}>
        <View style={styles.modalView}>
            <View>
              <Text 
                style={styles.modalText} 
              >
                {otherCity}
              </Text>
            </View>
          <Button title='Ок' onPress={changeCity}/>
        </View>
      </TouchableHighlight>
    );
  } else {
    return(
      <View></View>
    )
  }

}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: COLORS.primary,
    padding: 30
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalText: {
    fontFamily: 'Lato-Regular',
    color: '#000',
    fontSize: SIZES.changeCity,
    lineHeight: 36,
    marginRight: 65
  },
})

export default ModalChangeCity
