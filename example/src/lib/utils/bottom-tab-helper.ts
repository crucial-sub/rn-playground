import type {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Colors } from '../styles/colors';
import HomeIcon from '../../assets/images/home_icon.svg';
import SettingsIcon from '../../assets/images/settings_icon.svg';

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
