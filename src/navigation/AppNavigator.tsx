import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SegmentBtnScreen from '../screens/SegmentBtnScreen';
import CustomTouchableScreen from '../screens/CustomTouchableScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name="SegmentBtn"
        component={SegmentBtnScreen}
        options={{
          gestureEnabled: false,
          animation: 'none',
        }}
      /> */}
      <Stack.Screen
        name="CustomTouchable"
        component={CustomTouchableScreen}
        options={{
          gestureEnabled: false,
          animation: 'none',
        }}
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
