import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import ThemeChangeBottomSheet from '../../components/theme/ThemeChangeBottomSheet';
import { navigationRef } from '../../lib/utils/navigation-helper';

const HEIGHT = 450;

const ThemeChangeScreen = () => {
  const { styles } = useStyles(stylesheet);

  const [isOpened, setIsOpened] = React.useState(true);

  const translateY = useSharedValue(HEIGHT);
  const bottomSheetHeight = useSharedValue(HEIGHT);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      ...styles.container,
      height: bottomSheetHeight.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const closeBottomSheet = React.useCallback(() => {
    navigationRef.goBack();
  }, []);

  React.useEffect(() => {
    if (isOpened) {
      translateY.value = withTiming(0);
    } else {
      translateY.value = withTiming(HEIGHT, {}, (isFinished) => {
        if (isFinished) {
          runOnJS(closeBottomSheet)();
        }
      });
    }
  }, [isOpened]);

  const requestClose = React.useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={requestClose}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.dimmer}
        />
      </TouchableWithoutFeedback>

      <Animated.View style={containerAnimatedStyle}>
        <View style={styles.contentContainer}>
          <ThemeChangeBottomSheet />
        </View>
      </Animated.View>
    </View>
  );
};

export default ThemeChangeScreen;

const stylesheet = createStyleSheet((theme) => ({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  dimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.bottomSheet,
  },
}));
