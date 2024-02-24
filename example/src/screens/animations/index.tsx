import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import type { AnimationPlaygroundStackNavigationProp } from '../../navigation/AnimationPlaygroundStackNavigator';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimationPlaygroundScreen = () => {
  const navigation = useNavigation<AnimationPlaygroundStackNavigationProp>();

  const handlePressCustomTransitionScreen = () => {
    navigation.navigate('CustomTransitionScreen');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ff3ebb' }]}
        onPress={handlePressCustomTransitionScreen}
      >
        <Text>CustomTransitionScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AnimationPlaygroundScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
});
