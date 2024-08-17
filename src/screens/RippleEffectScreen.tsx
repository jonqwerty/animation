import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onTap?: () => void;
}

const Ripple: React.FC<RippleProps> = ({
  style,
  onTap,
  children,
  contentContainerStyle,
}) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const aRef = useAnimatedRef<View>();
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const rippleOpacity = useSharedValue(1);

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: tapEvent => {
        const layout = measure(aRef);
        width.value = layout.width;
        height.value = layout.height;

        centerX.value = tapEvent.x;
        centerY.value = tapEvent.y;

        rippleOpacity.value = 1;
        scale.value = 0;
        scale.value = withTiming(1, {duration: 1000});
      },
      onActive: () => {
        if (onTap) runOnJS(onTap)();
      },
      onFinish: () => {
        rippleOpacity.value = withTiming(0);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        {translateX},
        {translateY},
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <View ref={aRef} style={style}>
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View style={[style, {overflow: 'hidden'}]}>
          <View>{children}</View>
          <Animated.View style={rStyle} />
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

const RippleEffectScreen = () => {
  return (
    <View style={styles.container}>
      <Ripple
        style={styles.ripple}
        onTap={() => {
          console.log('tap');
        }}>
        <Text style={{fontSize: 25}}>Tap</Text>
      </Ripple>
    </View>
  );
};

export default RippleEffectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});
