import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  mainBg: '#498CEC',
  activeBg: 'rgba(255, 255, 255, 0.2)',
  
  sunny: '#498CEC',
  rain: '#7290B9',
  cloudy: '#8fabc2',
  partlyCloudy: '#6c92af',
  storm: '#415e75',
  snow: '#b6c6db',

  primary: '#fff'
};

const setSizes = () => {
  if(width >= 550) {
    return ({
      // global sizes
      radius: 8,
      widthBottom: '25%',
      iconSize: 160,

      // font sizes
      largeTitle: 180,
      cityTitle: 50,
      subtitle: 25,
      text: 25,
      opacityText: 18,
      changeCity: 30,

      //paddinds
      paddingT: '7%',
      paddingR: '6%',
      paddingL: '7%',
    }
    )
  } else {
    return ({
      // global sizes
      radius: 8,
      widthBottom: '50%',
      iconSize: 100,
    
      // font sizes
      largeTitle: 140,
      cityTitle: 30,
      subtitle: 25,
      text: 18,
      opacityText: 15,
      changeCity: 15,

      //paddinds
      paddingT: '10%',
      paddingR: '7%',
      paddingL: '10%',
    })
  }
}

export const SIZES = setSizes();


export const SIZESWINDOW = {
  width,
  height
};


const appVars = {COLORS, SIZES, SIZESWINDOW}