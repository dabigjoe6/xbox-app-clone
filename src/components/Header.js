import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = ({ title, action }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: '100%',
    marginVertical: 20,
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  action: {
    color: "grey",
    fontSize: 14,
    marginBottom: 0
  },
});
export default Header;
