import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Finish() {
  const router = useRouter()

  return (
    <View className="flex-1 bg-white justify-center items-center p-5">

      <Text className="text-3xl font-bold mb-4">🎉 Quiz Completed!</Text>
      <Text className="text-lg text-gray-600 mb-10 text-center">
        Great job! You’ve finished the quiz.
      </Text>

      <TouchableOpacity
        onPress={() => router.dismissTo('/home/subject')}
        className="bg-blue-500 px-6 py-3 rounded-xl"
      >
        <Text className="text-white text-lg font-semibold">Back to Home</Text>
      </TouchableOpacity>

    </View>
  )
}
