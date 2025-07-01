import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-8 text-center">Welcome to Your App</Text>
      <TouchableOpacity 
        className="bg-blue-600 px-8 py-4 rounded-lg" 
        onPress={() => router.push('auth/login' as any)}>
        <Text className="text-white text-base font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
