import {
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import UserCard from "@/components/UserCard";

const users = [
  { id: "1", name: "John Doe", progress: 12 },
  { id: "2", name: "Sarah Smith", progress: 45 },
  { id: "3", name: "Michael Brown", progress: 78 },
  { id: "4", name: "Emily Johnson", progress: 23 },
  { id: "5", name: "David Wilson", progress: 90 },
  { id: "6", name: "Sophia Martinez", progress: 54 },
  { id: "7", name: "Daniel Anderson", progress: 31 },
  { id: "8", name: "Olivia Taylor", progress: 66 },
  { id: "9", name: "James Lee", progress: 10 },
  { id: "10", name: "Ava Harris", progress: 88 },
];

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const numberOfUsers = filteredUsers.length;

  return (
    <SafeAreaView className="flex-1 bg-white p-5 pb-0" edges={["top"]}>
      <View className="mb-4 mt-2 flex-row justify-between items-center">
        <Text className="text-2xl font-extrabold">USERS LIST</Text>
        <Text className="text-base font-bold bg-gray-100 px-3 py-1 rounded-xl">
          {numberOfUsers}
        </Text>
      </View>

      <View className="flex-row items-center bg-gray-100 px-4 rounded-full mb-4">
        <Feather name="search" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#6b7280"
          className="flex-1 ml-3 text-lg"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View className="rounded-3xl overflow-hidden flex-1">
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCard name={item.name} progress={item.progress} />
          )}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
        />
      </View>
    </SafeAreaView>
  );
}
