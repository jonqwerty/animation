import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useMemo} from 'react';
import {
  Blur,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import Touchable, {useGestureHandler} from 'react-native-skia-gesture';
import {useSharedValue, withSpring} from 'react-native-reanimated';

const RADIUS = 80;

const MetaballScreen = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  const cx = useSharedValue(windowWidth / 2);
  const cy = useSharedValue(windowHeight / 2);

  const context = useSharedValue({x: 0, y: 0});

  const gestureHandler = useGestureHandler({
    onStart: () => {
      'worklet'; // Remember the 'worklet' keyword
      context.value = {
        x: cx.value,
        y: cy.value,
      };
    },
    onActive: ({translationX, translationY}) => {
      'worklet';
      cx.value = context.value.x + translationX;
      cy.value = context.value.y + translationY;
    },
    onEnd: () => {
      'worklet';
      cx.value = withSpring(windowWidth / 2);
      cy.value = withSpring(windowHeight / 2);
    },
  });

  const layer = useMemo(() => {
    return (
      <Paint>
        {/* pixelOpacity > blurredOpacity * 60 - 30 */}
        <Blur blur={30} />
        <ColorMatrix
          matrix={[
            // R, G, B, A, Bias (Offset)
            // prettier-ignore
            1, 0, 0, 0, 0,
            // prettier-ignore
            0, 1, 0, 0, 0,
            // prettier-ignore
            0, 0, 1, 0, 0,
            // prettier-ignore
            0, 0, 0, 60, -30,
          ]}
        />
      </Paint>
    );
  }, []);

  return (
    <Touchable.Canvas
      style={{
        flex: 1,
        backgroundColor: '#111',
      }}>
      <Group layer={layer}>
        <Touchable.Circle {...gestureHandler} cx={cx} cy={cy} r={RADIUS} />
        <Circle cx={windowWidth / 2} cy={windowHeight / 2} r={RADIUS} />
        <SweepGradient c={vec(0, 0)} colors={['cyan', 'magenta', 'cyan']} />
      </Group>
    </Touchable.Canvas>
  );
};

export default MetaballScreen;

const styles = StyleSheet.create({});
