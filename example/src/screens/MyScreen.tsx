import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MyScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>MyScreen</Text>
    </View>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
