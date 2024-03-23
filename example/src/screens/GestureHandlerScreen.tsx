import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { useBottomSheetStore } from '../stores/bottomsheet';
import { Colors } from '../lib/styles/colors';
import PokeBall from '../assets/images/pokeball.svg';

const GestureHandlerScreen = () => {
  const { showBottomSheet } = useBottomSheetStore();

  const onOpen = () => {
    showBottomSheet(<PokeBall width={64} height={64} style={styles.image} />);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Gesture Handler Screen</Text>

        <TouchableOpacity style={styles.button} onPress={onOpen}>
          <Text style={styles.buttonText}>Open BottomSheet</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

type Style = {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
  image: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.background,
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default memo(GestureHandlerScreen);
