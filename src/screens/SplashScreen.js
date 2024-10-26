import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import SplashController from '../controllers/SplashController';
import baseStyles from '../styles/BaseStyles';

export default function App() {
  useEffect(() => {
    SplashController.handleNavigation();
  }, []);

  return (
    <View style={baseStyles.center}>
      <Image
        source={require('../images/app-logo.png')}
        style={baseStyles.logo}
      />
    </View>
  );
}
