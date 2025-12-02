import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import ProgressBar from "@/components/ui/ProgressBar";
import Question from "@/components/Question";
import QuestionFooter from "@/components/QuestionFooter";
import AlertDialog from "@/components/AlertDialog";

export default function QuizPage() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is React Native?",
      options: ["A library", "A framework", "A language", "A tool"],
    },
    {
      id: 2,
      question: "Which company created React Native?",
      options: ["Apple", "Meta", "Google", "Microsoft"],
    },
    {
      id: 3,
      question: "Which hook is used for state?",
      options: ["useFetch", "useState", "useEffect", "useMemo"],
    },
  ];

  const [index, setIndex] = useState(0);
  const current = questions[index];

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Quiz finished");
      router.push("/home/finish");
    }
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <View className="flex-row items-center mb-6 mt-10 pr-8">
        <TouchableOpacity onPress={() => setShowAlert(true)}>
          <Feather name="x" size={28} color="black" />
        </TouchableOpacity>

        <View className="flex-1 ml-4">
          <ProgressBar
            progress={(index / questions.length) * 100}
            color="green"
          />
        </View>
      </View>

      <View className="flex-1 justify-between pb-10">
        <Question
          question={current.question}
          options={current.options}
          onSelect={(answer) => console.log("Answer:", answer)}
        />

        <TouchableOpacity
          className="p-4 bg-black/90 rounded-full"
          onPress={nextQuestion}
        >
          <Text className="text-white text-center font-bold">Check</Text>
        </TouchableOpacity>
      </View>

      <AlertDialog
        visible={showAlert}
        message="Are you sure you want to exit the quiz?"
        onCancel={() => setShowAlert(false)}
        onConfirm={() => router.back()}
      />
    </View>
  );
}
