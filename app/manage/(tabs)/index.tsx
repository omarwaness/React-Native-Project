import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

export default function Manage() {
  const name = "Admin";

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <StatusBar style="dark" />
      <View className="mb-8 mt-2">
        <Text className="text-4xl font-extrabold">Hello, {name}</Text>
        <Text className="text-lg text-gray-500">
          What would you like to manage today?
        </Text>
      </View>
     
    
      <Link href="/manage/courses" asChild>
      <TouchableOpacity className="bg-violet-50 border border-b-4 border-violet-200 p-5 py-4  rounded-3xl mb-5">
        <View className="flex-row items-center justify-between">
          <View className="p-3 bg-violet-500 rounded-2xl shadow-violet-200 shadow-md">
            <Feather name="award" size={38} color="white" />
          </View>
          <View className="flex-1 mx-4">
            <Text className="text-2xl font-bold">Manage Courses</Text>
            <Text className="text-gray-600">
              Create amazing learning experiences!
            </Text>
          </View>
          <Feather name="chevron-right" size={32} color="gray" />
        </View>
      </TouchableOpacity>
      </Link>

      <Link href="/manage/chapters" asChild>
      <TouchableOpacity className="bg-pink-50 border border-b-4 border-pink-200 p-5 py-4  rounded-3xl mb-5">
        <View className="flex-row items-center justify-between">
          <View className="p-3 bg-pink-500 rounded-2xl shadow-pink-200 shadow-md">
            <Feather name="book" size={38} color="white" />
          </View>
          <View className="flex-1 mx-4">
            <Text className="text-2xl font-bold">Build Chapters</Text>
            <Text className="text-gray-600">
              Craft the learning path.
            </Text>
          </View>
          <Feather name="chevron-right" size={32} color="gray" />
        </View>
      </TouchableOpacity>
      </Link>

      <Link href="/manage/quizzes" asChild>
      <TouchableOpacity className="bg-emerald-50 border border-b-4 border-emerald-200/60 p-5 py-4 rounded-3xl mb-5">
        <View className="flex-row items-center justify-between">
          <View className="p-3 bg-emerald-500 rounded-2xl shadow-emerald-200 shadow-md">
            <Feather name="bookmark" size={38} color="white" />
          </View>
          <View className="flex-1 mx-4">
            <Text className="text-2xl font-bold">Design Quizzes</Text>
            <Text className="text-gray-600">
              Test your students knowledge.
            </Text>
          </View>
          <Feather name="chevron-right" size={32} color="gray" />
        </View>
      </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}
