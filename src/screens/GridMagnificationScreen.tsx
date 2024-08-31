import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  Canvas,
  Group,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import {
  useSharedValue,
  useDerivedValue,
  Extrapolate,
  withTiming,
  interpolate,
  SharedValue,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const SQUARES_AMOUNT_HORIZONTAL = 8;
const SQUARE_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL;
const PADDING = 20;
const SQUARE_SIZE = SQUARE_CONTAINER_SIZE - PADDING;
const SQUARES_AMOUNT_VERTICAL =
  Math.floor(SCREEN_HEIGHT / SQUARE_CONTAINER_SIZE) - 3;
const CANVAS_WIDTH = SCREEN_WIDTH;
const CANVAS_HEIGHT = SQUARES_AMOUNT_VERTICAL * SQUARE_CONTAINER_SIZE;
const MAX_DISTANCE = Math.sqrt(CANVAS_WIDTH ** 2 + CANVAS_HEIGHT ** 2);

type RoundedItemProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  point: SharedValue<{
    x: number;
    y: number;
  } | null>;
  progress: SharedValue<number>;
};

const RoundedItem: React.FC<RoundedItemProps> = React.memo(
  ({point, progress, ...squareProps}) => {
    const {x, y, width, height} = squareProps;

    const previousDistance = useSharedValue(0);
    const previousTouchedPoint = useSharedValue({
      x: CANVAS_WIDTH / 2,
      y: CANVAS_HEIGHT / 2,
    });

    const distance = useDerivedValue(() => {
      if (point.value == null) return previousDistance.value;
      previousDistance.value = Math.sqrt(
        (point.value.x - x) ** 2 + (point.value.y - y) ** 2,
      );
      return previousDistance.value;
    }, [point]);

    const scale = useDerivedValue(() => {
      return interpolate(
        distance.value * progress.value,
        [0, MAX_DISTANCE / 2],
        [1, 0],
        {
          extrapolateLeft: Extrapolate.CLAMP,
          extrapolateRight: Extrapolate.CLAMP,
        },
      );
    }, [distance, progress]);

    const transform = useDerivedValue(() => {
      return [{scale: scale.value}];
    }, [scale]);

    const origin = useDerivedValue(() => {
      if (point.value == null) {
        return previousTouchedPoint.value;
      }
      previousTouchedPoint.value = point.value;
      return previousTouchedPoint.value;
    }, [point]);

    return (
      <Group origin={origin} transform={transform}>
        <RoundedRect {...squareProps} r={4} />
      </Group>
    );
  },
);

const GridMagnificationScreen = () => {
  const touchedPoint = useSharedValue<{x: number; y: number} | null>(null);

  const progress = useSharedValue<number>(0);

  const gesture = Gesture.Pan()
    .onStart(event => {
      progress.value = withTiming(1, {duration: 300});
      touchedPoint.value = {x: event.x, y: event.y};
    })
    .onUpdate(event => {
      touchedPoint.value = {x: event.x, y: event.y};
    })
    .onEnd(() => {
      progress.value = withTiming(0, {duration: 300});
      touchedPoint.value = null;
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Canvas
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
          }}>
          <Group>
            {new Array(SQUARES_AMOUNT_HORIZONTAL).fill(0).map((_, i) => {
              return new Array(SQUARES_AMOUNT_VERTICAL).fill(0).map((_, j) => {
                return (
                  <RoundedItem
                    progress={progress}
                    point={touchedPoint}
                    key={`i${i}-j${j}`}
                    x={i * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    y={j * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    width={SQUARE_SIZE}
                    height={SQUARE_SIZE}
                  />
                );
              });
            })}
            <SweepGradient
              c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
              colors={['cyan', 'magenta', 'yellow', 'cyan']}
            />
          </Group>
        </Canvas>
      </GestureDetector>
    </View>
  );
};

export default GridMagnificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
