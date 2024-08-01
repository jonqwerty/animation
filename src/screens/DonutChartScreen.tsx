import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PieChart} from '../components/PieChart';

const DonutChartScreen = () => {
  return (
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
      <PieChart />
    </View>
  );
};

export default DonutChartScreen;

const styles = StyleSheet.create({});
