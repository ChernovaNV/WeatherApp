import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';


export default function CloudyIcon({width, height, fill = "url(#paint0_linear_0_68)"}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M47.29 79.0386C49.7446 58.1809 67.4827 42 89 42C103.835 42 116.874 49.6914 124.346 61.304C127.975 60.4511 131.759 60 135.648 60C162.904 60 185 82.1619 185 109.5C185 136.838 162.904 159 135.648 159H53.0682C30.9391 159 13 141.007 13 118.812C13 98.5847 27.8988 81.8477 47.29 79.0386Z" fill={fill}/>
      <Defs>
        <LinearGradient id="paint0_linear_0_68" x1="13" y1="42" x2="13" y2="159" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#A9D9FF"/>
          <Stop offset="1" stopColor="#7AC5FF"/>
        </LinearGradient>
      </Defs>
    </Svg>
  );
}