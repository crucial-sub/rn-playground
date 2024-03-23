import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListViewScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>ListViewScreen</Text>
    </View>
  );
};

export default ListViewScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
