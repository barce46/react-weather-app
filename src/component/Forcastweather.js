import { useEffect } from 'react';
import useWeatherContext from '../hooks/use-weather-context';
import { Grid } from '@mantine/core';
import { setWeather } from '../utils/dataHandlers';


function ForecastWeather() {
  const [{ weatherData }, dispatch] = useWeatherContext();

  useEffect(() => {
    setWeather(dispatch);
  }, [])

  //const forcestData = async () => { await weatherData }



  /*       return (
          <Grid>
            <Grid.Col span={2}>
              <h3>{item.day.maxtemp_c}</h3> 
              <img src={item.day.condition.icon} alt="Weather icon" />
              <p>{item.day.condition.text}</p>
            </Grid.Col>
          </Grid>
        ) */


  return (
    <Grid>
      <Grid>
        <Grid.Col span={8}>
          <div>
            <h2>Current weather:</h2>
            {weatherData?.location && (
              <div>
                <h3>{weatherData?.location.name}, {weatherData?.location.country}</h3>
                <img src={weatherData?.current.condition.icon} alt="Weather icon" />
                <p>{weatherData?.current.condition.text}</p>
                <p>{weatherData?.current.temp_c}°C</p>
              </div>
            )}
          </div>
        </Grid.Col>
        {/*  {renderForcast} */}
      </Grid>
    </Grid>
  );
}

export default ForecastWeather;