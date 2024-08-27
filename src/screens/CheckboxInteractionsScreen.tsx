import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Color from 'color';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const BestCuisine = 'Italian';
export const Cuisines = new Array(20).fill(BestCuisine).map((cuisine, i) => ({
  id: i,
  name: cuisine,
  selected: false,
}));

export const ACTIVE_COLOR = '#EF8E52';
export const INACTIVE_COLOR = '#B3B1B4';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const TimingConfig = {
  duration: 150,
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onPress,
}) => {
  const fadedActiveColor = Color(ACTIVE_COLOR).alpha(0.1).toString();

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? fadedActiveColor : 'transparent',
        TimingConfig,
      ),
      borderColor: withTiming(
        checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        TimingConfig,
      ),
      paddingLeft: 20,
      paddingRight: !checked ? 20 : 14,
    };
  }, [checked]);

  const rTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(checked ? ACTIVE_COLOR : INACTIVE_COLOR, TimingConfig),
    };
  }, [checked]);

  return (
    <Animated.View
      layout={LinearTransition.springify().mass(0.8)}
      style={[styles.containerA, rContainerStyle]}
      onTouchEnd={onPress}>
      <Animated.Text style={[styles.label, rTextStyle]}>{label}</Animated.Text>
      {checked && (
        <Animated.View
          entering={FadeIn.duration(350)}
          exiting={FadeOut}
          style={{
            marginLeft: 8,
            justifyContent: 'center',
            alignItems: 'center',
            height: 20,
            width: 20,
          }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: ACTIVE_COLOR,
            }}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
};
const CheckboxInteractionsScreen = () => {
  const [cuisines, setCuisines] = useState(Cuisines);

  const toggleCuisine = useCallback((id: number) => {
    setCuisines(prevCuisines => {
      return prevCuisines.map(cuisine => {
        if (cuisine.id === id) {
          return {
            ...cuisine,
            selected: !cuisine.selected,
          };
        }
        return cuisine;
      });
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: 24,
        },
      ]}>
      <Text style={styles.title}>What are your favourite cuisines?</Text>
      <View style={styles.listContainer}>
        {cuisines.map(cuisine => {
          return (
            <Checkbox
              key={cuisine.id}
              label={cuisine.name}
              checked={cuisine.selected}
              onPress={() => {
                toggleCuisine(cuisine.id);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CheckboxInteractionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 26,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 24,
    paddingRight: 16,
  },
  containerA: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
});
