import React from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Text = (props: TextProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNText {...props} style={[props.style, styles.text]}>
      {props.children}
    </RNText>
  );
};

export default Text;

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.text.primary,
  },
}));
