import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

export const Stories = [
  {
    image: require('../assets/images/image_01.png'),
  },
  {
    image: require('../assets/images/image_02.jpg'),
  },
  {
    image: require('../assets/images/image_03.jpg'),
  },
  {
    image: require('../assets/images/image_04.jpg'),
  },
  {
    image: require('../assets/images/image_02.jpg'),
  },
  {
    image: require('../assets/images/image_03.jpg'),
  },
  {
    image: require('../assets/images/image_04.jpg'),
  },
];

export const BACKGROUND_COLOR = '#2D3045';

const WindowWidth = Dimensions.get('window').width;
const StoryListItemWidth = WindowWidth * 0.8;
const StoryListItemHeight = (StoryListItemWidth / 3) * 4;

type StoryListItemProps = {
  imageSource: ImageSource;
  index: number;
  scrollOffset: SharedValue<number>;
};

const StoryListItem: React.FC<StoryListItemProps> = ({
  imageSource,
  index,
  scrollOffset,
}) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const activeIndex = scrollOffset.value / StoryListItemWidth;

    const paddingLeft = (WindowWidth - StoryListItemWidth) / 4;

    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1], // input range [-1 ,0 , 1]
      [120, 60, 0, -StoryListItemWidth - paddingLeft * 2], // output range
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [0.8, 0.9, 1, 1], // output range
      Extrapolation.CLAMP,
    );

    return {
      left: paddingLeft,
      transform: [
        {
          translateX: scrollOffset.value + translateX,
        },
        {scale},
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          zIndex: -index,
        },
        rContainerStyle,
      ]}>
      <Image
        source={imageSource}
        style={{
          width: StoryListItemWidth,
          height: StoryListItemHeight,
          position: 'absolute',
          borderRadius: 25,
        }}
      />
    </Animated.View>
  );
};
const StoryListScreen = () => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);

  const ListPadding = WindowWidth - StoryListItemWidth;

  return (
    <View style={styles.container}>
      <View
        style={{
          height: StoryListItemHeight,
          width: '100%',
        }}>
        <Animated.ScrollView
          ref={animatedRef}
          horizontal
          snapToInterval={StoryListItemWidth}
          decelerationRate={'fast'}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} // 1/60fps = 16ms
          contentContainerStyle={{
            width: StoryListItemWidth * Stories.length + ListPadding,
          }}>
          {Stories.map((story, index) => {
            return (
              <StoryListItem
                index={index}
                imageSource={story.image}
                key={index}
                scrollOffset={scrollOffset}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default StoryListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
