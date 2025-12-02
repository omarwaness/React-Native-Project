import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-between px-6 py-10 bg-white pt-52">
      <StatusBar style="dark" />

      <View className="items-center mt-10">
        <Text className="text-2xl font-bold text-center mb-6">
          Welcome back!
        </Text>

        <TextInput
          className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#999"
        />

        <TextInput
          className="w-full border border-gray-300 rounded-full px-4 py-3 mb-6"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity className="w-full bg-black/90 py-3 rounded-full">
          <Text className="text-white text-center font-semibold text-lg">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="items-center mb-4"
      >
        <Text className="text-lg">
          New user?{" "}
          <Text className="underline font-bold">Create an account</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
