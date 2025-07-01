import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const notifications = [
    {
      id: 1,
      title: 'Welcome to the app!',
      message: 'Thank you for joining us. We\'re excited to have you on board.',
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
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Notifications</Text>
          <Text style={[styles.subtitle, { color: colors.icon }]}>
            Stay updated with the latest news and updates
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Notification Settings</Text>
          <View style={[styles.settingsCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="phone-portrait" size={20} color={colors.tint} />
                <Text style={[styles.settingText, { color: colors.text }]}>Push Notifications</Text>
              </View>
              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
                trackColor={{ false: colors.icon, true: colors.tint }}
                thumbColor={pushEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="mail" size={20} color={colors.tint} />
                <Text style={[styles.settingText, { color: colors.text }]}>Email Notifications</Text>
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

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Notifications</Text>
            <TouchableOpacity>
              <Text style={[styles.markAllRead, { color: colors.tint }]}>Mark all read</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.notificationsList}>
            {notifications.map((notification) => {
              const icon = getNotificationIcon(notification.type);
              return (
                <TouchableOpacity
                  key={notification.id}
                  style={[
                    styles.notificationItem,
                    { backgroundColor: colors.background, borderColor: colors.icon },
                    !notification.read && { borderLeftColor: colors.tint, borderLeftWidth: 3 }
                  ]}>
                  <View style={styles.notificationIcon}>
                    <Ionicons name={icon.name as any} size={20} color={icon.color} />
                  </View>
                  <View style={styles.notificationContent}>
                    <View style={styles.notificationHeader}>
                      <Text style={[styles.notificationTitle, { color: colors.text }]}>
                        {notification.title}
                      </Text>
                      {!notification.read && (
                        <View style={[styles.unreadDot, { backgroundColor: colors.tint }]} />
                      )}
                    </View>
                    <Text style={[styles.notificationMessage, { color: colors.icon }]}>
                      {notification.message}
                    </Text>
                    <Text style={[styles.notificationTime, { color: colors.icon }]}>
                      {notification.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="trash" size={24} color="#FF5722" />
              <Text style={[styles.actionText, { color: colors.text }]}>Clear All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="settings" size={24} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <Ionicons name="help-circle" size={24} color={colors.tint} />
              <Text style={[styles.actionText, { color: colors.text }]}>Help</Text>
            </TouchableOpacity>
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
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  markAllRead: {
    fontSize: 14,
    fontWeight: '500',
  },
  settingsCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  notificationsList: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  notificationIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  notificationMessage: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
}); 