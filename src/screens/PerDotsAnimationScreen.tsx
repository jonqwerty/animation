import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useScrollViewOffset,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ACTIVE_COLOR = '#66e070';
const DOTS_COUNT = 3;

type DotProps = {
  index: number;
  activeIndex: SharedValue<number>;
  size: number;
};

export const Dot: React.FC<DotProps> = ({index, activeIndex, size}) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isDotActive = index <= activeIndex.value;
    return {
      opacity: withTiming(isDotActive ? 1 : 0.3, {
        duration: 150,
      }),
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: 'white',
          borderRadius: size / 2,
        },
        rDotStyle,
      ]}
    />
  );
};

type DotsProps = {
  count: number;
  activeIndex: SharedValue<number>;
};

const DOTS_SIZE = 10;
const DOTS_GAP = 20;

export const Dots = ({count, activeIndex}: DotsProps) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const width =
      DOTS_SIZE * (activeIndex.value + 1) + DOTS_GAP * (activeIndex.value + 1);

    return {
      width: withSpring(width, {
        mass: 0.6,
      }),
    };
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: DOTS_GAP,
      }}>
      {new Array(count).fill(0).map((_, index) => {
        return (
          <Dot
            key={index}
            index={index}
            activeIndex={activeIndex}
            size={DOTS_SIZE}
          />
        );
      })}
      <Animated.View
        style={[
          {
            left: -DOTS_GAP / 2,
            height: DOTS_SIZE * 3,
            top: -DOTS_SIZE,
            borderRadius: DOTS_SIZE * 2,
            borderCurve: 'continuous',
            position: 'absolute',
            backgroundColor: ACTIVE_COLOR,
            zIndex: -1,
          },
          rContainerStyle,
        ]}
      />
    </View>
  );
};

const PerDotsAnimationScreen = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  // we need to find the scrollOffset

  // once we have the scrollOffset we can find the active index

  const scrollAnimatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollAnimatedRef);

  const activeIndex = useDerivedValue(() => {
    return Math.round(scrollOffset.value / windowWidth);
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        ref={scrollAnimatedRef}
        decelerationRate={'fast'}
        snapToInterval={windowWidth}>
        {new Array(DOTS_COUNT).fill(0).map((_, index) => (
          <View
            key={index}
            style={{
              width: windowWidth,
              height: windowHeight,
              backgroundColor: 'white',
              opacity: index * 0.1,
            }}
          />
        ))}
      </Animated.ScrollView>
      <View
        style={{
          position: 'absolute',
        }}>
        <Dots count={DOTS_COUNT} activeIndex={activeIndex} />
      </View>
    </View>
  );
};

export default PerDotsAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
