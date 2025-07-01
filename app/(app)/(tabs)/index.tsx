import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="flex-1 p-5">
        <View className="mb-8">
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8, color: colors.text }}>Dashboard</Text>
          <Text style={{ fontSize: 16, color: colors.icon }}>
            Welcome back! Here&apos;s what&apos;s happening today.
          </Text>
        </View>

        <View className="flex-row justify-between mb-8">
          <View style={{ flex: 1, padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginHorizontal: 5, backgroundColor: colors.background, borderColor: colors.icon }}>
            <Ionicons name="people" size={24} color={colors.tint} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 8, color: colors.text }}>1,234</Text>
            <Text style={{ fontSize: 14, marginTop: 4, color: colors.icon }}>Total Users</Text>
          </View>

          <View style={{ flex: 1, padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginHorizontal: 5, backgroundColor: colors.background, borderColor: colors.icon }}>
            <Ionicons name="trending-up" size={24} color={colors.tint} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 8, color: colors.text }}>89%</Text>
            <Text style={{ fontSize: 14, marginTop: 4, color: colors.icon }}>Growth</Text>
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity style={{ width: '48%', padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginBottom: 15, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="add-circle" size={32} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Add New</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '48%', padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginBottom: 15, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="analytics" size={32} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Analytics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '48%', padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginBottom: 15, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="settings" size={32} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '48%', padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginBottom: 15, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="help-circle" size={32} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Recent Activity</Text>
          <View className="rounded-xl overflow-hidden">
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: colors.icon }}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={{ flex: 1, fontSize: 14, marginLeft: 12, color: colors.text }}>
                New user registration completed
              </Text>
              <Text style={{ fontSize: 12, color: colors.icon }}>2m ago</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: colors.icon }}>
              <Ionicons name="warning" size={20} color="#FF9800" />
              <Text style={{ flex: 1, fontSize: 14, marginLeft: 12, color: colors.text }}>
                System maintenance scheduled
              </Text>
              <Text style={{ fontSize: 12, color: colors.icon }}>1h ago</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: colors.icon }}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={{ flex: 1, fontSize: 14, marginLeft: 12, color: colors.text }}>
                Database backup completed
              </Text>
              <Text style={{ fontSize: 12, color: colors.icon }}>3h ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 