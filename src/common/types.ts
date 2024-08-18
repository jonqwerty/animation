import {RouteProp} from '@react-navigation/native';

export enum Screen {
  List = 'List',
  GestureBtn = 'GestureBtn',
  SegmentBtn = 'SegmentBtn',
  CustomTouchable = 'CustomTouchable',
  StackedCards = 'StackedCards',
  Animated3DCard = 'Animated3DCard',
  DonutChart = 'DonutChart',
  GestyreBasics = 'GestyreBasics',
  InterpolateWithScroll = 'InterpolateWithScroll',
  InterpolateColours = 'InterpolateColours',
  PinchBasics = 'PinchBasics',
  AnimateOnDoubleTap = 'AnimateOnDoubleTap',
  ScrollWithPanGesture = 'ScrollWithPanGesture',
  ColourPicker = 'ColourPicker',
  CircularProgressBar = 'CircularProgressBar',
  SwipeToDelete = 'SwipeToDelete',
  RippleEffect = 'RippleEffect',
  PerspectiveMenu = 'PerspectiveMenu',
  SlidingCounter = 'SlidingCounter',
  ClockLoader = 'ClockLoader',
}

export type RootStackParamList = {
  List: {};
  GestureBtn: {};
  SegmentBtn: {};
  CustomTouchable: {};
  StackedCards: {};
  Animated3DCard: {};
  DonutChart: {};
  GestyreBasics: {};
  InterpolateWithScroll: {};
  InterpolateColours: {};
  PinchBasics: {};
  AnimateOnDoubleTap: {};
  ScrollWithPanGesture: {};
  ColourPicker: {};
  CircularProgressBar: {};
  SwipeToDelete: {};
  RippleEffect: {};
  PerspectiveMenu: {};
  SlidingCounter: {};
  ClockLoader: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
