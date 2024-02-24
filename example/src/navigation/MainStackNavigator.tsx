import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import FlatListScreen from '../screens/FlatListScreen';
import SectionListScreen from '../screens/SectionListScreen';
import AnimationPlaygroundStackNavigator from './AnimationPlaygroundStackNavigator';

export type MainStackParamList = {
  FlatListScreen: undefined;
  SectionListScreen: undefined;
  AnimationPlaygroundStack: undefined;
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
      <MainStack.Screen
        name="AnimationPlaygroundStack"
        component={AnimationPlaygroundStackNavigator}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
