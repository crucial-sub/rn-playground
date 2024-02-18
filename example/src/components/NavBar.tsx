import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LeftChevron from '../assets/images/left-chevron.png';
import { useNavigation } from '@react-navigation/native';

interface NavBarProps {
  onPressBack?: () => void;
  title?: string;
}

const NavBar = ({ onPressBack, title }: NavBarProps) => {
  const navigation = useNavigation();

  const handlePressBack = () => {
    if (onPressBack) {
      onPressBack();
    }

    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePressBack}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <Image
          style={[styles.button, styles.leftButton]}
          source={LeftChevron}
        />
      </TouchableOpacity>

      {title?.length && <Text style={styles.title}>{title}</Text>}

      <View style={[styles.button, styles.rightButton]} />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 24,
    height: 24,
  },
  leftButton: {
    marginLeft: 15,
  },
  rightButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});
