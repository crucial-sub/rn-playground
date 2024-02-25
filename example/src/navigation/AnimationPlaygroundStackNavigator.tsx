import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import LayoutAnimationScreen from '../screens/animations/LayoutAnimationScreen';
import AnimationPlaygroundScreen from '../screens/animations';

type AnimationPlaygroundStackParamList = {
  AnimationPlaygroundScreen: undefined;
  LayoutAnimationScreen: undefined;
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
    </AnimationPlaygroundStack.Navigator>
  );
};

export default AnimationPlaygroundStackNavigator;
