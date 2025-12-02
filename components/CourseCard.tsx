import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

type Props = {
  name: string;
  chapters: number;
  href: string;
  onPress?: () => void;
};

export default function CourseCard({ name, chapters, href, onPress }: Props) {
  return (
    <Link href={href as any} push asChild>
    <TouchableOpacity className="bg-gray-200 p-5 rounded-3xl mb-4" onPress={onPress}>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-xl font-bold">{name}</Text>
          <Text className="font-bold text-gray-500">{chapters} Chapters</Text>
        </View>

        <Feather
          name="chevron-right"
          size={24}
          color="black"
          className="bg-white p-1 rounded-xl"
        />
      </View>
    </TouchableOpacity>
    </Link>
  );
}
