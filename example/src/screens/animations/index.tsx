import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';
import type { AnimationStackNavigationProp } from '../../navigation/mainStack/AnimationStackNavigator';

const AnimationPlaygroundScreen = () => {
  const navigation = useNavigation<AnimationStackNavigationProp>();

  const handlePressCustomTransitionScreen = () => {
    navigation.navigate('LayoutAnimationScreen');
  };

  return (
    <ScreenWrapper style={styles.wrapper} showNavBar navTitle={'Animations'}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff3ebb' }]}
          onPress={handlePressCustomTransitionScreen}
        >
          <Text>LayoutAnimationScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AnimationPlaygroundScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    gap: 20,
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
