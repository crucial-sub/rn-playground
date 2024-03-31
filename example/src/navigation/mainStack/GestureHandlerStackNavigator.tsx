import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import CarouselScreen from '../../screens/gestureHandlers/CarouselScreen';
import GestureHandlerScreen from '../../screens/gestureHandlers/GestureHandlerScreen';
import ListSwipeScreen from '../../screens/gestureHandlers/ListSwipeScreen';
import ResizableBottomTabScreen from '../../screens/gestureHandlers/ResizableBottomTabScreen';

export type GestureHandlerStackParamList = {
  GestureHandlerScreen: undefined;
  ResizableBottomTabScreen: undefined;
  ListSwipeScreen: undefined;
  CarouselScreen: undefined;
};

export type GestureHandlerStackNavigationProp =
  StackNavigationProp<GestureHandlerStackParamList>;

const GestureHandlerStack =
  createStackNavigator<GestureHandlerStackParamList>();

const GestureHandlerStackNavigator = () => {
  return (
    <GestureHandlerStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="GestureHandlerScreen"
    >
      <GestureHandlerStack.Screen
        name="GestureHandlerScreen"
        component={GestureHandlerScreen}
      />
      <GestureHandlerStack.Screen
        name="ResizableBottomTabScreen"
        component={ResizableBottomTabScreen}
      />

      <GestureHandlerStack.Screen
        name="ListSwipeScreen"
        component={ListSwipeScreen}
      />
      <GestureHandlerStack.Screen
        name="CarouselScreen"
        component={CarouselScreen}
      />
    </GestureHandlerStack.Navigator>
  );
};

export default React.memo(GestureHandlerStackNavigator);
