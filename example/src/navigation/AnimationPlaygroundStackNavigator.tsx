import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import AnimationPlaygroundScreen from '../screens/animations';
import LayoutAnimationScreen from '../screens/animations/LayoutAnimationScreen';
import GestureHandlerScreen from '../screens/GestureHandlerScreen';

type AnimationPlaygroundStackParamList = {
  AnimationPlaygroundScreen: undefined;
  LayoutAnimationScreen: undefined;
  GestureHandlerScreen: undefined;
};

export type AnimationPlaygroundStackNavigationProp =
  StackNavigationProp<AnimationPlaygroundStackParamList>;

const AnimationPlaygroundStack =
  createStackNavigator<AnimationPlaygroundStackParamList>();

const AnimationPlaygroundStackNavigator = () => {
  return (
    <AnimationPlaygroundStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AnimationPlaygroundScreen"
    >
      <AnimationPlaygroundStack.Screen
        name="AnimationPlaygroundScreen"
        component={AnimationPlaygroundScreen}
      />
      <AnimationPlaygroundStack.Screen
        name="LayoutAnimationScreen"
        component={LayoutAnimationScreen}
      />
      <AnimationPlaygroundStack.Screen
        name="GestureHandlerScreen"
        component={GestureHandlerScreen}
      />
    </AnimationPlaygroundStack.Navigator>
  );
};

export default AnimationPlaygroundStackNavigator;
