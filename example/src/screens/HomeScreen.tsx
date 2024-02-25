import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { RootStackNavigationProp } from './MainScreen';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPressFlatListButton = () => {
    navigation.navigate('MainStack', {
      screen: 'FlatListScreen',
    });
  };

  const onPressSectionListButton = () => {
    navigation.navigate('MainStack', {
      screen: 'SectionListScreen',
    });
  };

  const onPressAnimationPlaygroundButton = () => {
    navigation.navigate('MainStack', {
      screen: 'AnimationPlaygroundStack',
    });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#58C9B9' }]}
        onPress={onPressFlatListButton}
      >
        <Text>FlatList Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#D1B6E1' }]}
        onPress={onPressSectionListButton}
      >
        <Text>SectionList Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3e92ff' }]}
        onPress={onPressAnimationPlaygroundButton}
      >
        <Text>AnimationPlayground Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
});
