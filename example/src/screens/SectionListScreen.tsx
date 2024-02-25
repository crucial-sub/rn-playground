import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

type ItemType = {
  id: string;
  name: string;
};

type SectionType = {
  title: string;
  data: ItemType[];
};

const ITEMS: ItemType[] = [
  { id: '1', name: 'Abraham' },
  { id: '2', name: 'Bred' },
  { id: '3', name: 'Carson' },
  { id: '4', name: 'Charles' },
  { id: '5', name: 'Jim' },
  { id: '6', name: 'Avery' },
  { id: '7', name: 'Heidi' },
  { id: '8', name: 'Harry' },
  { id: '9', name: 'Ron' },
  { id: '10', name: 'Jeremy' },
  { id: '11', name: 'Micheal' },
  { id: '12', name: 'John' },
  { id: '13', name: 'Kane' },
  { id: '14', name: 'Jane' },
  { id: '15', name: 'Sterling' },
  { id: '16', name: 'Jack' },
  { id: '17', name: 'Sam' },
  { id: '18', name: 'Mac' },
  { id: '19', name: 'David' },
  { id: '20', name: 'Dave' },
  { id: '21', name: 'Donny' },
  { id: '22', name: 'Palmer' },
  { id: '23', name: 'Patrick' },
  { id: '24', name: 'Kay' },
  { id: '25', name: 'Kim' },
  { id: '26', name: 'Hoon' },
  { id: '27', name: 'Clark' },
  { id: '28', name: 'Wayne' },
  { id: '29', name: 'Wood' },
  { id: '30', name: 'Bernard' },
  { id: '31', name: 'Eric' },
  { id: '32', name: 'Emily' },
  { id: '33', name: 'Frank' },
  { id: '34', name: 'Foster' },
  { id: '35', name: 'Elena' },
];

const SectionListScreen = () => {
  const sections: SectionType[] = React.useMemo(() => {
    const nameObject: Record<string, ItemType[]> = {};

    ITEMS.forEach((item) => {
      const firstLetter = item.name[0];

      if (!firstLetter) return;

      if (!nameObject[firstLetter]) {
        nameObject[firstLetter] = [item];
      } else {
        nameObject[firstLetter]!.push(item);
      }
    });

    return Object.entries(nameObject).map(([title, data]) => ({
      title,
      data,
    }));
  }, []);

  const keyExtractor = (item: ItemType) => `section-list-item-${item.id}`;

  const renderItem = ({ item }: { item: ItemType }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }: { section: SectionType }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <NavBar title="SectionList" />
      <SectionList
        sections={sections}
        style={styles.list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  sectionHeader: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
});
