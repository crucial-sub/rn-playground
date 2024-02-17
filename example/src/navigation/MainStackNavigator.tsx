import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import FlatListScreen from '../screens/FlatListScreen';
import SectionListScreen from '../screens/SectionListScreen';

export type MainStackParamList = {
  FlatListScreen: undefined;
  SectionListScreen: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="FlatListScreen" component={FlatListScreen} />
      <MainStack.Screen
        name="SectionListScreen"
        component={SectionListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
