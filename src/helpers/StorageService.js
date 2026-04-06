// src/helpers/StorageService.js
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
  // TOKEN SEGURO (Keychain) - Requerimiento Sprint 1
  async saveToken(token) {
    try {
      await Keychain.setGenericPassword('userToken', token, {
        service: 'petadopt_auth'
      });
    } catch (error) {
      console.error("Error al guardar token:", error);
    }
  },

  async getToken() {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'petadopt_auth'
      });
      return credentials ? credentials.password : null;
    } catch (error) {
      return null;
    }
  },

  async removeToken() {
    await Keychain.resetGenericPassword({ service: 'petadopt_auth' });
  },

  // DATOS NO SENSIBLES (AsyncStorage) - Requerimiento Modo Offline
  async saveUserData(data) {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  },

  async getUserData() {
    const data = await AsyncStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  }
};

export default StorageService;