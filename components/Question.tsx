import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface QuestionProps {
  question: string;
  options: string[];
  onSelect: (answer: string) => void;
}

export default function Question({ question, options, onSelect }: QuestionProps) {
  return (
    <View>
      <Text className="text-2xl font-bold mb-5">{question}</Text>

      {options.map((opt, i) => (
        <TouchableOpacity
          key={i}
          className="p-4 bg-white border-2 border-b-4 border-gray-200 rounded-2xl mb-3"
          onPress={() => onSelect(opt)}
        >
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
