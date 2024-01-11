import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';

import ListScreen from '../screens/Product/ListScreen';
import Details from '../screens/Product/DetailScreen';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={ListScreen} />
      <Stack.Screen name="Details" component={Details} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
