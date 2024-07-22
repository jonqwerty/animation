import React, {FC, useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppNavigator from './src/navigation/AppNavigator';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      
      <SafeAreaProvider >
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
