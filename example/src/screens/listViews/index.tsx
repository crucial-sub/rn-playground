import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../../components/Text';
import View from '../../components/View';

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
