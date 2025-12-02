import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (course: {
    name: string;
    description: string;
    chapters: number;
  }) => void;
  initialData?: {
    name: string;
    description: string;
    chapters: number;
  };
};

export default function CourseModal({
  visible,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [chapters, setChapters] = useState("");

  // preload data when modal opens for edit
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setChapters(initialData.chapters.toString());
    } else {
      setName("");
      setDescription("");
      setChapters("");
    }
  }, [initialData, visible]);

  const handleSave = () => {
    if (!name || !description || !chapters) return;
    onSave({
      name,
      description,
      chapters: parseInt(chapters, 10),
    });
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 justify-end bg-black/50"
      >
        <View className="bg-white p-5 rounded-t-3xl">
          <Text className="text-xl font-bold mb-4">
            {initialData ? "Edit Course" : "New Course"}
          </Text>

          <Text className="font-semibold">Course Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter course name"
            className="border border-gray-300 rounded-lg p-3 mb-3"
          />

          <Text className="font-semibold">Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter course description"
            className="border border-gray-300 rounded-lg p-3 mb-3"
          />

          <Text className="font-semibold">Chapters</Text>
          <TextInput
            value={chapters}
            onChangeText={setChapters}
            placeholder="Enter number of chapters"
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3 mb-5"
          />

          {/* Buttons */}
          <View className="flex-row justify-end space-x-4">
            <TouchableOpacity
              onPress={onClose}
              className="px-6 py-3 bg-gray-300 rounded-xl"
            >
              <Text className="font-bold text-gray-800">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSave}
              className="px-6 py-3 bg-blue-500 rounded-xl"
            >
              <Text className="font-bold text-white">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
