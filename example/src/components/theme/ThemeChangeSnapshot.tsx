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
import useThemeAnimation from '../../hooks/useThemeAnimation';
import { windowHeight, windowWidth } from '../../lib/utils/public';
import { useThemeAnimationStore } from '../../stores/theme';

// Screen의 네 모서리의 좌표
const SCREEN_CORNERS = [
  vec(0, 0),
  vec(windowWidth, 0),
  vec(windowWidth, windowHeight),
  vec(0, windowHeight),
];

// 반지름 구하는 공식 (0, 0)으로부터 가장 먼 모서리까지의 거리
const radius = Math.max(
  ...SCREEN_CORNERS.map((corner) => dist(corner, { x: 0, y: 0 }))
);

const ThemeChangeSnapshot = () => {
  const { snapshot1, snapshot2 } = useThemeAnimationStore();
  const { clearAnimationState } = useThemeAnimation();

  const circleValue = useSharedValue({ x: 0, y: 0, r: radius });
  const transition = useSharedValue(0);
  // transition이 0일 때는 반지름이 0이고, 1에 가까워질수록 반지름이 커진다. (즉, 원이 점점 커진다)
  const animatedRadius = useDerivedValue(() => {
    return mix(transition.value, 0, circleValue.value.r);
  });

  React.useEffect(() => {
    if (snapshot2) {
      transition.value = withTiming(1, { duration: 350 }, () => {
        runOnJS(clearAnimationState)();
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
        <Circle c={circleValue} r={animatedRadius}>
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
