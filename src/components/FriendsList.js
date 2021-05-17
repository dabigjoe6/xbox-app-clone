import React from "react";
import { FlatList, View, StyleSheet, Image, Text} from "react-native";

const FriendsList = ({ friends }) => {

  const renderFriend = ({item: friend}) => {
    console.log('friend', friend)
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: friend.picture }} style={styles.image} />
          <View style={styles.online} />
        </View>
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.currentGame}>{friend.currentGame}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={{ height: 155,  }}
      horizontal
      data={friends}
      renderItem={renderFriend}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 130,
    height: 150,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#444'
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20
  },
  online: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    bottom: 20,
    right: 10,
    backgroundColor: "green",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  },
  currentGame: {
    fontSize: 11,
    color: "grey",
    textAlign: 'center'
  },
});
export default FriendsList;
