import {RouteProp} from '@react-navigation/native';
import {TextInputProps, TextStyle} from 'react-native';

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
  AnimatedBarChart = 'AnimatedBarChart',
  LoaderSkia = 'LoaderSkia',
  ScratchCard = 'ScratchCard',
  ToastMessage = 'ToastMessage',
  AnimatedInputField = 'AnimatedInputField',
  Animated3DBluredCard = 'Animated3DBluredCard',
  CustomSwitcher = 'CustomSwitcher',
  BlurCards = 'BlurCards',
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
  AnimatedBarChart: {};
  LoaderSkia: {};
  ScratchCard: {};
  ToastMessage: {};
  AnimatedInputField: {};
  Animated3DBluredCard: {};
  CustomSwitcher: {};
  BlurCards: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export enum variantEnum {
  outlined = 'outlined',
  standard = 'standard',
}

export interface AnimationTextInputMethods {
  focus: () => void;
  blur: () => void;
  isFocused: Boolean;
  clear: () => void;
}

export interface AnimationTextInputProps extends TextInputProps {
  placeholder?: string;
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
  trailingIcon?: JSX.Element;
  characterCount?: number;
  characterCountFontSize?: number;
  characterCountColor?: string;
  assistiveText?: string;
  assistiveTextFontSize?: number;
  assistiveTextColor?: string;
  assistiveFontFamily?: string;
  errorFontSize?: number;
  errorFontFamily?: string;
  error?: string;
  errorColor?: string;
  assistiveTextStyle?: TextStyle;
  errorStyle?: TextStyle;
  counterTextStyle?: TextStyle;
  variant?: 'outlined' | 'standard';
}
