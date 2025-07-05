import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function MentorDashboard() {
  const stats = [
    { label: 'Assigned Students', value: 36 },
    { label: 'Subjects', value: 5 },
    { label: 'Attendance %', value: '93%' },
  ];

  const upcomingClasses = [
    { time: '9:00 AM', subject: 'Mathematics', class: '8A' },
    { time: '11:00 AM', subject: 'Science', class: '9B' },
    { time: '1:00 PM', subject: 'English', class: '10A' },
  ];

  const handleLogout = () => {
    router.replace('/auth/login');
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-800 mb-2">Welcome, Mentor 👋</Text>
      <Text className="text-base text-gray-500 mb-5">Here's your daily overview</Text>

      {/* Stats */}
      <View className="flex-row justify-between mb-6">
        {stats.map((item, index) => (
          <View
            key={index}
            className="bg-green-50 w-[30%] rounded-2xl p-4 shadow-sm border border-green-100"
          >
            <Text className="text-lg font-bold text-green-700">{item.value}</Text>
            <Text className="text-xs text-green-600">{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Upcoming Classes */}
      <Text className="text-lg font-semibold text-gray-800 mb-3">Upcoming Classes</Text>
      <View className="space-y-3 mb-8">
        {upcomingClasses.map((cls, index) => (
          <View
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex-row justify-between items-center"
          >
            <View>
              <Text className="text-gray-800 font-medium">{cls.subject}</Text>
              <Text className="text-sm text-gray-500">Class: {cls.class}</Text>
            </View>
            <Text className="text-sm font-semibold text-gray-600">{cls.time}</Text>
          </View>
        ))}
      </View>

      {/* Optional Action Button */}
      <TouchableOpacity className="bg-blue-600 py-3 rounded-xl items-center mb-6">
        <Text className="text-white font-bold">View Student List</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-600 py-3 rounded-xl items-center"
      >
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
