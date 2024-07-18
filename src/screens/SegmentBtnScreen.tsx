import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';

import SegmentedControl from '../components/SegmentedControl';

const options = ['Light', 'Standart', 'Pro'];

const SegmentBtnScreen: FC = () => {
  const [selectedOption, setSelectedOption] = useState('Standart');

  return (
    <View style={styles.container}>
      <SegmentedControl
        options={options}
        selectedOption={selectedOption}
        onOptionPress={setSelectedOption}
      />
    </View>
  );
};

export default SegmentBtnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
