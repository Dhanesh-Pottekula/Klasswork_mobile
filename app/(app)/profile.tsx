import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const profileSections = [
    {
      title: 'Personal Information',
      items: [
        { icon: 'person', label: 'Edit Profile', action: () => {} },
        { icon: 'mail', label: 'Email Settings', action: () => {} },
        { icon: 'lock-closed', label: 'Privacy Settings', action: () => {} },
      ],
    },
    {
      title: 'Account',
      items: [
        { icon: 'shield-checkmark', label: 'Security', action: () => {} },
        { icon: 'card', label: 'Payment Methods', action: () => {} },
        { icon: 'document-text', label: 'Terms & Conditions', action: () => {} },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: 'help-circle', label: 'Help Center', action: () => {} },
        { icon: 'chatbubble', label: 'Contact Support', action: () => {} },
        { icon: 'star', label: 'Rate App', action: () => {} },
      ],
    },
  ];

  const handleLogout = () => {
    // Here you would typically clear user data and tokens
    router.replace('auth/login' as any);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={[styles.avatarContainer, { backgroundColor: colors.tint + '20' }]}>
              <Ionicons name="person" size={40} color={colors.tint} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
              <Text style={[styles.email, { color: colors.icon }]}>john.doe@example.com</Text>
              <Text style={[styles.memberSince, { color: colors.icon }]}>Member since 2023</Text>
            </View>
          </View>
        </View>

        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{section.title}</Text>
            <View style={[styles.sectionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.menuItem,
                    itemIndex < section.items.length - 1 && { borderBottomColor: colors.icon, borderBottomWidth: 1 }
                  ]}
                  onPress={item.action}>
                  <View style={styles.menuItemContent}>
                    <Ionicons name={item.icon as any} size={20} color={colors.tint} />
                    <Text style={[styles.menuItemText, { color: colors.text }]}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={16} color={colors.icon} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.logoutButton, { backgroundColor: '#FF5722' }]}
            onPress={handleLogout}>
            <Ionicons name="log-out" size={20} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.version, { color: colors.icon }]}>Version 1.0.0</Text>
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
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  memberSince: {
    fontSize: 14,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  version: {
    fontSize: 14,
  },
}); 