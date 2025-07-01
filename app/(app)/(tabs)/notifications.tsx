import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const notifications = [
    {
      id: 1,
      title: 'Welcome to the app!',
      message: 'Thank you for joining us. We&apos;re excited to have you on board.',
      time: '2 hours ago',
      type: 'welcome',
      read: false,
    },
    {
      id: 2,
      title: 'New feature available',
      message: 'Check out our latest update with improved navigation.',
      time: '1 day ago',
      type: 'feature',
      read: true,
    },
    {
      id: 3,
      title: 'System maintenance',
      message: 'Scheduled maintenance will occur tonight at 2 AM.',
      time: '2 days ago',
      type: 'maintenance',
      read: true,
    },
    {
      id: 4,
      title: 'Profile updated',
      message: 'Your profile information has been successfully updated.',
      time: '3 days ago',
      type: 'profile',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'welcome':
        return { name: 'checkmark-circle', color: '#4CAF50' };
      case 'feature':
        return { name: 'star', color: '#FFD700' };
      case 'maintenance':
        return { name: 'warning', color: '#FF9800' };
      case 'profile':
        return { name: 'person', color: '#2196F3' };
      default:
        return { name: 'notifications', color: colors.tint };
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="flex-1 p-5">
        <View className="mb-8">
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8, color: colors.text }}>Notifications</Text>
          <Text style={{ fontSize: 16, color: colors.icon }}>
            Stay updated with the latest news and updates
          </Text>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Notification Settings</Text>
          <View style={{ padding: 20, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: colors.icon }}>
            <View className="flex-row justify-between items-center py-2.5">
              <View className="flex-row items-center">
                <Ionicons name="phone-portrait" size={20} color={colors.tint} />
                <Text style={{ fontSize: 16, marginLeft: 12, color: colors.text }}>Push Notifications</Text>
              </View>
              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
                trackColor={{ false: colors.icon, true: colors.tint }}
                thumbColor={pushEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View className="flex-row justify-between items-center py-2.5">
              <View className="flex-row items-center">
                <Ionicons name="mail" size={20} color={colors.tint} />
                <Text style={{ fontSize: 16, marginLeft: 12, color: colors.text }}>Email Notifications</Text>
              </View>
              <Switch
                value={emailEnabled}
                onValueChange={setEmailEnabled}
                trackColor={{ false: colors.icon, true: colors.tint }}
                thumbColor={emailEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>
          </View>
        </View>

        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>Recent Notifications</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: '500', color: colors.tint }}>Mark all read</Text>
            </TouchableOpacity>
          </View>

          <View className="rounded-xl overflow-hidden">
            {notifications.map((notification) => {
              const icon = getNotificationIcon(notification.type);
              return (
                <TouchableOpacity
                  key={notification.id}
                  style={[
                    { flexDirection: 'row', padding: 15, borderWidth: 1, borderBottomWidth: 0, backgroundColor: colors.background, borderColor: colors.icon },
                    !notification.read && { borderLeftColor: colors.tint, borderLeftWidth: 3 }
                  ]}>
                  <View style={{ marginRight: 15, marginTop: 2 }}>
                    <Ionicons name={icon.name as any} size={20} color={icon.color} />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center justify-between mb-1">
                      <Text style={{ fontSize: 16, fontWeight: '600', flex: 1, color: colors.text }}>
                        {notification.title}
                      </Text>
                      {!notification.read && (
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.tint }} />
                      )}
                    </View>
                    <Text style={{ fontSize: 14, lineHeight: 20, marginBottom: 5, color: colors.icon }}>
                      {notification.message}
                    </Text>
                    <Text style={{ fontSize: 12, color: colors.icon }}>
                      {notification.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View className="mb-8">
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Quick Actions</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity style={{ flex: 1, padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginHorizontal: 5, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="trash" size={24} color="#FF5722" />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Clear All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginHorizontal: 5, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="settings" size={24} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, padding: 20, borderRadius: 12, borderWidth: 1, alignItems: 'center', marginHorizontal: 5, backgroundColor: colors.background, borderColor: colors.icon }}>
              <Ionicons name="help-circle" size={24} color={colors.tint} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, color: colors.text }}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 