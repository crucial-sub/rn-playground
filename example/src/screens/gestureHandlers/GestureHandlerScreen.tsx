import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';
import { Colors } from '../../lib/styles/colors';
import type {
  GestureHandlerStackNavigationProp,
  GestureHandlerStackParamList,
} from '../../navigation/mainStack/GestureHandlerStackNavigator';

const GestureHandlerScreen = () => {
  const navigation = useNavigation<GestureHandlerStackNavigationProp>();

  const onPressList = (screen: keyof GestureHandlerStackParamList) => {
    switch (screen) {
      case 'ResizableBottomSheet':
        navigation.navigate('ResizableBottomSheet');
        break;
      case 'ListSwipeScreen':
        navigation.navigate('ListSwipeScreen');
        break;
      case 'CarouselScreen':
        navigation.navigate('CarouselScreen');
        break;
      default:
        break;
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>Gesture Handler Playground</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressList('ResizableBottomSheet')}
        >
          <Text style={styles.buttonText}>ResizableBottomSheet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressList('ListSwipeScreen')}
        >
          <Text style={styles.buttonText}>ListSwipe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressList('CarouselScreen')}
        >
          <Text style={styles.buttonText}>Carousel</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

type Style = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.accent,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.background,
  },
});

export default memo(GestureHandlerScreen);
