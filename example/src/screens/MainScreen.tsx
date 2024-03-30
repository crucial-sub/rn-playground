import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import MainStackNavigator, {
  type MainStackParamList,
} from '../navigation/MainStackNavigator';
import ThemeChangeScreen from './settings/ThemeChangeScreen';

export type RootStackParamList = {
  BottomTabStack: undefined;
  MainStack: {
    screen: keyof MainStackParamList;
    params?: MainStackParamList[keyof MainStackParamList];
  };
  ThemeChangeScreen: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

const MainScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTabStack"
    >
      <RootStack.Screen name="BottomTabStack" component={BottomTabNavigator} />
      <RootStack.Screen name="MainStack" component={MainStackNavigator} />

      <RootStack.Group screenOptions={{ presentation: 'transparentModal' }}>
        <RootStack.Screen
          name="ThemeChangeScreen"
          component={ThemeChangeScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default MainScreen;
