import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import SettingsScreen from '../screens/settings/SettingsScreen';

export type SettingsStackParamList = {
  SettingsScreen: undefined;
};

export type SettingsStackNavigationProp =
  StackNavigationProp<SettingsStackParamList>;

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
