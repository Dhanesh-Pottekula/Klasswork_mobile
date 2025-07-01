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
      <View key={item.label} style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name={item.icon as any} size={20} color={colors.tint} />
          <Text style={[styles.settingText, { color: colors.text }]}>{item.label}</Text>
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
          <Text style={[styles.infoText, { color: colors.icon }]}>{item.value}</Text>
        )}
        
        {item.type === 'button' && (
          <Ionicons name="chevron-forward" size={16} color={colors.icon} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
          <Text style={[styles.subtitle, { color: colors.icon }]}>
            Customize your app experience
          </Text>
        </View>

        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{section.title}</Text>
            <View style={[styles.sectionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              {section.items.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <TouchableOpacity
                    style={[
                      styles.settingItem,
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

        <View style={styles.section}>
          <View style={[styles.storageCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Text style={[styles.storageTitle, { color: colors.text }]}>Storage Usage</Text>
            <View style={styles.storageInfo}>
              <View style={styles.storageBar}>
                <View style={[styles.storageUsed, { backgroundColor: colors.tint, width: '65%' }]} />
              </View>
              <Text style={[styles.storageText, { color: colors.icon }]}>6.5 GB of 10 GB used</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.resetButton, { backgroundColor: colors.background, borderColor: '#FF5722' }]}
            onPress={() => {}}>
            <Ionicons name="refresh" size={20} color="#FF5722" />
            <Text style={[styles.resetText, { color: '#FF5722' }]}>Reset All Settings</Text>
          </TouchableOpacity>
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  infoText: {
    fontSize: 14,
  },
  storageCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  storageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  storageInfo: {
    alignItems: 'center',
  },
  storageBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 10,
  },
  storageUsed: {
    height: '100%',
    borderRadius: 4,
  },
  storageText: {
    fontSize: 14,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
  },
  resetText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 