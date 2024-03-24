import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BellIcon from '../assets/images/bell_icon.svg';
import ThemeIcon from '../assets/images/sun_icon.svg';
import Text from '../components/Text';
import ThemeChangeView from '../components/ThemeChangeView';
import { useBottomSheetStore } from '../stores/bottomsheet';

const SettingsScreen = () => {
  const { showBottomSheet } = useBottomSheetStore();

  const handlePressTheme = () => {
    showBottomSheet(<ThemeChangeView />, 450);
  };

  const handlePressNotification = () => {
    console.log('Notification');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Settings</Text>

        <TouchableOpacity style={styles.button} onPress={handlePressTheme}>
          <ThemeIcon />
          <Text style={styles.buttonTitle}>Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePressNotification}
        >
          <BellIcon />
          <Text style={styles.buttonTitle}>Notification</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SettingsScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 15,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
