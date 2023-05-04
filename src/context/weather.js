import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const weatherContext = createContext();

export const Provider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a412e9ccbd484e09a7c45733230305&q=Budapest&days=10&aqi=no&alerts=no`);
      setWeatherData(response.data);
    }
    getData();
  }, []);

  const weatherDataFromSearch = async (city) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a412e9ccbd484e09a7c45733230305&q=${city}&days=10&aqi=no&alerts=no`);
    setWeatherData(response.data);
  };

  const valueToShare = {
    weatherDataFromSearch,
    weatherData,
  };

  return (
    <weatherContext.Provider value={valueToShare}>
      {children}
    </weatherContext.Provider>
  );
};

export default weatherContext;