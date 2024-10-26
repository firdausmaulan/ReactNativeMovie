import ApiConfig from '../api/ApiConfig';
import {getRequest} from '../api/BaseApi';

let currentPage = 0;
let currentQuery = 'Dragon Ball';
let defaultQuery = 'Dragon Ball';

const searchMovies = async (inputtedQuery, setMovies) => {
  try {
    let finalQuery = inputtedQuery;
    if (finalQuery == '') finalQuery = defaultQuery;
    if (currentQuery != finalQuery) currentPage = 0;
    currentPage += 1;
    const response = await getRequest(ApiConfig.ENDPOINTS.SEARCH_MOVIES, {
      query: finalQuery,
      page: currentPage,
    });
    setMovies(response.results);
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};

export default {
  searchMovies,
};
