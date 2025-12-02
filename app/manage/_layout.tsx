import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="courses"
        options={{
          title: "Manage Courses",
          headerShown: true,
          //headerSearchBarOptions: { placeholder: "Search Courses" },
        }}
      />
      <Stack.Screen
        name="chapters"
        options={{
          title: "Manage Chapters",
          headerShown: true,
          //headerSearchBarOptions: { placeholder: "Search Courses" },
        }}
      />
      <Stack.Screen
        name="quizzes"
        options={{
          title: "Manage Quizzes",
          headerShown: true,
          //headerSearchBarOptions: { placeholder: "Search Courses" },
        }}
      />
    </Stack>
  );
}
