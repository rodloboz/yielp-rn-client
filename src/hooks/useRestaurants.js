import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMEssage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      setErrorMEssage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york'
        }
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMEssage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('frango');
  }, []);

  return [searchApi, restaurants, errorMessage];
};