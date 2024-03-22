import React, { memo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from '../components/BottomSheet';

const GestureHandlerScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.title}>Gesture Handler Screen!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsVisible(true)}
        >
          <Text style={styles.buttonText}>Open Bottom Sheet</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <BottomSheet isVisible={isVisible} onClose={onClose} />
    </>
  );
};

type Style = {
  wrapper: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<Style>({
  wrapper: {
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
