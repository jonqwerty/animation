import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getStyles} from '../utils/utils';

interface ToastProps {
  type?: 'success' | 'warning' | 'error';
  title: string;
  description: string;
  duration: number;
}

const Toast = forwardRef(({}, ref) => {
  const toastTopAnimation = useSharedValue(-100);
  const [state, setState] = useState({
    title: '',
    isShow: false,
    type: '',
    description: '',
  });

  const {backgroundColor, titleColor, descriptionColor} = getStyles(state.type);

  const updateState = (newState: Object) => {
    setState((prevState: any) => ({
      ...prevState,
      ...newState,
    }));
  };

  const insets = useSafeAreaInsets();

  const show = useCallback(
    ({title, description, type, duration = 2000}: ToastProps) => {
      updateState({
        isShow: true,
        title,
        description,
        type,
      });

      toastTopAnimation.value = withSequence(
        withTiming(Math.max(Number(insets.top), 15)),
        withDelay(
          duration,
          withTiming(-100, undefined, finish => {
            if (finish) {
              runOnJS(() => {
                updateState({
                  isShown: false,
                });
              });
            }
          }),
        ),
      );
    },
    [insets, toastTopAnimation],
  );

  useImperativeHandle(
    ref,
    () => ({
      show: (props: ToastProps) => show(props),
    }),
    [show],
  );

  const animatedTopStyle = useAnimatedStyle(() => {
    return {
      top: toastTopAnimation.value,
    };
  });

  return (
    <>
      {state.isShow && (
        <Animated.View
          style={[styles.toastContainer, {backgroundColor}, animatedTopStyle]}>
          <View style={styles.titleCard}>
            <Text style={[styles.title, {color: titleColor}]}>
              {state.title}
            </Text>
            {state.description && (
              <Text style={[styles.description, {color: descriptionColor}]}>
                {state.description}
              </Text>
            )}
          </View>
        </Animated.View>
      )}
    </>
  );
});

const ToastMessageScreen = () => {
  const toastRef = useRef<any>({});
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          toastRef.current.show({
            title: 'Successfully Toasted',
            description: 'Success Toast',
            type: 'success',
          });
        }}>
        <Text>Success</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          toastRef.current.show({
            title: 'Successfully Toasted',
            description: 'Warning Toast',
            type: 'warning',
          });
        }}>
        <Text>Warning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          toastRef.current.show({
            title: 'Successfully Toasted',
            description: 'Error Toast',
            type: 'error',
          });
        }}>
        <Text>Error</Text>
      </TouchableOpacity>
      <Toast ref={toastRef} />
    </View>
  );
};

export default ToastMessageScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'grap',
    borderRadius: 50,
  },
  toastContainer: {
    position: 'absolute',
    top: 0,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    backgroundColor: '#def1d7',
  },
  titleCard: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    fontSize: 10,
    fontWeight: '500',
  },
});
