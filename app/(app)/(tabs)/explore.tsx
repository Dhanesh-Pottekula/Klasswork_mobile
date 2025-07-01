import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const categories = [
    { name: 'Technology', icon: 'laptop', color: '#2196F3' },
    { name: 'Design', icon: 'brush', color: '#9C27B0' },
    { name: 'Business', icon: 'briefcase', color: '#4CAF50' },
    { name: 'Health', icon: 'fitness', color: '#FF5722' },
    { name: 'Education', icon: 'school', color: '#FF9800' },
    { name: 'Entertainment', icon: 'game-controller', color: '#E91E63' },
  ];

  const trendingTopics = [
    'React Native Development',
    'Mobile App Design',
    'UI/UX Best Practices',
    'Performance Optimization',
    'State Management',
    'Navigation Patterns',
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="flex-1 p-5">
        <View className="mb-8">
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8, color: colors.text }}>Explore</Text>
          <Text style={{ fontSize: 16, color: colors.icon }}>
            Discover new content and topics
          </Text>
        </View>

        <View className="mb-8">
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: colors.icon }}>
            <Ionicons name="search" size={20} color={colors.icon} />
            <TextInput
              style={{ flex: 1, marginLeft: 10, fontSize: 16, color: colors.text }}
              placeholder="Search topics, categories..."
              placeholderTextColor={colors.icon}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Categories</Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: '48%', padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginBottom: 15, backgroundColor: colors.background, borderColor: colors.icon }}>
                <View style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 10, backgroundColor: category.color + '20' }}>
                  <Ionicons name={category.icon as any} size={24} color={category.color} />
                </View>
                <Text style={{ fontSize: 14, fontWeight: '500', color: colors.text }}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Trending Topics</Text>
          <View className="rounded-xl overflow-hidden">
            {trendingTopics.map((topic, index) => (
              <TouchableOpacity
                key={index}
                style={{ padding: 15, borderWidth: 1, borderBottomWidth: 0, backgroundColor: colors.background, borderColor: colors.icon }}>
                <View className="flex-row items-center justify-between">
                  <Text style={{ fontSize: 16, flex: 1, color: colors.text }}>{topic}</Text>
                  <Ionicons name="chevron-forward" size={16} color={colors.icon} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Featured Content</Text>
          <View className="space-y-4">
            <View style={{ padding: 20, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: colors.icon }}>
              <View className="flex-row items-center mb-2.5">
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, flex: 1, color: colors.text }}>Getting Started with React Native</Text>
              </View>
              <Text style={{ fontSize: 14, lineHeight: 20, marginBottom: 15, color: colors.icon }}>
                Learn the basics of React Native development and build your first mobile app.
              </Text>
              <View className="flex-row justify-between">
                <Text style={{ fontSize: 12, color: colors.icon }}>5 min read</Text>
                <Text style={{ fontSize: 12, color: colors.icon }}>Beginner</Text>
              </View>
            </View>

            <View style={{ padding: 20, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: colors.icon }}>
              <View className="flex-row items-center mb-2.5">
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, flex: 1, color: colors.text }}>Advanced Navigation Patterns</Text>
              </View>
              <Text style={{ fontSize: 14, lineHeight: 20, marginBottom: 15, color: colors.icon }}>
                Master complex navigation flows with drawer, stack, and tab navigators.
              </Text>
              <View className="flex-row justify-between">
                <Text style={{ fontSize: 12, color: colors.icon }}>8 min read</Text>
                <Text style={{ fontSize: 12, color: colors.icon }}>Advanced</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 