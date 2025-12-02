import React from "react";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  onPress: () => void;
};

export default function FloatingAddButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-16 right-6 bg-lime-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
    >
      <Feather name="plus" size={28} color="white" />
    </TouchableOpacity>
  );
}
