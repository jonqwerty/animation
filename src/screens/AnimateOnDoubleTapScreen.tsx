import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const {width: SIZE} = Dimensions.get('window');

const AnimateOnDoubleTapScreen = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('../assets/images/image1.png')}
              style={styles.image}>
              <AnimatedImage
                source={require('../assets/images/heart.png')}
                style={[
                  styles.image,
                  {
                    shadowOffset: {width: 0, height: 20},
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'center'}
              />
            </ImageBackground>
            <Animated.Text style={[styles.dudes, rTextStyle]}>
              😎😎 😎 😎😎
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default AnimateOnDoubleTapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  dudes: {fontSize: 40, textAlign: 'center', marginTop: 30},
});
