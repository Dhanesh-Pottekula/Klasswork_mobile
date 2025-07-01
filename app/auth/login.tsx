import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Here you would typically validate credentials
      // For now, just navigate to the main app
      router.replace('(app)' as any);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-3xl font-bold text-center mb-2.5 text-gray-800">Welcome Back</Text>
      <Text className="text-base text-center mb-8 text-gray-600">Sign in to your account</Text>
  
      <View className="w-full">
        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 text-base"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 text-base"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg items-center mb-5" onPress={handleLogin}>
          <Text className="text-white text-base font-bold">Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('auth/register' as any)}>
          <Text className="text-center text-blue-600 text-sm">Don&apos;t have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 