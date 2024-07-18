import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {CustomTouchable} from '../components/CustomTouchable';

const CustomTouchableScreen: FC = () => {
  return (
    <View style={styles.container}>
      <CustomTouchable
        onPress={() => {
          console.log('pressed');
        }}>
        <View style={styles.squareButton} />
      </CustomTouchable>
    </View>
  );
};

export default CustomTouchableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareButton: {
    height: 150,
    aspectRatio: 1, // width: 150,
    backgroundColor: 'rgba(0,0,255,0.5)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
