import React, { memo, useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  type ViewStyle,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useBottomSheetStore } from '../stores/bottomsheet';

const DEFAULT_HEIGHT = 350;

const BottomSheet = () => {
  const { isOpened, component, height, afterClose, closeBottomSheet } =
    useBottomSheetStore();

  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  const startHeight = useSharedValue(0);
  const translateY = useSharedValue(height);
  const bottomSheetHeight = useSharedValue(height);

  const requestClose = React.useCallback(() => {
    closeBottomSheet();

    if (afterClose !== undefined) {
      afterClose();
    }
  }, [afterClose]);

  const panGestureEvent = Gesture.Pan()
    .onStart(() => {
      startHeight.value = bottomSheetHeight.value;
    })
    .onUpdate((event) => {
      bottomSheetHeight.value = startHeight.value - event.translationY;
    })
    .onEnd((_) => {
      if (bottomSheetHeight.value > 500) {
        bottomSheetHeight.value = withSpring(700);
      } else if (bottomSheetHeight.value > 400) {
        bottomSheetHeight.value = withSpring(height);
      } else {
        runOnJS(requestClose)();
      }
    });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: bottomSheetHeight.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    if (isOpened) {
      setShouldCloseModal(true);
      translateY.value = withTiming(0);
      bottomSheetHeight.value = height;
    } else {
      translateY.value = withTiming(
        height + bottomSheetHeight.value,
        { duration: 200 },
        () => {
          runOnJS(setShouldCloseModal)(false);
        }
      );
    }
  }, [isOpened]);

  return (
    <Modal
      style={styles.wrapper}
      animationType="fade"
      transparent
      visible={shouldCloseModal}
      onRequestClose={requestClose}
    >
      <GestureHandlerRootView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={requestClose}>
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.dimmer}
          />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.container, containerAnimatedStyle]}>
          <GestureDetector gesture={panGestureEvent}>
            <View style={styles.handleContainer}>
              <View style={styles.handle} />
            </View>
          </GestureDetector>

          <View style={styles.contentContainer}>{component}</View>
        </Animated.View>
      </GestureHandlerRootView>
    </Modal>
  );
};

type Style = {
  wrapper: ViewStyle;
  dimmer: ViewStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  handleContainer: ViewStyle;
  handle: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  wrapper: {
    flex: 1,
  },
  dimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  handle: {
    width: 35,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
});

export default memo(BottomSheet);
