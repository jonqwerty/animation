import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {FC, ReactNode, useRef, useState} from 'react';
import {AnimatedProps} from 'react-native-reanimated';
import {
  Canvas,
  Group,
  Image,
  Mask,
  Path,
  Rect,
  Skia,
  SkImage,
  useImage,
} from '@shopify/react-native-skia';

type Props = {
  style: StyleProp<ViewStyle>;
  image: AnimatedProps<SkImage | null>;
  children?: ReactNode;
};

const ScratchCardC: FC<Props> = ({style, image, children}) => {
  const [[width, height], setSize] = useState([0, 0]);
  const path = useRef(Skia.Path.Make());

  return (
    <View
      onLayout={e => {
        setSize([e.nativeEvent.layout.width, e.nativeEvent.layout.height]);
      }}
      style={[styles.container, style]}>
      {Boolean(image && width && height) && (
        <>
          <View>
            {children}
            <Canvas
              style={styles.canvas}
              onTouchStart={({nativeEvent}) => {
                path.current.moveTo(
                  nativeEvent.locationX,
                  nativeEvent.locationY,
                );
              }}
              onTouchMove={({nativeEvent}) => {
                path.current.lineTo(
                  nativeEvent.locationX,
                  nativeEvent.locationY,
                );
              }}>
              <Mask
                mode="luminance"
                mask={
                  <Group>
                    <Rect
                      x={0}
                      y={0}
                      width={1000}
                      height={1000}
                      color="white"
                    />
                    <Path
                      path={path.current}
                      color="black"
                      style="stroke"
                      strokeJoin="round"
                      strokeCap="round"
                      strokeWidth={50}
                    />
                  </Group>
                }>
                <Image
                  image={image}
                  fit="cover"
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                />
              </Mask>
            </Canvas>
          </View>
        </>
      )}
    </View>
  );
};

const ScratchCard = () => {
  const image = useImage(require('../assets/images/image_03.jpg'));
  if (!image) {
    return <Text>Loading ...</Text>;
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Scratch me</Text>
      <ScratchCardC image={image} style={styles.scratchCard}>
        <View style={styles.card}>
          <Text style={{fontSize: 50}}>100 $</Text>
        </View>
      </ScratchCardC>
    </View>
  );
};

export default ScratchCard;

const styles = StyleSheet.create({
  scratchCard: {
    borderRadius: 16,
  },
  card: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  container: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});
