import {RouteProp} from '@react-navigation/native';

export enum Screen {
  List = 'List',
  GestureBtn = 'GestureBtn',
  SegmentBtn = 'SegmentBtn',
  CustomTouchable = 'CustomTouchable',
  StackedCards = 'StackedCards',
}

export type RootStackParamList = {
  List: {};
  GestureBtn: {};
  SegmentBtn: {};
  CustomTouchable: {};
  StackedCards: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
