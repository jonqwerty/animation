import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const ListScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
      <Text
        onPress={() => {
          navigation.navigate('SegmentBtn');
        }}>
        SegmentedControl
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('CustomTouchable');
        }}>
        CustomTouchable
      </Text>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
