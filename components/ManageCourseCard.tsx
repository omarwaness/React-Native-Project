import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  name: string;
  description: string;
  chapters: number;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function ManageCourseCard({
  name,
  description,
  chapters,
  onEdit,
  onDelete,
}: Props) {
  return (
    <View className="p-5 rounded-3xl mb-5 shadow-md bg-white m-1">
      <Text className="text-xl font-bold">{name}</Text>
      <Text className="text-gray-500 mt-1">{description}</Text>
      <Text className="mt-2 font-semibold text-gray-500">
        Chapters: {chapters}
      </Text>

      <View className="flex-row justify-end gap-2">
        <TouchableOpacity
          onPress={onDelete}
          className="p-2 bg-gray-300 rounded-full"
        >
          <Feather name="trash-2" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onEdit}
          className="p-2 bg-lime-300 rounded-full"
        >
          <Text className="font-bold px-2">Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
