import React, {useState, useEffect} from 'react';
import {FlatList, Text, TextInput, View, TouchableOpacity} from 'react-native';
import MovieListController from '../controllers/MovieListController';
import MovieCard from '../components/MovieCard';
import baseStyles from '../styles/BaseStyles';
import {navigate} from '../navigation/NavigationService';
import Header from '../components/Header';

export default function MovieListScreen() {
  const handleMoviePress = movie => {
    navigate('MovieDetailScreen', {movie});
  };

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    MovieListController.searchMovies(search, setMovies);
  }, []);

  const loadMore = () => {
    MovieListController.searchMovies(search, setMovies);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Movies'} />
      <View style={baseStyles.searchContainer}>
        <TextInput
          style={[baseStyles.input, {width: '75%'}]}
          placeholder="Search..."
          placeholderTextColor={'grey'}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={[baseStyles.button, {width: '25%', marginLeft: 8}]}
          onPress={() => MovieListController.searchMovies(search, setMovies)}>
          <Text style={baseStyles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={baseStyles.container}
        data={movies}
        numColumns={2}
        renderItem={({item}) => (
          <MovieCard movie={item} onPress={handleMoviePress} />
        )}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        refreshing={false}
      />
    </View>
  );
}
