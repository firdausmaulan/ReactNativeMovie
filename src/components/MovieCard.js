import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import baseStyles from '../styles/BaseStyles';
import ApiConfig from '../api/ApiConfig';

export default function MovieCard({movie, onPress}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(movie)}
      style={baseStyles.movieCard}>
      <Image
        source={{uri: `${ApiConfig.BASE_IMAGE_URL}${movie.poster_path}`}}
        style={baseStyles.moviePoster}
      />
      <Text style={baseStyles.movieTitle}>{movie.title}</Text>
    </TouchableOpacity>
  );
}
