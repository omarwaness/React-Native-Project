import {
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import CourseCard from "@/components/CourseCard";

const courses = [
  {
    id: "1",
    name: "JavaScript",
    chapters: 12,
    description: "Learn the core language of the web and build dynamic apps.",
  },
  {
    id: "2",
    name: "React Native",
    chapters: 18,
    description: "Build cross-platform mobile apps using React and JavaScript.",
  },
  {
    id: "3",
    name: "Python",
    chapters: 10,
    description: "A beginner-friendly language used for automation and AI.",
  },
  {
    id: "4",
    name: "Java",
    chapters: 15,
    description: "Master object-oriented programming and backend development.",
  },
  {
    id: "5",
    name: "C++",
    chapters: 20,
    description: "Learn high-performance programming for games and engines.",
  },
  {
    id: "6",
    name: "Node.js",
    chapters: 14,
    description: "Build fast backend APIs using JavaScript on the server.",
  },
  {
    id: "7",
    name: "HTML & CSS",
    chapters: 8,
    description: "Understand the building blocks of modern website design.",
  },
  {
    id: "8",
    name: "SQL",
    chapters: 11,
    description: "Learn to store, query, and manage data in relational databases.",
  },
  {
    id: "9",
    name: "Cybersecurity Basics",
    chapters: 9,
    description: "Understand threats, protection methods, and digital safety.",
  },
  {
    id: "10",
    name: "Data Structures",
    chapters: 16,
    description: "Learn foundational algorithms and how data is organized.",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("")
  const filteredCourses = courses.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const numberOfCourses = filteredCourses.length;


  return (
    <SafeAreaView className="flex-1 bg-white p-5 pb-0" edges={["top"]}>
      <View className="mb-4 mt-2 flex-row justify-between items-center">
        <Text className="text-2xl font-extrabold">COURSES AVAILABLE</Text>
        <Text className="text-base font-bold bg-gray-100 px-3 py-1 rounded-xl">
          {numberOfCourses}
        </Text>
      </View>

      <View className="flex-row items-center bg-gray-100 px-4 rounded-full mb-4">
        <Feather name="search" size={20} color="#6b7280" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#6b7280"
          className="flex-1 ml-3 text-lg font-b"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View className="rounded-3xl overflow-hidden flex-1">
        <FlatList
          data={filteredCourses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseCard
              name={item.name}
              chapters={item.chapters}
              href="/home/subject"
            />
          )}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
        />
      </View>
    </SafeAreaView>
  );
}
