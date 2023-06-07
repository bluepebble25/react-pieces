import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCities() {
  const [cityList, setCityList] = useState({});
  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const result = await axios.get('/usa_states_and_cities.json');
        setCityList(result.data.countries.USA);
      } catch (e) {
        window.alert('에러' + e);
      }
    };

    fetchCityList();
  }, []);

  return cityList;
}

export default useFetchCities;
