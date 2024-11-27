import React from 'react';
import {Image, Text, ScrollView, View} from 'react-native';
import baseStyles from '../styles/BaseStyles';
import ApiConfig from '../api/ApiConfig';
import Header from '../components/Header';

export default function MovieDetailScreen({route}) {
  const {movie} = route.params;

  return (
    <View style={{flex: 1}}>
      <Header title={'Movie Detail'} showBackButton={true} />
      <ScrollView style={baseStyles.scrollContainer}>
        <Image
          source={{uri: `${ApiConfig.BASE_IMAGE_URL}${movie.backdrop_path}`}}
          style={baseStyles.detailBackdrop}
        />
        <Image
          source={{uri: `${ApiConfig.BASE_IMAGE_URL}${movie.poster_path}`}}
          style={baseStyles.detailPoster}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '32%'}} />
          <View style={{width: '68%'}}>
            <Text style={baseStyles.detailTitle}>{movie.title}</Text>
            <Text style={baseStyles.detailInfoText}>
              Release Date: {movie.release_date}
            </Text>
            <Text style={baseStyles.detailInfoText}>
              Rating: {movie.vote_average.toFixed(1)}/10
            </Text>
          </View>
        </View>
        <Text style={baseStyles.detailOverview}>{movie.overview}</Text>
      </ScrollView>
    </View>
  );
}
