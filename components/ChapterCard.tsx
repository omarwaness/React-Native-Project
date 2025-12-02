import { View, Text } from "react-native";
import React from "react";

export default function ChapterCard({ title, order }: { title: string; order: number }) {
  return (
    <View className="bg-white p-3 border-gray-200 border-2 border-b-4 rounded-3xl mb-3">
      <Text className="text-sm text-violet-500 font-semibold text-center">CHAPTER {order}</Text>
      <Text className="text-xl font-semibold text-center">{title}</Text>
    </View>
  );
}
