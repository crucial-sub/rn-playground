import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';

type Item = {
  id: string;
  title: string;
};

const ITEMS: Item[] = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  { id: '11', title: 'Item 11' },
  { id: '12', title: 'Item 12' },
  { id: '13', title: 'Item 13' },
  { id: '14', title: 'Item 14' },
  { id: '15', title: 'Item 15' },
  { id: '16', title: 'Item 16' },
  { id: '17', title: 'Item 17' },
  { id: '18', title: 'Item 18' },
  { id: '19', title: 'Item 19' },
  { id: '20', title: 'Item 20' },
  { id: '21', title: 'Item 21' },
  { id: '22', title: 'Item 22' },
  { id: '23', title: 'Item 23' },
  { id: '24', title: 'Item 24' },
  { id: '25', title: 'Item 25' },
  { id: '26', title: 'Item 26' },
  { id: '27', title: 'Item 27' },
  { id: '28', title: 'Item 28' },
  { id: '29', title: 'Item 29' },
  { id: '30', title: 'Item 30' },
  { id: '31', title: 'Item 31' },
  { id: '32', title: 'Item 32' },
  { id: '33', title: 'Item 33' },
  { id: '34', title: 'Item 34' },
  { id: '35', title: 'Item 35' },
];

const FlatListScreen = () => {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Item) => `flat-list-item-${item.id}`;

  return (
    <ScreenWrapper style={styles.wrapper} showNavBar navTitle={'FlatList'}>
      <FlatList
        style={styles.list}
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ScreenWrapper>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  list: {
    flex: 1,
    gap: 10,
  },
  contentContainer: {},
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
