import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import baseStyles from '../styles/BaseStyles';

export default function Header({title, showBackButton = false}) {
  const navigation = useNavigation();

  return (
    <View style={baseStyles.header}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={baseStyles.backButton}>
          <Text style={baseStyles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      )}
      <Text style={baseStyles.headerTitle}>{title}</Text>
    </View>
  );
}
