import {
  createBottomTabNavigator,
  type BottomTabNavigationProp as TabNavigationProp,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  getBottomTabOptions,
  type HomeTabParamList,
} from '../lib/utils/bottom-tab-helper';
import HomeScreen from '../screens/HomeScreen';
import type { SettingsStackParamList } from './SettingsStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

const BottomTab = createBottomTabNavigator<HomeTabParamList>();

export type BottomTabParamList = {
  HomeTab: {
    screen: keyof HomeTabParamList;
    params: HomeTabParamList[keyof HomeTabParamList];
  };
  SettingsTab: {
    screen: keyof SettingsStackParamList;
    params: SettingsStackParamList[keyof SettingsStackParamList];
  };
};

export type BottomTabNavigationProp = TabNavigationProp<BottomTabParamList>;

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
        component={SettingsStackNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
