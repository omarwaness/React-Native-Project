import { Stack } from "expo-router";
import "./global.css";

const isLoggedIn = true; // TODO: Replace with your actual authentication logic
const isAdmin = true;

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Protected guard={isLoggedIn && !isAdmin}>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="sign-up" options={{}} />
        <Stack.Screen name="sign-in" options={{}} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn && isAdmin}>
        <Stack.Screen
          name="manage/(tabs)"
          options={{ headerShown: false }}
        />
      </Stack.Protected>
    </Stack>
  );
}
