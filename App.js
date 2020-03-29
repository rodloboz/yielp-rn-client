import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Restaurant: RestaurantScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Foodie'
  }
});

export default createAppContainer(navigator);



// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SearchScreen from './src/screens/SearchScreen';
// import RestaurantScreen from './src/screens/SearchScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{title: 'Foodie'}}
//         />
//         <Stack.Screen name="Restaurant" component={RestaurantScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }