import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import LoginController from '../controllers/LoginController';
import baseStyles from '../styles/BaseStyles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        baseStyles.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Image
        source={require('../images/app-logo.png')}
        style={baseStyles.logo}
      />
      <TextInput
        style={baseStyles.input}
        placeholder="Username"
        placeholderTextColor={'grey'}
        onChangeText={setUsername}
      />
      <TextInput
        style={baseStyles.input}
        placeholder="Password"
        placeholderTextColor={'grey'}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => LoginController.handleLogin(username, password)}
        style={baseStyles.button}>
        <Text style={baseStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
