import React, { useRef } from "react";
import { View, StyleSheet, Animated, StatusBar, Dimensions } from "react-native";
import {
  AnimatedHeader,
  UserGames,
  FriendsList,
  Header,
  JumpBackIn,
  Popular,
} from "../components";
import gamesData from "../assets/games.json";
import friendsData from "../assets/friends.json";

const GAMES = gamesData.games;
const FRIENDS = friendsData.friends;

const WINDOW_HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <AnimatedHeader scroll={scroll} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true }
        )}
      >
        <UserGames games={GAMES} />
        <Header title="Active Friends" action="See all" />
        <FriendsList friends={FRIENDS} />
        <Header title="Jump back in" />
        <JumpBackIn games={GAMES} />
        <Header title="Popular with friends" />
        <Popular games={GAMES} friends={FRIENDS} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  barStyle: {
    backgroundColor: "transparent",
  },
});
export default HomeScreen;
