import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "@/components/ui/ProgressBar";
import Feather from "@expo/vector-icons/Feather";

export default function Index() {
  const name = "User";
  const progress = 80;
  const lastCourse = "React Native";
  const dailyStreak = 7;

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <StatusBar style="dark" />
      <View className="mb-8 mt-2">
        <Text className="text-4xl font-extrabold">HELLO</Text>
        <Text className="text-4xl font-extrabold ">{name.toLocaleUpperCase()}</Text>
      </View>

      <View className="bg-gray-200 p-5 rounded-[28px] mb-5">
        <View className="flex-row items-center justify-between mb-3">
          <View>
            <Text className="font-semibold text-gray-500">Your overall</Text>
            <Text className="text-2xl font-extrabold">PROGRESS</Text>
          </View>
          <Text className="text-lg font-bold bg-white px-3 py-1 rounded-xl">
            {progress}%
          </Text>
        </View>
        <ProgressBar progress={progress} />
      </View>

      <View className="flex-row bg-gray-200 p-5 rounded-[28px] mb-5">
        <View className="flex-1 w-1/2">
          <Text className="text-2xl font-extrabold">{lastCourse.toLocaleUpperCase()}</Text>
          <Text className="font-semibold text-gray-500 mb-3">Last course</Text>
          <TouchableOpacity className="bg-violet-500 px-5 py-3 rounded-full">
            <View className="flex-row items-center justify-center">
              <Text className="text-white font-bold text-center mr-2">
                Continue
              </Text>
              <Feather name="chevron-right" size={22} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-1/2 items-center justify-center p-2">
          <Feather name="book-open" size={80} color="#8b5cf6" />
        </View>
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1 bg-gray-200 p-5 rounded-[28px]">
          <Text className="text-2xl font-extrabold">DAILY</Text>
          <Text className="text-2xl font-extrabold">STREAK</Text>
          <Text className="font-extrabold text-white text-right text-8xl">
            {dailyStreak}
          </Text>
        </View>

        <View className="flex-1 bg-gray-200 p-5 rounded-[28px]">
          <Text className="text-2xl font-extrabold">DAILY</Text>
          <Text className="text-2xl font-extrabold">STREAK</Text>
          <Text className="font-semibold text-white text-right text-8xl">
            {dailyStreak}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
