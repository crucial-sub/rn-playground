import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import type { AnimationPlaygroundStackNavigationProp } from '../../navigation/AnimationPlaygroundStackNavigator';

const AnimationPlaygroundScreen = () => {
  const navigation = useNavigation<AnimationPlaygroundStackNavigationProp>();

  const handlePressCustomTransitionScreen = () => {
    navigation.navigate('LayoutAnimationScreen');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <NavBar title="animations" />

      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff3ebb' }]}
          onPress={handlePressCustomTransitionScreen}
        >
          <Text>LayoutAnimationScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimationPlaygroundScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
});
