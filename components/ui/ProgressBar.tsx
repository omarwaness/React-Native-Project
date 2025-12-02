import { View } from "react-native";
import React from "react";

type Props = {
  progress: number;
  color?: string; // optional
};

export default function ProgressBar({ progress, color = "violet" }: Props) {
  return (
    <View className="w-full h-[10px] bg-gray-300 rounded-full overflow-hidden">
      <View
        className={`h-[10px] rounded-full bg-${color}-500`}
        style={{ width: `${progress}%` }}
      />
    </View>
  );
}
