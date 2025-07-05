import React from 'react';
import { View, Text } from 'react-native';

export default function ParentHome() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-gray-800">Parent Dashboard</Text>
      <Text className="text-base text-gray-600 mt-2">Hello Parent! Check your child's progress here.</Text>
    </View>
  );
}
