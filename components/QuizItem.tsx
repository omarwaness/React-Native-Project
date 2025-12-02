import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function QuizItem({ quiz, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="p-4 bg-gray-100 rounded-xl my-2 mx-3"
    >
      <Text className="text-base font-medium">{quiz.title}</Text>
      <Text className="text-gray-500">{quiz.questionsCount} Questions</Text>
    </TouchableOpacity>
  );
}
