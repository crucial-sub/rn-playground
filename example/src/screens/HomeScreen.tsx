import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimationThumbnail from '../assets/images/animation_thumbnail.png';
import Avatar from '../assets/images/avatar.png';
import ChevronRight from '../assets/images/chevron_right.svg';
import ListViewThumbnail from '../assets/images/listview_thumbnail.png';
import Text from '../components/Text';
import View from '../components/View';
import { Colors } from '../lib/styles/colors';
import type { RootStackNavigationProp } from '../navigation/RootStackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPressFlatListButton = () => {
    navigation.navigate('MainStack', { screen: 'ListViewStack' });
  };

  const onPressAnimationPlaygroundButton = () => {
    navigation.navigate('MainStack', { screen: 'AnimationStack' });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={Avatar} style={styles.avatar} />
          <Text style={styles.headerTitle}>Hello, Hoon</Text>
        </View>

        <TouchableOpacity
          style={styles.listButton}
          onPress={onPressFlatListButton}
        >
          <Image style={styles.thumbnail} source={ListViewThumbnail} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>ListView Playground</Text>
            <Text style={styles.listDescription}>learn about ListViews</Text>
          </View>

          <ChevronRight />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listButton}
          onPress={onPressAnimationPlaygroundButton}
        >
          <Image style={styles.thumbnail} source={AnimationThumbnail} />
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>Animations Playground</Text>
            <Text style={styles.listDescription}>play with animations</Text>
          </View>

          <ChevronRight />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
    marginBottom: 24,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    marginBottom: 24,
  },
  thumbnail: {
    width: 64,
    height: 80,
    borderRadius: 12,
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 15,
    borderRadius: 12,
  },
  listTextContainer: {
    flex: 1,
    gap: 20,
    paddingVertical: 5,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  listDescription: {
    fontSize: 14,
    color: Colors.gray,
  },
});
