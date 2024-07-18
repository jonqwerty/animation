import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { FC } from 'react';

import GestureBtn from '../components/GestureBtn';

const GestureBtnScreen: FC = () => {
  return (
    <View style={styles.container}>
      <GestureBtn />
    </View>
  );
};

export default GestureBtnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
