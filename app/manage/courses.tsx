import { View, FlatList } from "react-native";
import React from "react";
import ManageCourseCard from "@/components/ManageCourseCard";
import FloatingAddButton from "@/components/ui/FloatingAddButton";

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
    description:
      "Learn to store, query, and manage data in relational databases.",
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

export default function Details() {
  const handleEdit = (courseId: string) => console.log("Edit course", courseId);
  const handleDelete = (courseId: string) =>
    console.log("Delete course", courseId);
  const handleAddCourse = () => console.log("Add new course");

  return (
    <View className="flex-1 bg-white p-4 pb-0">
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ManageCourseCard
            name={item.name}
            description={item.description}
            chapters={item.chapters}
            onEdit={() => handleEdit(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardDismissMode="on-drag"
      />

      <FloatingAddButton onPress={handleAddCourse} />
    </View>
  );
}
