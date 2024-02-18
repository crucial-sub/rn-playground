import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>MyScreen</Text>
    </SafeAreaView>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
