import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "800" },
        tabBarActiveTintColor: "black",
        headerShown: false,
        animation: "fade",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Manage",
          tabBarIcon: ({ color, size }) => (
            <Feather name="layers" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "Users",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
