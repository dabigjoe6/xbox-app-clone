import React from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";

const JumpBackIn = ({ games }) => {
  const renderFriend = ({ item: game }) => {
    return <Image source={{ uri: game.screenshots[1] }} style={styles.image} />;
  };

  return (
    <FlatList
      style={{ maxHeight: 155 }}
      horizontal
      data={games}
      renderItem={renderFriend}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    marginBottom: 20,
    borderRadius: 6,
    marginHorizontal: 15,
  },
});
export default JumpBackIn;
