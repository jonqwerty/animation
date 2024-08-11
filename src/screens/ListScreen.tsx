import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screen} from '../common/types';

const ListScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
      <Text style={{fontSize: 30, marginBottom: 10}}>Gestures</Text>
      <Text
        onPress={() => {
          navigation.navigate(Screen.GestyreBasics, {});
        }}>
        GestureBasics
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(Screen.GestureBtn, {});
        }}>
        GestureBtn
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(Screen.SegmentBtn, {});
        }}>
        SegmentedControl
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(Screen.CustomTouchable, {});
        }}>
        CustomTouchable
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(Screen.Animated3DCard, {});
        }}>
        Animated3DCard
      </Text>

      <Text style={{fontSize: 30, marginVertical: 10}}>Animations</Text>

      <Text
        onPress={() => {
          navigation.navigate(Screen.StackedCards, {});
        }}>
        StackedCards
      </Text>

      <Text
        onPress={() => {
          navigation.navigate(Screen.DonutChart, {});
        }}>
        DonutChart
      </Text>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
