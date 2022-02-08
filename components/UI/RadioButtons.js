import React, { useContext } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { AuthContext } from '../../context';

import { gStyle } from '../../styles/style';
import { COLORS, SIZES } from '../../constants';


const RadioButtons = ({temps}) => {
  const {temp, setTemp} = useContext(AuthContext);

  const tempActive = (key, i) => {
    if(temp === key) {
      if(i === 0) {
        return ( 
          [styles.radioButtonSelected,
           styles.radioButtonLeft]
        )
      } else {
        return ( 
          [styles.radioButtonSelected,
           styles.radioButtonRight]
        )
      }
    }
    if(i === 0) {
      return ( 
        styles.radioButtonLeft
      )
    } else {
      return ( 
        styles.radioButtonRight
      )
    }
  }

  return (
    <View style={gStyle.directionRow}>
      <Text style={styles.deg}>&#176;</Text> 
      {temps.map((item, i) => {
        return (
          <TouchableOpacity
            key={item.key}  
            onPress={() => {
              setTemp(item.key);
              
            }}
          >
            <View style={[styles.radioButton, tempActive(item.key, i)]}>
              <Text style={[styles.radioText]}>{item.text}</Text> 
        </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    width: 39,
    height: 30,
    
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    lineHeight: 21.6,
    opacity: 0.6,
    color: COLORS.primary
  },
  deg: {
    marginRight: 10,
    color: COLORS.primary,
    fontSize: 16
  },
  radioButtonSelected: {
    backgroundColor: COLORS.activeBg
  },
  radioButtonLeft: {
    borderTopLeftRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    left: 1
  },
  radioButtonRight: {
    borderTopEndRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
  }
})

export default RadioButtons;
