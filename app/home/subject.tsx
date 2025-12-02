import { View, SectionList } from "react-native";
import React from "react";
import ChapterCard from "@/components/ChapterCard";
import QuizItem from "@/components/QuizItem";
import { useRouter } from "expo-router";

export default function CourseDetail() {
  const data = [
    {
      id: 1,
      chapter: "Introduction",
      quizzes: [
        { id: "q1", title: "Basics Quiz", questionsCount: 5 },
        { id: "q2", title: "Warmup Quiz", questionsCount: 3 },
      ],
    },
    {
      id: 2,
      chapter: "Advanced Concepts",
      quizzes: [
        { id: "q3", title: "Deep Quiz", questionsCount: 10 },
        { id: "q4", title: "Logic Quiz", questionsCount: 7 },
      ],
    },
    {
      id: 3,
      chapter: "Introduction",
      quizzes: [
        { id: "q1", title: "Basics Quiz", questionsCount: 5 },
        { id: "q2", title: "Warmup Quiz", questionsCount: 3 },
      ],
    },
    {
      id: 4,
      chapter: "Advanced Concepts",
      quizzes: [
        { id: "q3", title: "Deep Quiz", questionsCount: 10 },
        { id: "q4", title: "Logic Quiz", questionsCount: 7 },
      ],
    },
    {
      id: 5,
      chapter: "Introduction",
      quizzes: [
        { id: "q1", title: "Basics Quiz", questionsCount: 5 },
        { id: "q2", title: "Warmup Quiz", questionsCount: 3 },
        { id: "q3", title: "Basics Quiz", questionsCount: 5 },
        { id: "q4", title: "Warmup Quiz", questionsCount: 3 },
      ],
    },
    {
      id: 6,
      chapter: "Advanced Concepts",
      quizzes: [
        { id: "q3", title: "Deep Quiz", questionsCount: 10 },
        { id: "q4", title: "Logic Quiz", questionsCount: 7 },
      ],
    },
    {
      id: 7,
      chapter: "Introduction",
      quizzes: [
        { id: "q1", title: "Basics Quiz", questionsCount: 5 },
        { id: "q2", title: "Warmup Quiz", questionsCount: 3 },
      ],
    },
    {
      id: 8,
      chapter: "Advanced Concepts",
      quizzes: [
        { id: "q3", title: "Deep Quiz", questionsCount: 10 },
        { id: "q4", title: "Logic Quiz", questionsCount: 7 },
      ],
    },
  ];

  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-8 pt-5 pb-0">
      <SectionList
        sections={data.map((ch, index) => ({
          title: ch.chapter,
          order: index + 1,
          data: ch.quizzes,
        }))}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <QuizItem
            quiz={item}
            onPress={() => router.push("/home/quiz")}
          />
        )}
        renderSectionHeader={({ section }) => (
          <ChapterCard title={section.title} order={section.order} />
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
