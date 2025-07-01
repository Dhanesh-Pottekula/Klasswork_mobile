import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="flex-1 p-5">
        <View className="mb-8">
          <View className="items-center py-5">
            <View style={{ width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 15, backgroundColor: colors.tint + '20' }}>
              <Ionicons name="person" size={40} color={colors.tint} />
            </View>
            <View className="items-center">
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5, color: colors.text }}>John Doe</Text>
              <Text style={{ fontSize: 16, marginBottom: 5, color: colors.icon }}>john.doe@example.com</Text>
              <Text style={{ fontSize: 14, color: colors.icon }}>Member since 2023</Text>
            </View>
          </View>
        </View>

        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-6">
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: colors.text }}>{section.title}</Text>
            <View style={{ borderRadius: 12, borderWidth: 1, overflow: 'hidden', backgroundColor: colors.background, borderColor: colors.icon }}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 },
                    itemIndex < section.items.length - 1 && { borderBottomColor: colors.icon, borderBottomWidth: 1 }
                  ]}
                  onPress={item.action}>
                  <View className="flex-row items-center">
                    <Ionicons name={item.icon as any} size={20} color={colors.tint} />
                    <Text style={{ fontSize: 16, marginLeft: 12, color: colors.text }}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={16} color={colors.icon} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View className="mb-6">
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 12, backgroundColor: '#FF5722' }}
            onPress={handleLogout}>
            <Ionicons name="log-out" size={20} color="#fff" />
            <Text className="text-white text-base font-bold ml-2">Logout</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mt-5">
          <Text style={{ fontSize: 14, color: colors.icon }}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 