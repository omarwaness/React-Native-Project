import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface FooterProps {
  onNext: () => void;
}

export default function QuestionFooter({ onNext }: FooterProps) {
  return (
    <View className="mt-10">
      <TouchableOpacity
        className="p-4 bg-green-500 rounded-full"
        onPress={onNext}
      >
        <Text className="text-white text-center font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
