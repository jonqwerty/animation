import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
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
        barStyle={'dark-content'}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 34, fontWeight: 'bold', marginVertical: 10}}>
          Gestures
        </Text>

        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.CustomTouchable, {});
          }}>
          CustomTouchable
        </Text>

        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.GestyreBasics, {});
          }}>
          GestureBasics
        </Text>

        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.InterpolateWithScroll, {});
          }}>
          InterpolateWithScroll
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.InterpolateColours, {});
          }}>
          InterpolateColours
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.PinchBasics, {});
          }}>
          PinchBasics
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.AnimateOnDoubleTap, {});
          }}>
          AnimateOnDoubleTap
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ScrollWithPanGesture, {});
          }}>
          ScrollWithPanGesture
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ColourPicker, {});
          }}>
          ColourPicker
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.CircularProgressBar, {});
          }}>
          CircularProgressBar
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.SwipeToDelete, {});
          }}>
          SwipeToDelete
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.RippleEffect, {});
          }}>
          RippleEffect
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.PerspectiveMenu, {});
          }}>
          PerspectiveMenu
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.SlidingCounter, {});
          }}>
          SlidingCounter
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ClockLoader, {});
          }}>
          ClockLoader
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.MagicScrollLayout, {});
          }}>
          MagicScrollLayout
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.AnimatedFlatList, {});
          }}>
          AnimatedFlatList
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.DropdownMenu, {});
          }}>
          DropdownMenu
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.CircularCarousel, {});
          }}>
          CircularCarousel
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.MotiSkeletone, {});
          }}>
          MotiSkeletone
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ShakeAnimation, {});
          }}>
          ShakeAnimation
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.SplitButton, {});
          }}>
          SplitButton
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.CheckboxInteractions, {});
          }}>
          CheckboxInteractions
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.PerDotsAnimation, {});
          }}>
          PerDotsAnimation
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.PerDotsAnimation, {});
          }}>
          PerDotsAnimation
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.AnimatedBarChart, {});
          }}>
          AnimatedBarChart
        </Text>

        <Text style={{fontSize: 34, fontWeight: 'bold', marginVertical: 10}}>
          Animations
        </Text>

        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.GestureBtn, {});
          }}>
          GestureBtn
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.SegmentBtn, {});
          }}>
          SegmentedControl
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.StackedCards, {});
          }}>
          StackedCards
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.DonutChart, {});
          }}>
          DonutChart
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.StoryList, {});
          }}>
          StoryList
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ToastMessage, {});
          }}>
          ToastMessage
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.AnimatedInputField, {});
          }}>
          AnimatedInputField
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.CustomSwitcher, {});
          }}>
          CustomSwitcher
        </Text>

        <Text style={{fontSize: 34, fontWeight: 'bold', marginVertical: 10}}>
          Skia
        </Text>

        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.Metaball, {});
          }}>
          Metaball Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.GridMagnification, {});
          }}>
          GridMagnification Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.AnimatedGradient, {});
          }}>
          AnimatedGradient Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.LoaderSkia, {});
          }}>
          Loader Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.ScratchCard, {});
          }}>
          ScratchCard Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.Animated3DCard, {});
          }}>
          Animated3DCard
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.Animated3DBluredCard, {});
          }}>
          Animated3DBluredCard Skia
        </Text>
        <Text
          style={styles.item}
          onPress={() => {
            navigation.navigate(Screen.BlurCards, {});
          }}>
          Blur cards
        </Text>
      </ScrollView>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    borderWidth: 2,
    borderColor: 'rgba(0,0,250,0.2)',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 4,
  },
});
