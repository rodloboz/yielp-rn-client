import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import RestaurantComponent from './RestaurantComponent';

const handlePress = (navigation) => {
  console.log('Move!')
  navigation.navigate('Restaurant')
}

const Restaurantslist = ({ title, restaurants, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handlePress(navigation)}
            >
              <RestaurantComponent restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 15
  }
});

export default withNavigation(Restaurantslist);