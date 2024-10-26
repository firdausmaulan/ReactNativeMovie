import React, {useEffect} from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import SplashController from './src/controllers/SplashController';

export default function App() {
  useEffect(() => {
    SplashController.handleRootNavigation();
  }, []);

  return <MainNavigator />;
}
