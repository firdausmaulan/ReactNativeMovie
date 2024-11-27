import {setToken} from '../storage/AppStorage';
import {navigate} from '../navigation/NavigationService';

const handleLogin = (username, password) => {
  if (username === 'admin' && password === 'admin123') {
    setToken('your-api-key');
    navigate('MovieListScreen');
  } else {
    alert('Invalid Credentials', 'Wrong username or password');
  }
};

export default {
  handleLogin,
};
