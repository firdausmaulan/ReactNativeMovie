// src/styles/baseStyles.js
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Logo
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  // Text Inputs
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
  },

  // Buttons
  button: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
  },

  // Headers
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },

  // Movie Card
  movieCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    borderColor: '#eaeaea',
    borderWidth: 1,
  },
  moviePoster: {
    width: width / 2 - 32,
    height: (width / 2 - 32) * 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  movieTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Movie Detail
  detailBackdrop: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailContent: {
    padding: 16,
  },
  detailPoster: {
    width: 100,
    height: 150,
    borderRadius: 10,
    position: 'absolute',
    top: 140,
    left: 16,
  },
  detailTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
  },
  detailInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailInfoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  detailOverview: {
    marginTop: 24,
    fontSize: 16,
    lineHeight: 22,
    color: '#333333',
  },

  // Miscellaneous
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
