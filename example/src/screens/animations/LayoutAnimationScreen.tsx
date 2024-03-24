import React from 'react';
import { FlatList, StyleSheet, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import Text from '../../components/Text';

interface Data {
  id: string;
  title: string;
}

const DATA: Data[] = Array.from({ length: 30 }, (_, i) => ({
  id: String(i),
  title: `Item ${i + 1}`,
}));

const LayoutAnimationScreen = () => {
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Data) => item.id;

  return (
    <SafeAreaView style={styles.wrapper}>
      <NavBar title="LayoutAnimation" />

      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListHeaderComponent={HeaderComponent}
        />
      </View>
    </SafeAreaView>
  );
};

const HeaderComponent = () => {
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(false);

  const handleToggleHeader = () => {
    setIsHeaderVisible((prev) => !prev);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Switch
        value={isHeaderVisible}
        style={styles.switch}
        onValueChange={handleToggleHeader}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor="#f4f3f4"
      />

      {isHeaderVisible ? (
        <View style={styles.header}>
          <Text>Header Component</Text>
        </View>
      ) : null}
    </View>
  );
};

export default LayoutAnimationScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  switch: {
    marginBottom: 20,
  },
  header: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#31D8A6',
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
});
