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
  MagicScrollLayout = 'MagicScrollLayout',
  AnimatedFlatList = 'AnimatedFlatList',
  DropdownMenu = 'DropdownMenu',
  CircularCarousel = 'CircularCarousel',
  MotiSkeletone = 'MotiSkeletone',
  ShakeAnimation = 'ShakeAnimation',
  SplitButton = 'SplitButton',
  CheckboxInteractions = 'CheckboxInteractions',
  StoryList = 'StoryList',
  Metaball = 'Metaball',
  GridMagnification = 'GridMagnification',
  AnimatedGradient = 'AnimatedGradient',
  PerDotsAnimation = 'PerDotsAnimation',
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
  MagicScrollLayout: {};
  AnimatedFlatList: {};
  DropdownMenu: {};
  CircularCarousel: {};
  MotiSkeletone: {};
  ShakeAnimation: {};
  SplitButton: {};
  CheckboxInteractions: {};
  StoryList: {};
  Metaball: {};
  GridMagnification: {};
  AnimatedGradient: {};
  PerDotsAnimation: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
