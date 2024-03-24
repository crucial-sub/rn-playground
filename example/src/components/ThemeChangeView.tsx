import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../lib/styles/colors';
import { setStorage } from '../lib/utils/storage';
import { useThemeStore } from '../stores/style';

const PADDING = 20;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CONTAINER_WIDTH = SCREEN_WIDTH - PADDING * 2;
const CONTAINER_PADDING = 7;
const TAB_WIDTH = CONTAINER_WIDTH / 3;

type ThemeType = 'system' | 'light' | 'dark';

const ThemeChangeView = () => {
  const colorScheme = useColorScheme();
  const left = useSharedValue(CONTAINER_PADDING);

  const indicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: left.value,
    };
  });

  const { theme, selectedSwitch, setTheme, setSelectedSwitch } =
    useThemeStore();

  React.useEffect(() => {
    switch (selectedSwitch) {
      case 'system':
        left.value = withTiming(CONTAINER_PADDING);
        break;
      case 'light':
        left.value = withTiming(TAB_WIDTH);
        break;
      case 'dark':
        left.value = withTiming(TAB_WIDTH * 2 - CONTAINER_PADDING);
        break;
    }
  }, [selectedSwitch]);

  React.useEffect(() => {
    if (selectedSwitch === 'system') {
      setTheme(colorScheme);
    } else {
      setTheme(selectedSwitch);
    }
  }, [colorScheme, selectedSwitch]);

  const tabTextStyle = (_theme: ThemeType) => {
    return [
      styles.tabText,
      selectedSwitch !== _theme && { color: Colors.gray },
    ];
  };

  const handlePressTheme = (_theme: ThemeType) => {
    setSelectedSwitch(_theme);
    setStorage('theme', _theme);
  };

  return (
    <View style={styles.wrapper}>
      <View />
      <Text style={styles.title}>Change Theme</Text>
      <Text style={styles.description}>
        {"select a theme\nyou'd like to use"}
      </Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePressTheme('system')}
        >
          <Text style={tabTextStyle('system')}>System</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePressTheme('light')}
        >
          <Text style={tabTextStyle('light')}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handlePressTheme('dark')}
        >
          <Text style={tabTextStyle('dark')}>Dark</Text>
        </TouchableOpacity>

        <Animated.View style={[styles.indicator, indicatorAnimatedStyle]} />
      </View>
    </View>
  );
};

export default ThemeChangeView;

type Styles = {
  wrapper: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  tabContainer: ViewStyle;
  tab: ViewStyle;
  tabText: TextStyle;
  indicator: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  wrapper: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  tabContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    padding: CONTAINER_PADDING,
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    zIndex: 1,
  },
  tabText: {
    fontSize: 16,
  },
  indicator: {
    position: 'absolute',
    left: CONTAINER_PADDING,
    top: CONTAINER_PADDING,
    height: '100%',
    width: CONTAINER_WIDTH / 3,
    backgroundColor: Colors.background,
    borderRadius: 30,
  },
});
