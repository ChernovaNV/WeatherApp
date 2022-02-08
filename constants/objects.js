import { COLORS } from ".";

const  WEATHEROPTIONS = {
  Clear: COLORS.sunny,
  Clouds: COLORS.cloudy,
  Smoke: COLORS.cloudy,
  Mist: COLORS.cloudy,
  Fog: COLORS.cloudy,
  Haze: COLORS.cloudy,
  Dust: COLORS.cloudy,
  Sand: COLORS.cloudy,
  Ash: COLORS.cloudy,
  Squall: COLORS.cloudy,
  Thunderstorm: COLORS.storm,
  Rain: COLORS.rain,
  Drizzle: COLORS.rain,
  Snow: COLORS.snow,
}

const COORDINATES = {
  'Омск': {
    lat: 55,
    lon: 73.4
  },
  'Петропавловск-Комчатский': {
    lat: 53.0452 ,
    lon: 158.6483
  },
}
   
const SCALE = {
  C: 'metric',
  F: 'imperial'
}

const TEMP = [
  {key: 'C', text: 'C'}, 
  {key: 'F', text: 'F'}
];


export { TEMP, WEATHEROPTIONS, COORDINATES, SCALE};