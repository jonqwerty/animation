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
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
