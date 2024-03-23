import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  showNavBar?: boolean;
  navTitle?: string;
  onPressBack?: () => void;
}

const ScreenWrapper = (props: Props) => {
  const {
    children,
    style,
    showNavBar = true,
    navTitle = '',
    onPressBack,
  } = props;

  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      {showNavBar !== undefined && (
        <NavBar title={navTitle} onPressBack={onPressBack} />
      )}
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

type Style = {
  wrapper: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  wrapper: {
    flex: 1,
  },
});
