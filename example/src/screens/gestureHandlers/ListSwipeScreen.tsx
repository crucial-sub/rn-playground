import React from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import ScreenWrapper from '../../components/ScreenWrapper';
import View from '../../components/View';
import { Colors } from '../../lib/styles/colors';

type AnimatedInterpolation = ReturnType<Animated.Value['interpolate']>;

interface ChatRoom {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageAt: string;
}

const DUMMY_CHAT_ROOMS = [
  {
    id: 1,
    name: 'David',
    lastMessage: 'How are you doing?',
    lastMessageAt: '2024.03.30',
  },
  {
    id: 2,
    name: 'Jimmy',
    lastMessage: 'See ya :)',
    lastMessageAt: '2024.03.30',
  },
  {
    id: 3,
    name: 'Chris',
    lastMessage: 'OK, I will be there soon.',
    lastMessageAt: '2024.03.29',
  },
  {
    id: 4,
    name: 'Angelina',
    lastMessage: 'Thanks, Keep in touch!',
    lastMessageAt: '2024.03.29',
  },
  {
    id: 5,
    name: 'Peter Kim',
    lastMessage: 'sup bro? how are you doing these days?',
    lastMessageAt: '2024.03.29',
  },
];

const ListSwipeScreen = () => {
  const [chatRooms, setChatRooms] =
    React.useState<ChatRoom[]>(DUMMY_CHAT_ROOMS);
  const renderRightActions = React.useCallback(
    (
      progress: AnimatedInterpolation,
      dragX: AnimatedInterpolation,
      targetId: number
    ) => {
      const handlePressDelete = () => {
        setChatRooms((prev) => prev.filter((room) => room.id !== targetId));
      };

      return (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handlePressDelete}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      );
    },
    []
  );

  const renderItem = React.useCallback(({ item }: { item: ChatRoom }) => {
    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, item.id)
        }
      >
        <View style={styles.list}>
          <View style={styles.avatar} />
          <View style={styles.listContent}>
            <Text>{item.name}</Text>
            <Text numberOfLines={1}>{item.lastMessage}</Text>
          </View>

          <Text style={styles.lastMessageAt}>{item.lastMessageAt}</Text>
        </View>
      </Swipeable>
    );
  }, []);

  const keyExtractor = React.useCallback(
    (item: ChatRoom) => `chat-room-${item.id}`,
    []
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={chatRooms}
          contentContainerStyle={styles.flatList}
          renderItem={renderItem}
          ListHeaderComponent={
            <Text style={styles.title}>ListSwipeScreen</Text>
          }
          keyExtractor={keyExtractor}
        />
      </View>
    </ScreenWrapper>
  );
};

export default React.memo(ListSwipeScreen);

const styles = StyleSheet.create({
  container: {},
  flatList: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    gap: 15,
    paddingHorizontal: 20,
  },
  listContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.gray,
  },
  lastMessageAt: {
    fontSize: 12,
    color: Colors.gray,
  },
  deleteButton: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E53A40',
  },
  deleteText: {
    fontWeight: '500',
    color: '#fff',
  },
});
