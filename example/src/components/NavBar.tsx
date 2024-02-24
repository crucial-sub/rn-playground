import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArrowBack from '../assets/images/arrow-back.svg';

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
        <ArrowBack />
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
    paddingHorizontal: 20,
  },
  button: {
    width: 25,
    height: 25,
  },
  leftButton: {
    marginLeft: 15,
  },
  rightButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
