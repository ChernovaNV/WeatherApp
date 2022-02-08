import React from 'react';
import Svg, { Path} from 'react-native-svg';


export default function ArrowIcon({width, height, fill = 'white'}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M22.4889 5.83819L5.23892 16.6268L13.728 18.2769L18.2145 25.7637L22.4889 5.83819Z" fill={fill} fillOpacity="0.4"/>
    </Svg>
  );
}