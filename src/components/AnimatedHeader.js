import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import ButtonIcon from "./ButtonIcon";
import Icon from "./Icon";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const AnimatedHeader = ({scroll}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 15 }}>
      <AnimatedBlurView intensity={100} tint="dark" style={{...StyleSheet.absoluteFill, opacity: scroll.interpolate({
        inputRange: [0, 50],
      outputRange: [0, 1]
      })}} />
      <View style={styles.headerLeft}>
        <Icon name="logo-xbox" size={28} color="white" />
      </View>
      <View style={styles.headerRight}>
        <ButtonIcon style={styles.wifiIcon} name="wifi-outline" />
        <ButtonIcon name="notifications-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 15,
    flexDirection: "row",
    zIndex: 1,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
  },
  wifiIcon: {
    marginRight: 15,
  },
});

export default AnimatedHeader;
