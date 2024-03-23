import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  getBottomTabOptions,
  type HomeTabParamList,
} from '../lib/utils/bottom-tab-helper';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab"
    >
      <BottomTab.Screen
        options={({ route }) => getBottomTabOptions(route.name)}
        name="HomeTab"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={({ route }) => getBottomTabOptions(route.name)}
        name="SettingsTab"
        component={SettingsScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
