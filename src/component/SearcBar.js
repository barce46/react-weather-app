import { TextInput } from '@mantine/core';
import { GoSearch } from "react-icons/go";
import { useState } from 'react';
import useWeatherContext from '../hooks/use-weather-context';

export default function SearchBar() {
  const [city, setCity] = useState('');
  const { weatherDataFromSearch } = useWeatherContext()


  const handleSubmit = async (event) => {
    event.preventDefault();
    await weatherDataFromSearch(city);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Enter a city"
        placeholder="Enter a city"
        icon={<GoSearch size="1.5rem" />}
        size='lg'
        onChange={(event) => setCity(event.target.value)}
      />
    </form>
  );
}