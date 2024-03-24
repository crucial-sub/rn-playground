import type {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/images/home_icon.svg';
import SettingsIcon from '../../assets/images/settings_icon.svg';
import { Colors } from '../styles/colors';

export type HomeTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
};

export type HomeTabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;

const defaultOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Colors.accent,
  tabBarInactiveTintColor: Colors.gray,
};

export const getBottomTabOptions = (
  routeName: keyof HomeTabParamList
): BottomTabNavigationOptions => {
  const options: BottomTabNavigationOptions = defaultOptions;

  switch (routeName) {
    case 'HomeTab':
      options.tabBarLabel = 'Home';
      options.tabBarIcon = (props) =>
        HomeIcon({ ...props, stroke: props.color, width: 24, height: 24 });
      break;
    case 'SettingsTab':
      options.tabBarLabel = 'Settings';
      options.tabBarIcon = (props) =>
        SettingsIcon({ ...props, stroke: props.color, width: 24, height: 24 });
      break;
  }

  return options;
};
