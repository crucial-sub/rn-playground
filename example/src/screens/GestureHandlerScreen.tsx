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

const GestureHandlerScreen = () => {
  const { setIsOpened } = useBottomSheetStore();

  const onOpen = () => {
    setIsOpened(true);
  };

  return (
    <>
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.title}>Gesture Handler Screen!</Text>

          <TouchableOpacity style={styles.button} onPress={onOpen}>
            <Text style={styles.buttonText}>Open Bottom Sheet</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    </>
  );
};

type Style = {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ff3ebb',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
});

export default memo(GestureHandlerScreen);
