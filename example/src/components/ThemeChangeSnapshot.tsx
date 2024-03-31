import {
  Canvas,
  Circle,
  ImageShader,
  Image as SkImage,
  dist,
  mix,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useThemeAnimation from '../hooks/useThemeAnimation';
import { windowHeight, windowWidth } from '../lib/utils/public';
import { useThemeAnimationStore } from '../stores/theme';

const SCREEN_CORNERS = [
  vec(0, 0),
  vec(windowWidth, 0),
  vec(windowWidth, windowHeight),
  vec(0, windowHeight),
];
const radius = Math.max(
  ...SCREEN_CORNERS.map((corner) => dist(corner, { x: 0, y: 0 }))
);

const ThemeChangeSnapshot = () => {
  const { snapshot1, snapshot2 } = useThemeAnimationStore();
  const { clearAnimation } = useThemeAnimation();

  const circleValue = useSharedValue({ x: 0, y: 0, r: radius });
  const transition = useSharedValue(0);
  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circleValue.value.r);
  });

  React.useEffect(() => {
    if (snapshot2) {
      transition.value = withTiming(1, { duration: 350 }, () => {
        runOnJS(clearAnimation)();
      });

      setTimeout(() => {
        transition.value = 0;
      }, 450);
    }
  }, [snapshot2]);

  return (
    <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
      {snapshot1 !== undefined && (
        <SkImage
          image={snapshot1}
          x={0}
          y={0}
          width={windowWidth}
          height={windowHeight}
        />
      )}
      {snapshot2 !== undefined && (
        <Circle c={circleValue} r={r}>
          <ImageShader
            image={snapshot2}
            x={0}
            y={0}
            width={windowWidth}
            height={windowHeight}
            fit="cover"
          />
        </Circle>
      )}
    </Canvas>
  );
};

export default ThemeChangeSnapshot;
