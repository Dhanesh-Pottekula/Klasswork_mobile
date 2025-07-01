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

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const settingsSections = [
    {
      title: 'App Settings',
      items: [
        {
          icon: 'notifications',
          label: 'Push Notifications',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
        },
        {
          icon: 'moon',
          label: 'Dark Mode',
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
        },
        {
          icon: 'finger-print',
          label: 'Biometric Login',
          type: 'switch',
          value: biometric,
          onValueChange: setBiometric,
        },
        {
          icon: 'sync',
          label: 'Auto Sync',
          type: 'switch',
          value: autoSync,
          onValueChange: setAutoSync,
        },
      ],
    },
    {
      title: 'Data & Storage',
      items: [
        { icon: 'cloud-download', label: 'Download Data', type: 'button' },
        { icon: 'trash', label: 'Clear Cache', type: 'button' },
        { icon: 'document-text', label: 'Export Data', type: 'button' },
      ],
    },
    {
      title: 'About',
      items: [
        { icon: 'information-circle', label: 'App Version', type: 'info', value: '1.0.0' },
        { icon: 'document-text', label: 'Terms of Service', type: 'button' },
        { icon: 'shield-checkmark', label: 'Privacy Policy', type: 'button' },
        { icon: 'help-circle', label: 'Help & Support', type: 'button' },
      ],
    },
  ];

  const renderSettingItem = (item: any) => {
    return (
      <View key={item.label} className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons name={item.icon as any} size={20} color={colors.tint} />
          <Text style={{ fontSize: 16, marginLeft: 12, color: colors.text }}>{item.label}</Text>
        </View>
        
        {item.type === 'switch' && (
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            trackColor={{ false: colors.icon, true: colors.tint }}
            thumbColor={item.value ? '#fff' : '#f4f3f4'}
          />
        )}
        
        {item.type === 'info' && (
          <Text style={{ fontSize: 14, color: colors.icon }}>{item.value}</Text>
        )}
        
        {item.type === 'button' && (
          <Ionicons name="chevron-forward" size={16} color={colors.icon} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView className="flex-1 p-5">
        <View className="mb-8">
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8, color: colors.text }}>Settings</Text>
          <Text style={{ fontSize: 16, color: colors.icon }}>
            Customize your app experience
          </Text>
        </View>

        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-6">
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: colors.text }}>{section.title}</Text>
            <View style={{ borderRadius: 12, borderWidth: 1, overflow: 'hidden', backgroundColor: colors.background, borderColor: colors.icon }}>
              {section.items.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <TouchableOpacity
                    style={[
                      { padding: 15 },
                      itemIndex < section.items.length - 1 && { borderBottomColor: colors.icon, borderBottomWidth: 1 }
                    ]}
                    onPress={item.type === 'button' ? () => {} : undefined}>
                    {renderSettingItem(item)}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View className="mb-6">
          <View style={{ padding: 20, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: colors.icon }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: colors.text }}>Storage Usage</Text>
            <View className="items-center">
              <View className="w-full h-2 bg-gray-300 rounded mb-2.5">
                <View style={{ height: '100%', borderRadius: 4, backgroundColor: colors.tint, width: '65%' }} />
              </View>
              <Text style={{ fontSize: 14, color: colors.icon }}>6.5 GB of 10 GB used</Text>
            </View>
          </View>
        </View>

        <View className="mb-6">
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 12, borderWidth: 1, backgroundColor: colors.background, borderColor: '#FF5722' }}
            onPress={() => {}}>
            <Ionicons name="refresh" size={20} color="#FF5722" />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, color: '#FF5722' }}>Reset All Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 