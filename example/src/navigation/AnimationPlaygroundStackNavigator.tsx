import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import CustomTransitionScreen from '../screens/animations/CustomTransitionScreen';
import AnimationPlaygroundScreen from '../screens/animations';

type AnimationPlaygroundStackParamList = {
  AnimationPlaygroundScreen: undefined;
  CustomTransitionScreen: undefined;
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
        name="CustomTransitionScreen"
        component={CustomTransitionScreen}
      />
    </AnimationPlaygroundStack.Navigator>
  );
};

export default AnimationPlaygroundStackNavigator;
