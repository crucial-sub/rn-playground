import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  getBottomTabOptions,
  type HomeTabParamList,
} from '../lib/utils/bottom-tab-helper';
import SettingsScreen from '../screens/SettingsScreen';
import MainStackNavigator from './MainStackNavigator';

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
        component={MainStackNavigator}
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
