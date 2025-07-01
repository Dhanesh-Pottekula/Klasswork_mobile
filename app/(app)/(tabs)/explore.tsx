import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

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
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Explore</Text>
          <Text style={[styles.subtitle, { color: colors.icon }]}>
            Discover new content and topics
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={[styles.searchBox, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Ionicons name="search" size={20} color={colors.icon} />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search topics, categories..."
              placeholderTextColor={colors.icon}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.categoryCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                  <Ionicons name={category.icon as any} size={24} color={category.color} />
                </View>
                <Text style={[styles.categoryName, { color: colors.text }]}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Trending Topics</Text>
          <View style={styles.topicsList}>
            {trendingTopics.map((topic, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.topicItem, { backgroundColor: colors.background, borderColor: colors.icon }]}>
                <View style={styles.topicContent}>
                  <Text style={[styles.topicText, { color: colors.text }]}>{topic}</Text>
                  <Ionicons name="chevron-forward" size={16} color={colors.icon} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Content</Text>
          <View style={styles.featuredList}>
            <View style={[styles.featuredCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <View style={styles.featuredHeader}>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={[styles.featuredTitle, { color: colors.text }]}>Getting Started with React Native</Text>
              </View>
              <Text style={[styles.featuredDescription, { color: colors.icon }]}>
                Learn the basics of React Native development and build your first mobile app.
              </Text>
              <View style={styles.featuredMeta}>
                <Text style={[styles.featuredMetaText, { color: colors.icon }]}>5 min read</Text>
                <Text style={[styles.featuredMetaText, { color: colors.icon }]}>Beginner</Text>
              </View>
            </View>

            <View style={[styles.featuredCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <View style={styles.featuredHeader}>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={[styles.featuredTitle, { color: colors.text }]}>Advanced Navigation Patterns</Text>
              </View>
              <Text style={[styles.featuredDescription, { color: colors.icon }]}>
                Master complex navigation flows with drawer, stack, and tab navigators.
              </Text>
              <View style={styles.featuredMeta}>
                <Text style={[styles.featuredMetaText, { color: colors.icon }]}>8 min read</Text>
                <Text style={[styles.featuredMetaText, { color: colors.icon }]}>Advanced</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  searchContainer: {
    marginBottom: 30,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
  },
  topicsList: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  topicItem: {
    padding: 15,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  topicContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topicText: {
    fontSize: 16,
    flex: 1,
  },
  featuredList: {
    gap: 15,
  },
  featuredCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  featuredDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredMetaText: {
    fontSize: 12,
  },
}); 