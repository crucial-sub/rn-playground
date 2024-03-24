import React from 'react';
import { View as RNView, type ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const View = (props: ViewProps) => {
  const { styles } = useStyles(stylesheet);
  return (
    <RNView {...props} style={[styles.wrapper, props.style]}>
      {props.children}
    </RNView>
  );
};

export default View;

const stylesheet = createStyleSheet((theme) => ({
  wrapper: {
    backgroundColor: theme.background.primary,
  },
}));
