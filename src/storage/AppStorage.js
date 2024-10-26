import {storeData, getData, removeData, clearData} from './BaseStorage';

const TOKEN_KEY = 'authToken';

export const setToken = async token => {
  await storeData(TOKEN_KEY, token);
};

export const getToken = async () => {
  return await getData(TOKEN_KEY);
};

export const removeToken = async () => {
  await removeData(TOKEN_KEY);
};

export const clearAllData = async () => {
  await clearData();
};
