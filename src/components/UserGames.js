import React, { useRef } from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const UserGames = ({ games }) => {
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <>
      {games.map((game, index) => {
        return (
          <Animated.Image
            key={index}
            source={{ uri: game.screenshots[0] }}
            blurRadius={20}
            style={{
              ...styles.background,
              opacity: scroll.interpolate({
                inputRange: [(index - 1) * 315, index * 315, (index + 1) * 315],
                outputRange: [0, 1, 0],
              }),
            }}
          />
        );
      })}

      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", "#222"]}
        style={styles.backgroundOverlay}
      />

      <Animated.ScrollView
        horizontal
        style={{ maxHeight: 420}}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scroll } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={315}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {games.map((game) => {
          return (<View key={game.id} style={styles.game}>
            <ImageBackground
              source={{ uri: game.screenshots[0] }}
              style={styles.cover}
            >
              <LinearGradient
                style={styles.overlay}
                colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
              >
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.editor}>{game.editor}</Text>
              </LinearGradient>
            </ImageBackground>
          </View>)
        })}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 120,
    paddingBottom: 15,
    paddingLeft: 15,
    height: 400,
    maxHeight: 400,
  },
  game: {
    marginRight: 15,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    maxHeight: 300,
  },
  cover: {
    height: 300,
    maxHeight: 300,
    width: 300,
    borderRadius: 6,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 15,
    maxHeight: 300,
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 42,
  },
  editor: {
    color: "white",
  },
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 400,
    maxHeight: 400,
    zIndex: 0,
    left: 0,
    right: 0,
  },
  backgroundOverlay: {
    height: 400,
    maxHeight: 400,
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    width: "100%",
  },
});

export default UserGames;
