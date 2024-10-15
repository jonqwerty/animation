import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BackdropFilter,
  Blur,
  Canvas,
  center,
  convertToColumnMajor,
  Fill,
  Image,
  Matrix4,
  processTransform3d,
  rect,
  RoundedRect,
  rrect,
  RuntimeShader,
  Skia,
  SkRect,
  SkRRect,
  SweepGradient,
  useImage,
  usePathValue,
  vec,
} from '@shopify/react-native-skia';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

// const generateShader = () => {
//   const maxSigma = 10;
//   const k = 3;
//   const windowSize = k * maxSigma;
//   const halfWindowSize = (windowSize / 2).toFixed(2);
//   const source = Skia.RuntimeEffect.Make(`
// uniform shader image;
// uniform mat4 matrix;

// uniform float2 direction;

// float Gaussian(float x, float sigma) {
// return exp(-(x * x) / (2.0 * sigma * sigma)) / ()}
// `);
// };

// const sourceA = generateShader();

// interface BlurGradientProps {
//   matrix: Readonly<SharedValue<Matrix4>>;
// }

// const BlurMask = ({matrix}: BlurGradientProps) => {
//   const hUniforms = useDerivedValue(() => {
//     return {
//       derection: vec(1, 0),
//       matrix: convertToColumnMajor(matrix.value),
//     };
//   });
//   const vUniforms = useDerivedValue(() => {
//     return {
//       derection: vec(0, 1),
//       matrix: convertToColumnMajor(matrix.value),
//     };
//   });

//   return (
//     <RuntimeShader source={sourceA} uniforms={hUniforms}>
//       <RuntimeShader source={sourceA} uniforms={vUniforms} />
//     </RuntimeShader>
//   );
// };

const {width, height} = Dimensions.get('window');

const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = CARD_WIDTH / 1.618;

const rct = Skia.XYWHRect(
  (width - CARD_WIDTH) / 2,
  (height - CARD_HEIGHT) / 2,
  CARD_WIDTH,
  CARD_HEIGHT,
);

const rrct = Skia.RRectXY(rct, 10, 10);

const inflate = (rct: SkRect, amount: number) =>
  rect(
    rct.x - amount,
    rct.y - amount,
    rct.width + 2 * amount,
    rct.height + 2 * amount,
  );

const inflateRounded = (rct: SkRRect, amount: number) => {
  rrect(inflate(rct.rect, amount), rct.rx, rct.ry);
};

const springConfig = (velocity: number) => {
  'worklet';
  return {
    mass: 1,
    damping: 1,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    velocity,
  };
};

const sf = 1 / 300;

const source = Skia.RuntimeEffect.Make(`
uniform shader image;
uniform mat4 matrix;

vec4 main(vec2 fragCoord) {
vec4 prj = matrix * vec4(fragCoord, 0.0, 1.0);
float r = 150.0;
float p = (prj.z + r) / (2.0 * r);
return mix(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), p);
}
`);

const Animated3DBluredCardScreen = () => {
  const tree = useImage(require('../assets/images/03.jpg'));
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onChange(e => {
      rotateX.value -= e.changeY * sf;
      rotateY.value += e.changeX * sf;
    })
    .onEnd(({velocityX, velocityY}) => {
      rotateX.value = withSpring(0, springConfig(velocityY * sf));
      rotateY.value = withSpring(0, springConfig(velocityX * sf));
    });

  const c = center(rrct.rect);

  const clip = usePathValue(path => {
    'worklet';
    path.addRRect(rrct);
    path.transform(
      processTransform3d([
        {translate: [c.x, c.y]},
        {perspective: 300},
        {rotateX: rotateX.value},
        {rotateY: rotateY.value},
        {translate: [-c.x, -c.y]},
      ]),
    );
  });

  //   const transform = useDerivedValue(() => {
  //     return [
  //       {translate: [c.x, c.y]},
  //       {perspective: 300},
  //       {rotateX: rotateX.value},
  //       {rotateY: rotateY.value},
  //       {translate: [-c.x, -c.y]},
  //     ];
  //   });

  const uniforms = useDerivedValue(() => {
    return {
      matrix: convertToColumnMajor(
        processTransform3d([
          {translate: [c.x, c.y]},
          {perspective: 300},
          {rotateX: rotateX.value},
          {rotateY: rotateY.value},
          {translate: [-c.x, -c.y]},
        ]),
      ),
    };
  });

  //   const matrix = useDerivedValue(() => {
  //     return processTransform3d([
  //       {translate: [c.x, c.y]},
  //       {perspective: 300},
  //       {rotateX: rotateX.value},
  //       {rotateY: rotateY.value},
  //       {translate: [-c.x, -c.y]},
  //     ]);
  //   });

  return (
    <View style={{flex: 1}}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{flex: 1}}>
          {/* <Fill />
          <RoundedRect rect={inflateRounded(rrct, 2)}>
            <SweepGradient
              c={c}
              colors={['cyan', 'mgenta', 'yellow', 'cyan']}
            />
            <BlurMask blur={10} style="solid" />
          </RoundedRect> */}
          {/* <RoundedRect rect={rrct} transform={transform} /> */}
          <Image
            image={tree}
            x={0}
            y={0}
            width={width}
            height={height}
            fit={'cover'}
          />
          <BackdropFilter filter={<Blur blur={10} />} clip={clip}>
            <Fill color="rgba(255,255,255,0.1)" />
          </BackdropFilter>
          {/* <BackdropFilter
            filter={<RuntimeShader source={source} uniforms={uniforms} />}
            clip={clip}>
            <Fill color="rgba(255,255,255,0.1)" />
          </BackdropFilter> */}
          {/* <BackdropFilter filter={<BlurMask matrix={matrix} />} clip={clip}> // in this case BlurMask is custom
            <Fill color="rgba(255,255,255,0.1)" />
          </BackdropFilter> */}
        </Canvas>
      </GestureDetector>
    </View>
  );
};

export default Animated3DBluredCardScreen;

const styles = StyleSheet.create({});
