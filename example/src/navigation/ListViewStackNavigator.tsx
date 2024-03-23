import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import ListViewScreen from '../screens/listViews';
import FlatListScreen from '../screens/listViews/FlatListScreen';
import SectionListScreen from '../screens/listViews/SectionListScreen';

export type ListViewStackParamList = {
  ListViewScreen: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
};

export type ListViewStackNavigationProp =
  StackNavigationProp<ListViewStackParamList>;

const ListViewStack = createStackNavigator<ListViewStackParamList>();

const ListViewStackNavigator = () => {
  return (
    <ListViewStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ListViewScreen"
    >
      <ListViewStack.Screen name="ListViewScreen" component={ListViewScreen} />
      <ListViewStack.Screen name="FlatListScreen" component={FlatListScreen} />
      <ListViewStack.Screen
        name="SectionListScreen"
        component={SectionListScreen}
      />
    </ListViewStack.Navigator>
  );
};

export default ListViewStackNavigator;
