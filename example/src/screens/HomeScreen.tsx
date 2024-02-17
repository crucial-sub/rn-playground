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

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#58C9B9' }]}
        onPress={onPressFlatListButton}
      >
        <Text>FlatList Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
});
