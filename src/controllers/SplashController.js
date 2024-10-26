import {getToken} from '../storage/AppStorage';
import {navigate} from '../navigation/NavigationService';

const handleRootNavigation = async () => {
  navigate('SplashScreen');
};

const handleNavigation = async () => {
  try {
    const token = await getToken();
    if (token) {
      navigate('MovieListScreen'); // Navigate to movie list if token exists
    } else {
      navigate('LoginScreen'); // Navigate to login if no token found
    }
  } catch (error) {
    console.error('Error checking token:', error);
  }
};

export default {
  handleNavigation,
  handleRootNavigation,
};
