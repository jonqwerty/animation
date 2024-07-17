import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';

import SegmentedControl from '../components/SegmentedControl';

const options = ['Light', 'Standart', 'Pro'];

const SegmentBtnScreen: FC = () => {
  const [selectedOption, setSelectedOption] = useState('Standart');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        animated={true}
        backgroundColor={'#56dfda'}
        barStyle={'default'}
      />
      <View>
        <SegmentedControl
          options={options}
          selectedOption={selectedOption}
          onOptionPress={setSelectedOption}
        />
      </View>
    </View>
  );
};

export default SegmentBtnScreen;

const styles = StyleSheet.create({});
