import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import AnimationStackNavigator, {
  type AnimationStackParamList,
} from './AnimationStackNavigator';
import ListViewStackNavigator, {
  type ListViewStackParamList,
} from './ListViewStackNavigator';

export type MainStackParamList = {
  Home: undefined;
  ListViewStack: {
    screen: keyof ListViewStackParamList;
    params: ListViewStackParamList[keyof ListViewStackParamList];
  };
  AnimationStack: {
    screen: keyof AnimationStackParamList;
    params: AnimationStackParamList[keyof AnimationStackParamList];
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
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
