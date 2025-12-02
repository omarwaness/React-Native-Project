import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

type Props = {
  visible: boolean;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function AlertDialog({ visible, message, onCancel, onConfirm }: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View className="flex-1 bg-white/60 bg-opacity-10 justify-center items-center p-5">
        <View className="bg-white border-2 border-gray-300 rounded-3xl p-6 w-full max-w-sm mb-20">
          <Text className="text-lg font-semibold mb-4">{message}</Text>

          <View className="flex-row justify-end space-x-4 gap-2 mt-4">
            <TouchableOpacity
              onPress={onCancel}
              className="px-4 py-2 rounded-2xl border border-gray-300"
            >
              <Text className="text-gray-700 font-semibold">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              className="px-4 py-2 rounded-2xl bg-violet-500"
            >
              <Text className="text-white font-semibold">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
