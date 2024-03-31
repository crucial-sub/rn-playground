import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import AnimationStackNavigator, {
  type AnimationStackParamList,
} from './AnimationStackNavigator';
import type { GestureHandlerStackParamList } from './GestureHandlerStackNavigator';
import GestureHandlerStackNavigator from './GestureHandlerStackNavigator';
import ListViewStackNavigator, {
  type ListViewStackParamList,
} from './ListViewStackNavigator';

export type MainStackParamList = {
  ListViewStack: {
    screen: keyof ListViewStackParamList;
    params: ListViewStackParamList[keyof ListViewStackParamList];
  };
  AnimationStack: {
    screen: keyof AnimationStackParamList;
    params: AnimationStackParamList[keyof AnimationStackParamList];
  };
  GestureHandlerStack: {
    screen: keyof GestureHandlerStackParamList;
    params: GestureHandlerStackParamList[keyof GestureHandlerStackParamList];
  };
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="ListViewStack"
        component={ListViewStackNavigator}
      />
      <MainStack.Screen
        name="AnimationStack"
        component={AnimationStackNavigator}
      />
      <MainStack.Screen
        name="GestureHandlerStack"
        component={GestureHandlerStackNavigator}
      />
    </MainStack.Navigator>
  );
};

export default React.memo(MainStackNavigator);
