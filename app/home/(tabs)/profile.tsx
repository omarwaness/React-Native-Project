import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function Profile() {
  const name = "User";

  const settings = [
    { id: "1", title: "Account", icon: "user" },
    { id: "3", title: "Privacy", icon: "lock" },
    { id: "2", title: "Notifications", icon: "bell" },
    { id: "4", title: "Help", icon: "help-circle" },
    { id: "5", title: "About", icon: "info" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="flex-row items-center mb-8">
        <View className="w-16 h-16 bg-violet-500 rounded-full items-center justify-center">
          <Text className="text-3xl font-bold text-white">{name[0]}</Text>
        </View>

        <View className="ml-4">
          <Text className="text-3xl font-bold">{name}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {settings.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center justify-between bg-gray-100 p-4 rounded-2xl mb-4"
          >
            <View className="flex-row items-center">
              <Feather name={item.icon as any} size={22} color="" className="mr-4" />
              <Text className="text-lg font-semibold">{item.title}</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
