import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantComponent = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image  
        style={styles.image}
        source={{ uri: restaurant.image_url }}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.reviews}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviews: {
    color: 'gray'
  }
});

export default RestaurantComponent;