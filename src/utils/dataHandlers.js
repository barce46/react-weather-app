import axios from "axios";

export const getWeather = async (city) => {
  return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a412e9ccbd484e09a7c45733230305&q=${city}&days=10&aqi=no&alerts=no`);
};

export const setWeather = async (dispatch, city = 'Budapest') => {
  const { data } = await getWeather(city);
  dispatch({
    type: 'setWeather',
    weather: data
  })
};
