import axios from "axios"

const windDirection = (deg) => {
  if(deg >= 326 || deg < 12) {
    return 'северный';
  }
  if(deg >= 12 && deg < 78) {
    return 'северо-восточный';
  }
  if(deg >= 78 && deg < 101) {
    return 'восточный';
  }
  if(deg >= 101 && deg < 146) {
    return 'юго-восточный';
  }
  if(deg >= 146 && deg < 191) {
    return 'южный';
  }
  if(deg >= 191 && deg < 236) {
    return 'юго-западный';
  }
  if(deg >= 236 && deg < 281) {
    return 'западный';
  }
  if(deg >= 281 && deg < 326) {
    return 'северо-западный';
  }
}

export const getWeather = async (lat, lon, KEY, scale) => {
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=${scale}&lang=ru`);
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=${scale}&lang=ru`);
    console.log(data);
    return {
      name: data.name,
      temp: Math.ceil(data.main.temp),
      weather: data.weather[0].main, 
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      windDirection: windDirection(data.wind.deg),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      rain: 10, 
    };
  } catch (error) {
    console.log(error.massage);
  }
}