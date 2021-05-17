import React from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";

const Popular = ({ friends, games }) => {
  const renderFriend = ({ item: game }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: game.screenshots[2] }} style={styles.image} />

        <View style={styles.wrapper}>
          <Text style={styles.text}>4 friends play</Text>
          <View style={styles.friends}>
            {friends.slice(0, 4).map((friend) => (
              <Image key={friend.id} style={styles.friendImg} source={{ uri: friend.picture }} />
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={{ maxHeight: 500 }}
      horizontal
      data={games}
      renderItem={renderFriend}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 220,

    borderRadius: 6,
    marginHorizontal: 15,
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 5,
  },
  image: {
    height: 120,
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 15,
  },
  wrapper: {
    height: 150,
    width: 150,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  text: {
    color: "grey",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  friendImg: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginRight: -5
  },
  friends: {
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
});
export default Popular;
