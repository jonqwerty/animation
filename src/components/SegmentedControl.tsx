import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {PALETTE} from '../constants';

interface SegmentBtnScreenProps {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
}

const SegmentedControl: FC<SegmentBtnScreenProps> = ({
  options,
  selectedOption,
  onOptionPress,
}) => {
  const {width: windowWidth} = useWindowDimensions();

  const internalPadding = 20;

  const segmentedControlWidth = windowWidth - 40;

  const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(
        itemWidth * options.indexOf(selectedOption) + internalPadding / 2,
      ),
    };
  }, [selectedOption, options, itemWidth]);

  return (
    <View
      style={[
        styles.container,
        {
          width: segmentedControlWidth,

          borderRadius: 20,
          paddingLeft: internalPadding / 2,
        },
      ]}>
      <Animated.View
        style={[
          {
            width: itemWidth,
          },
          rStyle,
          styles.activeBox,
        ]}
      />
      {options.map(option => {
        return (
          <TouchableOpacity
            onPress={() => {
              onOptionPress?.(option);
            }}
            key={option}
            style={[
              {
                width: itemWidth,
              },
              styles.labelContainer,
            ]}>
            <Text style={styles.label}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: PALETTE.baseGray05,
  },
  activeBox: {
    position: 'absolute',
    borderRadius: 10,
    shadowColor: PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 3,
    height: '80%',
    top: '10%',
    backgroundColor: PALETTE.background,
  },
  labelContainer: {justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 16},
});
