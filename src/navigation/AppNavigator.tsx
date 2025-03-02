import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SegmentBtnScreen from '../screens/SegmentBtnScreen';
import CustomTouchableScreen from '../screens/CustomTouchableScreen';
import ListScreen from '../screens/ListScreen';
import GestureBtnScreen from '../screens/GestureBtnScreen';
import StackedCardsScreen from '../screens/StackedCardsScreen';
import Animated3DCardScreen from '../screens/Animated3DCardScreen';
import DonutChartScreen from '../screens/DonutChartScreen';
import GestyreBasicsScreen from '../screens/GestyreBasicsScreen';
import InterpolateWithScrollScreen from '../screens/InterpolateWithScrollScreen';
import InterpolateColoursScreen from '../screens/InterpolateColoursScreen';
import PinchBasicsScreen from '../screens/PinchBasicsScreen';
import AnimateOnDoubleTapScreen from '../screens/AnimateOnDoubleTapScreen';
import ScrollWithPanGestureScreen from '../screens/ScrollWithPanGestureScreen';
import ColourPickerScreen from '../screens/ColourPickerScreen';
import CircularProgressBarScreen from '../screens/CircularProgressBarScreen';
import SwipeToDeleteScreen from '../screens/SwipeToDeleteScreen';
import RippleEffectScreen from '../screens/RippleEffectScreen';
import PerspectiveMenuScreen from '../screens/PerspectiveMenuScreen';
import SlidingCounterScreen from '../screens/SlidingCounterScreen';
import ClockLoaderScreen from '../screens/ClockLoaderScreen';
import MagicScrollLayoutScreen from '../screens/MagicScrollLayoutScreen';
import AnimatedFlatListScreen from '../screens/AnimatedFlatListScreen';
import DropdownMenuScreen from '../screens/DropdownMenuScreen';
import CircularCarouselScreen from '../screens/CircularCarouselScreen';
import MotiSkeletoneScreen from '../screens/MotiSkeletoneScreen';
import ShakeAnimationScreen from '../screens/ShakeAnimationScreen';
import SplitButtonScreen from '../screens/SplitButtonScreen';
import CheckboxInteractionsScreen from '../screens/CheckboxInteractionsScreen';
import StoryListScreen from '../screens/StoryListScreen';
import MetaballScreen from '../screens/MetaballScreen';
import GridMagnificationScreen from '../screens/GridMagnificationScreen';
import AnimatedGradientScreen from '../screens/AnimatedGradientScreen';
import PerDotsAnimationScreen from '../screens/PerDotsAnimationScreen';
import AnimatedBarChartScreen from '../screens/AnimatedBarChartScreen';
import LoaderSkiaScreen from '../screens/LoaderSkiaScreen';
import ScratchCardScreen from '../screens/ScratchCardScreen';
import ToastMessageScreen from '../screens/ToastMessageScreen';
import AnimatedInputFieldScreen from '../screens/AnimatedInputFieldScreen';
import Animated3DBluredCardScreen from '../screens/Animated3DBluredCardScreen';
import CustomSwitcherScreen from '../screens/CustomSwitcherScreen';
import BlurCardsScreen from '../screens/BlurCardsScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="GestureBtn"
        component={GestureBtnScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="SegmentBtn"
        component={SegmentBtnScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="CustomTouchable"
        component={CustomTouchableScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="Animated3DCard"
        component={Animated3DCardScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="StackedCards"
        component={StackedCardsScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="DonutChart"
        component={DonutChartScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="GestyreBasics"
        component={GestyreBasicsScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="InterpolateWithScroll"
        component={InterpolateWithScrollScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="InterpolateColours"
        component={InterpolateColoursScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="PinchBasics"
        component={PinchBasicsScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="AnimateOnDoubleTap"
        component={AnimateOnDoubleTapScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ScrollWithPanGesture"
        component={ScrollWithPanGestureScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ColourPicker"
        component={ColourPickerScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="CircularProgressBar"
        component={CircularProgressBarScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="SwipeToDelete"
        component={SwipeToDeleteScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="RippleEffect"
        component={RippleEffectScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="PerspectiveMenu"
        component={PerspectiveMenuScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="SlidingCounter"
        component={SlidingCounterScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ClockLoader"
        component={ClockLoaderScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="MagicScrollLayout"
        component={MagicScrollLayoutScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="AnimatedFlatList"
        component={AnimatedFlatListScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="DropdownMenu"
        component={DropdownMenuScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="CircularCarousel"
        component={CircularCarouselScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="MotiSkeletone"
        component={MotiSkeletoneScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ShakeAnimation"
        component={ShakeAnimationScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="SplitButton"
        component={SplitButtonScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="CheckboxInteractions"
        component={CheckboxInteractionsScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="StoryList"
        component={StoryListScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="Metaball"
        component={MetaballScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="GridMagnification"
        component={GridMagnificationScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="AnimatedGradient"
        component={AnimatedGradientScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="PerDotsAnimation"
        component={PerDotsAnimationScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="AnimatedBarChart"
        component={AnimatedBarChartScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="LoaderSkia"
        component={LoaderSkiaScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ScratchCard"
        component={ScratchCardScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="ToastMessage"
        component={ToastMessageScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="AnimatedInputField"
        component={AnimatedInputFieldScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="Animated3DBluredCard"
        component={Animated3DBluredCardScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="CustomSwitcher"
        component={CustomSwitcherScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
      <Stack.Screen
        name="BlurCards"
        component={BlurCardsScreen}
        options={
          {
            // gestureEnabled: false,
            // animation: 'none',
          }
        }
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const linking = {
    prefixes: ['animationexamplesx://'],
    config: {
      screens: {
        ScratchCard: 'scratchcard',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Routes />
    </NavigationContainer>
  );
};

export default AppNavigator;
