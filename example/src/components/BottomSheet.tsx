import React, { memo, useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  type ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import PokeBall from '../assets/images/pokeball.svg';

const DEFAULT_HEIGHT = 350;

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const BottomSheet = ({ isVisible, onClose }: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const startHeight = useSharedValue(0);
  const translateY = useSharedValue(DEFAULT_HEIGHT);
  const height = useSharedValue(DEFAULT_HEIGHT);

  const panGestureEvent = Gesture.Pan()
    .onStart(() => {
      startHeight.value = height.value;
    })
    .onUpdate((event) => {
      height.value = startHeight.value - event.translationY;
    })
    .onEnd((_) => {
      if (height.value > 500) {
        height.value = withSpring(700);
      } else if (height.value > 400) {
        height.value = withSpring(DEFAULT_HEIGHT);
      } else {
        runOnJS(onClose)();
      }
    });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    if (isVisible) {
      setIsSheetOpen(true);
      translateY.value = withTiming(0);
      height.value = DEFAULT_HEIGHT;
    } else {
      translateY.value = withTiming(DEFAULT_HEIGHT + height.value, {}, () => {
        runOnJS(setIsSheetOpen)(false);
      });
    }
  }, [isVisible]);

  return (
    <Modal
      style={styles.wrapper}
      animationType="fade"
      transparent
      visible={isSheetOpen}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
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

        <View style={styles.contentContainer}>
          <PokeBall width={64} height={64} style={styles.image} />
        </View>
      </Animated.View>
    </Modal>
  );
};

type Style = {
  wrapper: ViewStyle;
  dimmer: ViewStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  image: ViewStyle;
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
  image: {
    width: 64,
    height: 64,
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
