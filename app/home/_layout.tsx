import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ }} />
        <Stack.Screen name="subject" options={{ headerTitle: 'Subject', headerShown: true }} />
        <Stack.Screen name="quiz" options={{ headerTitle: 'Quiz', headerShown: false }} />
    </Stack>
  )
}