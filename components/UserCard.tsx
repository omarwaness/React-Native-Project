import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import ProgressBar from "./ui/ProgressBar";

type Props = {
  name: string;
  progress: number;
  onPress?: () => void;
};

export default function UserCard({ name, progress, onPress }: Props) {
  return (
    <TouchableOpacity
      className="bg-gray-200 p-5 rounded-3xl mb-4"
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <View className="w-16 h-16 bg-gray-500 rounded-full items-center justify-center">
          <Text className="text-3xl font-bold text-white">{name[0]}</Text>
        </View>
        <View className="flex-1 mx-4">
          <Text className="text-xl font-bold">{name}</Text>
          <ProgressBar progress={progress} color="blue" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
