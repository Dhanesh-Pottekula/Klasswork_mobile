import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      // Here you would typically register the user
      // For now, just navigate to login
      Alert.alert('Success', 'Registration successful! Please login.', [
        { text: 'OK', onPress: () => router.replace('auth/login' as any) }
      ]);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-3xl font-bold text-center mb-2.5 text-gray-800">Create Account</Text>
      <Text className="text-base text-center mb-8 text-gray-600">Sign up to get started</Text>
      
      <View className="w-full">
        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 text-base"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        
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
        
        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 text-base"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg items-center mb-5" onPress={handleRegister}>
          <Text className="text-white text-base font-bold">Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('auth/login' as any)}>
          <Text className="text-center text-blue-600 text-sm">Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 