import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {format} from 'date-fns';

import {data, Palette} from '../common/constants';

export type Day = {
  day: Date;
  value: number; // 0 - 1
};

type SingleBarChartProps = {
  maxHeight: number;
  width: number;
  day: Day;
};

export const SingleBarChart = ({
  maxHeight,
  width,
  day,
}: SingleBarChartProps) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(maxHeight * day.value),
      opacity: withTiming(day.value),
    };
  }, [day.value, maxHeight]);

  return (
    <View>
      <Animated.View
        style={[
          {
            width: width,
            backgroundColor: 'white',
            borderRadius: 15,
            borderCurve: 'continuous',
          },
          rStyle,
        ]}
      />
      <Text
        style={{
          width: width,
          textAlign: 'center',
          fontSize: 12,
          marginTop: 5,
          color: 'white',
          fontFamily: 'FiraCode-Regular',
          textTransform: 'lowercase',
        }}>
        {format(day.day, 'eeeee')}
      </Text>
    </View>
  );
};

type Week = Day[];

type WeeklyBarChartProps = {
  weeks: Week[];
  activeWeekIndex: number;
  onWeekChange: (index: number) => void;
};

export const WeeklyBarChart = ({
  weeks,
  activeWeekIndex,
  onWeekChange,
}: WeeklyBarChartProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const activeWeek = weeks[activeWeekIndex];

  const BarChartWidth = windowWidth * 0.8;
  const BarChartGap = 10;
  const BarWidth =
    (BarChartWidth - BarChartGap * (activeWeek.length - 1)) / activeWeek.length;
  const MaxBarHeight = 150;
  const ScrollViewHeight = 60;

  return (
    <View
      style={{
        height: ScrollViewHeight + MaxBarHeight,
        width: windowWidth,
      }}>
      <View
        style={{
          height: MaxBarHeight,
          flexDirection: 'row',
          gap: BarChartGap,
          alignItems: 'flex-end',
          marginHorizontal: (windowWidth - BarChartWidth) / 2,
        }}>
        {activeWeek.map((day, index) => (
          <SingleBarChart
            key={index}
            maxHeight={MaxBarHeight}
            width={BarWidth}
            day={day}
          />
        ))}
      </View>
      <ScrollView
        horizontal
        snapToInterval={windowWidth}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        scrollEventThrottle={16} // 60 FPS - 1000ms / 60 = 16.6666
        onScroll={({nativeEvent}) => {
          const scrollOffset = nativeEvent.contentOffset.x;
          const activeIndex = Math.round(scrollOffset / windowWidth);
          onWeekChange(activeIndex);
        }}
        style={{
          width: windowWidth,
          height: ScrollViewHeight,
        }}>
        {weeks.map((week, index) => {
          return (
            <View
              key={index}
              style={{
                height: ScrollViewHeight,
                width: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>
                week of {format(week[0].day, 'd MMMM')}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const AnimatedBarChartScreen: FC = () => {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  return (
    <View style={styles.container}>
      <WeeklyBarChart
        weeks={data}
        activeWeekIndex={activeWeekIndex}
        onWeekChange={setActiveWeekIndex}
      />
    </View>
  );
};

export default AnimatedBarChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
});
