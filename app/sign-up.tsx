import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-between bg-white px-6 py-10 pt-56">
      <StatusBar style="dark" />
      <View className="items-center mt-10">
        <Text className="text-2xl font-bold text-center mb-6">
          Sign up for free and start your learning journey
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
        <TouchableOpacity 
          className="w-full bg-black/90 py-3 rounded-full"
          
          >
          <Text className="text-white text-center font-semibold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/sign-in")}
        className="items-center mb-4"
      >
        <Text className="text-lg">
          Existing user?{" "}
          <Text className="underline font-bold">Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
