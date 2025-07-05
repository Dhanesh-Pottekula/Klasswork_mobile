import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Students', value: 1200 },
    { label: 'Mentors', value: 25 },
    { label: 'Parents', value: 800 },
  ];

  const recentActivities = [
    'Mentor Ramesh updated attendance',
    'Parent login created for student Ayaan',
    'Admin added new course: Science 8th Std',
  ];

  const handleLogout = () => {
    router.replace('/auth/login');
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome, Admin 👋</Text>
      <Text className="text-base text-gray-500 mb-5">Here’s an overview of your dashboard</Text>

      {/* Stats */}
      <View className="flex-row justify-between mb-6">
        {stats.map((item, index) => (
          <View
            key={index}
            className="bg-blue-50 w-[30%] rounded-2xl p-4 shadow-sm border border-blue-100"
          >
            <Text className="text-lg font-bold text-blue-700">{item.value}</Text>
            <Text className="text-xs text-blue-500">{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Recent Activities */}
      <Text className="text-lg font-semibold text-gray-800 mb-2">Recent Activities</Text>
      <View className="space-y-3">
        {recentActivities.map((activity, index) => (
          <View key={index} className="bg-gray-100 p-3 rounded-lg">
            <Text className="text-gray-700 text-sm">{activity}</Text>
          </View>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity
        onPress={handleLogout}
        className="mt-10 bg-red-600 py-3 rounded-xl items-center"
      >
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
