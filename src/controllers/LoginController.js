import {setToken} from '../storage/AppStorage';
import {navigate} from '../navigation/NavigationService';

const handleLogin = (username, password) => {
  if (username === 'admin' && password === 'admin123') {
    setToken(
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2IwMjVmZWU0Y2JmYjc4NzQxNWM2M2Q1ZmE4NzU4MyIsInN1YiI6IjU3MmYyOWIzOTI1MTQxMDk1NjAwMDM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHN3Of32k7-B_c04YUQjg1eF_wX5Nmlu5Q0RQ-5VzM8',
    );
    navigate('MovieListScreen');
  } else {
    alert('Invalid Credentials', 'Wrong username or password');
  }
};

export default {
  handleLogin,
};
