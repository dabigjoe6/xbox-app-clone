import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";

const ButtonIcon = ({ name, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Icon name={name} size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonIcon;
