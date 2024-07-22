import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const CardHeight = 180;
const CardWidth = (3 / 4) * CardHeight;

type CardProps = {
  index: number;
  progress: SharedValue<number>;
};

const Card: FC<CardProps> = ({index, progress}) => {
  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, index * 25]);

    const rotate = interpolate(
      progress.value,
      [0, 1],
      [-index * 10, index * 10],
    );

    const translateY = interpolate(progress.value, [0, 1], [0, -index * 5]);

    return {
      transform: [
        {
          translateX: translateX, // 0 -> index * 25
        },
        {
          rotate: `${rotate}deg`, // `${-index * 10}deg` -> `${index * 10}deg`
        },
        {
          translateY: translateY, // 0 -> -index * 25
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          zIndex: -index,
        },
        rStyle,
      ]}
    />
  );
};

const StackedCardsScreen = () => {
  const progress = useSharedValue(0);

  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        progress.value = withSpring(1, {
          mass: 2,
        });
      }}
      onTouchEnd={() => {
        progress.value = withSpring(0);
      }}>
      {new Array(4).fill(null).map((_, index) => {
        return <Card key={index} index={index} progress={progress} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    height: CardHeight,
    width: CardWidth,
    borderRadius: 20,
    borderCurve: 'continuous',
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: '#a0a0a0',
  },
});

export default StackedCardsScreen;
