import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Dashboard</Text>
          <Text style={[styles.subtitle, { color: colors.icon }]}>
            Welcome back! Here's what's happening today.
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Ionicons name="people" size={24} color={colors.tint} />
            <Text style={[styles.statNumber, { color: colors.text }]}>1,234</Text>
            <Text style={[styles.statLabel, { color: colors.icon }]}>Total Users</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Ionicons name="trending-up" size={24} color={colors.tint} />
            <Text style={[styles.statNumber, { color: colors.text }]}>89%</Text>
            <Text style={[styles.statLabel, { color: colors.icon }]}>Growth</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="add-circle" size={32} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Add New</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="analytics" size={32} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Analytics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="settings" size={32} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="help-circle" size={32} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={[styles.activityItem, { borderBottomColor: colors.icon }]}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={[styles.activityText, { color: colors.text }]}>
                New user registration completed
              </Text>
              <Text style={[styles.activityTime, { color: colors.icon }]}>2m ago</Text>
            </View>

            <View style={[styles.activityItem, { borderBottomColor: colors.icon }]}>
              <Ionicons name="warning" size={20} color="#FF9800" />
              <Text style={[styles.activityText, { color: colors.text }]}>
                System maintenance scheduled
              </Text>
              <Text style={[styles.activityTime, { color: colors.icon }]}>1h ago</Text>
            </View>

            <View style={[styles.activityItem, { borderBottomColor: colors.icon }]}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={[styles.activityText, { color: colors.text }]}>
                Database backup completed
              </Text>
              <Text style={[styles.activityTime, { color: colors.icon }]}>3h ago</Text>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  activityList: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 12,
  },
  activityTime: {
    fontSize: 12,
  },
}); 