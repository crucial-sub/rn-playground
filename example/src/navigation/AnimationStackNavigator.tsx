import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import AnimationScreen from '../screens/animations';
import LayoutAnimationScreen from '../screens/animations/LayoutAnimationScreen';
import GestureHandlerScreen from '../screens/GestureHandlerScreen';

export type AnimationStackParamList = {
  AnimationScreen: undefined;
  LayoutAnimationScreen: undefined;
  GestureHandlerScreen: undefined;
};

export type AnimationStackNavigationProp =
  StackNavigationProp<AnimationStackParamList>;

const AnimationStack = createStackNavigator<AnimationStackParamList>();

const AnimationStackNavigator = () => {
  return (
    <AnimationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AnimationScreen"
    >
      <AnimationStack.Screen
        name="AnimationScreen"
        component={AnimationScreen}
      />
      <AnimationStack.Screen
        name="LayoutAnimationScreen"
        component={LayoutAnimationScreen}
      />
      <AnimationStack.Screen
        name="GestureHandlerScreen"
        component={GestureHandlerScreen}
      />
    </AnimationStack.Navigator>
  );
};

export default AnimationStackNavigator;
