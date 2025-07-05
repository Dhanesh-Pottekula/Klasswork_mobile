import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../assets/images/icon.png'; // ✅ Adjust path based on your file structure

// ✅ Mock user database (Replace this with real API later)
const users = [
  { email: 'admin@school.com', password: 'admin123', role: 'admin' },
  { email: 'mentor@school.com', password: 'mentor123', role: 'mentor' },
  { email: 'parent@school.com', password: 'parent123', role: 'parent' },
];

// ✅ Email format checker
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    setLoading(true);

    const user = users.find(u => u.email === email && u.password === password);

    setTimeout(async () => {
      setLoading(false);

      if (!user) {
        Alert.alert('Login Failed', 'Invalid email or password');
        return;
      }

      // ✅ Store user role
      await AsyncStorage.setItem('userRole', user.role);

      // ✅ Navigate based on role
      switch (user.role) {
        case 'admin':
          router.replace('/admin/Dashboard-admin');
          break;
        case 'mentor':
          router.replace('/mentor/Dashboard-mentor');
          break;
        case 'parent':
          router.replace('/parent/Dashboard-parent');
          break;
        default:
          Alert.alert('Error', 'Unknown role');
      }
    }, 1000);
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      {/* ✅ Logo */}
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginBottom: 30,
        }}
        resizeMode="contain"
      />

      {/* ✅ Title */}
      <Text className="text-3xl font-bold text-center mb-2.5 text-gray-800">Hello School</Text>
      <Text className="text-base text-center mb-8 text-gray-900">Sign in to your account</Text>

      {/* ✅ Form */}
      <View className="w-full">
        <TextInput
          className="border border-gray-4`  Z00 rounded-lg p-4 mb-4 text-base"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#9CA3AF"
        />

        <TextInput
          className="border border-gray-400 rounded-lg p-4 mb-4 text-base"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#9CA3AF"
        />

        {loading ? (
          <ActivityIndicator size="large" color="#2563EB" className="mb-5" />
        ) : (
          <TouchableOpacity
            className="bg-blue-600 p-4 rounded-lg items-center mb-5"
            onPress={handleLogin}
          >
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => router.push('auth/register' as any)}>
          <Text className="text-center text-blue-600 text-sm">
            Don’t have an account? <Text className="font-semibold">Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
