import React from "react";
import { StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";

import { HomeScreen, EmptyScreen } from "../screens";
import { Icon } from "../components";
const Tab = createBottomTabNavigator();

const BlurryBottomBar = (props) => {
  return (
    <BlurView intensity={100} tint="dark" style={styles.blurView}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const ButtomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        style: styles.tabBar,
      }}
      tabBar={BlurryBottomBar}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "people" : "people-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        name="Friends"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "search" : "search-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        name="Search"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "library" : "library-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        name="Library"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        name="Account"
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    paddingBottom: 0,
    borderRadius: 40,
    backgroundColor: "transparent",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    paddingBottom: 0,
  },
  blurView: {
    position: "absolute",
    bottom: 10,
    right: 20,
    left: 20,
    borderRadius: 40,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
});

export default ButtomNavigator;
