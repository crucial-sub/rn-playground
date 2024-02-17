import {
  createBottomTabNavigator,
  type BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MyScreen from '../screens/MyScreen';

export type HomeTabParamList = {
  HomeTab: undefined;
  MyTab: undefined;
};

export type HomeTabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;

const BottomTab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab"
    >
      <BottomTab.Screen name="HomeTab" component={HomeScreen} />
      <BottomTab.Screen name="MyTab" component={MyScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
