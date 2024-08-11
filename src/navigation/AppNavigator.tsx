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

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default AppNavigator;
