import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import SearchBar from '../components/SearchBar';
import Restaurantslist from '../components/RestaurantsList';



const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price
    })
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView>
        <Restaurantslist
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice('$')}
        />
        <Restaurantslist
          title="Pricier"
          restaurants={filterRestaurantsByPrice('$$')}
        />
        <Restaurantslist
          title="Expensive"
          restaurants={filterRestaurantsByPrice('$$$')}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;