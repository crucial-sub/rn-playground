import React from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default React.memo(NotificationScreen);

type Styles = {
  wrapper: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flex: 1,
  },
});
