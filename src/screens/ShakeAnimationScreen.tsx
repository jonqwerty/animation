import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Animated, {
    Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ShakeAnimationScreen = () => {
  const [count, setCount] = useState(0);
  const shakeTranslateX = useSharedValue(0);

  const shake = useCallback(() => {
    const TranslationAmount = 10;
    const timingConfig = {
      // cubic-bezier(.35,.7,.5,.7)
      easing: Easing.bezier(0.35, 0.7, 0.5, 0.7),
      duration: 80,
    };
    shakeTranslateX.value = withSequence(
      withTiming(TranslationAmount, timingConfig),
      withRepeat(withTiming(-TranslationAmount, timingConfig), 3, true),
      withSpring(0, {
        mass: 0.5,
      }),
    );
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: shakeTranslateX.value}],
    };
  }, []);

  const isShaking = useDerivedValue(() => {
    return shakeTranslateX.value !== 0;
  }, []);

  const onIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const onDecrement = useCallback(() => {
    setCount(c => {
      if (c === 0) {
        shake();
        return 0;
      }
      return c - 1;
    });
  }, []);

  const rErrorTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(isShaking.value ? 'red' : 'black', {
        duration: 50,
      }),
    };
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.counterText, rStyle, rErrorTextStyle]}>
        {count}
      </Animated.Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShakeAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 98,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 64,
    right: 32,
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    height: 64,
    aspectRatio: 1,
    backgroundColor: '#0f41a4',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
