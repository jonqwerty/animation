import {
  Dimensions,
  FlatList,
  Image,
  ImageProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const data = [
  require('../assets/images/00.jpg'),
  require('../assets/images/01.jpg'),
  require('../assets/images/02.jpg'),
  require('../assets/images/03.jpg'),
  require('../assets/images/04.jpg'),
  require('../assets/images/05.jpg'),
  require('../assets/images/06.jpg'),
  require('../assets/images/07.jpg'),
  require('../assets/images/08.jpg'),
  require('../assets/images/09.jpg'),
];

type CircularCarouselListItemProps = {
  imageSrc: ImageProps['source'];
  index: number;
  contentOffset: Animated.SharedValue<number>;
};

const {width: windowWidth} = Dimensions.get('window');

export const ListItemWidth = windowWidth / 4;

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({
  imageSrc,
  index,
  contentOffset,
}) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ListItemWidth,
      (index - 1) * ListItemWidth,
      index * ListItemWidth,
      (index + 1) * ListItemWidth,
      (index + 2) * ListItemWidth,
    ];

    const translateYOutputRange = [
      0,
      -ListItemWidth / 3,
      -ListItemWidth / 2,
      -ListItemWidth / 3,
      0,
    ];

    const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateY: translateY,
        },
        // Padding left is better than translateX
        // {
        //   translateX: ListItemWidth / 2 + ListItemWidth,
        // },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ListItemWidth,
          aspectRatio: 1,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}>
      {/* 
        React Native Image because it was crashing on Android:
      */}
      <Image
        source={imageSrc}
        style={{
          margin: 3,
          height: ListItemWidth,
          width: ListItemWidth,

          borderRadius: 200,
          borderWidth: 2,
          borderColor: 'white',
        }}
      />
    </Animated.View>
  );
};

const CircularCarouselScreen = () => {
  const contentOffset = useSharedValue(0);
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      scrollEventThrottle={16} // 60fps -> 16ms (1000ms / 60fps)
      onScroll={event => {
        contentOffset.value = event.nativeEvent.contentOffset.x;
      }}
      pagingEnabled
      snapToInterval={ListItemWidth}
      style={{
        position: 'absolute',
        bottom: 0,
        height: 300,
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 1.5 * ListItemWidth,
        // paddingRight: 1.5 * ListItemWidth,
        // paddingLeft: 1.5 * ListItemWidth,
      }}
      horizontal
      renderItem={({item, index}) => {
        return (
          <CircularCarouselListItem
            contentOffset={contentOffset}
            imageSrc={item}
            index={index}
          />
        );
      }}
    />
  );
};

export default CircularCarouselScreen;

const styles = StyleSheet.create({});
