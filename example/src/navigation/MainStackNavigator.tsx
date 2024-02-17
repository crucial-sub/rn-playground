import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import FlatListScreen from '../screens/FlatListScreen';

export type MainStackParamList = {
  FlatListScreen: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="FlatListScreen" component={FlatListScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
