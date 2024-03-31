import React from 'react';
import { Animated, FlatList, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';
import View from '../../components/View';

type AnimatedInterpolation = ReturnType<Animated.Value['interpolate']>;

interface ChatRoom {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageAt: string;
}

const DUMMY_CHAT_ROOMS: ChatRoom[] = [
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
  const { styles } = useStyles(stylesheet);
  const [chatRooms, setChatRooms] =
    React.useState<ChatRoom[]>(DUMMY_CHAT_ROOMS);

  const handlePressDelete = React.useCallback((id: number) => {
    setChatRooms((prev) => prev.filter((room) => room.id !== id));
  }, []);

  const renderRightActions = React.useCallback(
    (
      _: AnimatedInterpolation,
      dragX: AnimatedInterpolation,
      targetId: number
    ) => {
      const opacity = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
      });

      return (
        <Animated.View style={[styles.deleteButton]}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => handlePressDelete(targetId)}
          >
            <Animated.Text style={[styles.deleteText, { opacity }]}>
              Delete
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      );
    },
    [handlePressDelete]
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
          ListHeaderComponent={<Text style={styles.title}>ChatRooms</Text>}
          keyExtractor={keyExtractor}
        />
      </View>
    </ScreenWrapper>
  );
};

export default React.memo(ListSwipeScreen);

const stylesheet = createStyleSheet((theme) => ({
  container: {},
  flatList: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: '700',
    color: theme.text.primary,
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
    color: theme.text.primary,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.text.secondary,
  },
  lastMessageAt: {
    fontSize: 12,
    color: theme.text.secondary,
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
}));
