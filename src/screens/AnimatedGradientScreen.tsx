import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import React from 'react';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';

const getRandomColor = () => {
  // Generate random RGB color values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the color in the format '#RRGGBB'
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

const AnimatedGradientScreen = () => {
  const {width, height} = useWindowDimensions();

  const leftColor = useSharedValue('red');
  const rightColor = useSharedValue('blue');

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, []);

  return (
    <>
      <Canvas style={{flex: 1}}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          leftColor.value = withTiming(getRandomColor());
          rightColor.value = withTiming(getRandomColor());
        }}></TouchableOpacity>
    </>
  );
};

export default AnimatedGradientScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 52,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: '#000',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
