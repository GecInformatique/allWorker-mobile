// services/TokenService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth-token'; // Clé sous laquelle le token sera stocké dans AsyncStorage

const TokenService = {
  // Sauvegarde du token dans AsyncStorage
  saveToken: async (token) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Error saving token', error);
    }
  },

  // Récupération du token depuis AsyncStorage
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      return token ? token : null;
    } catch (error) {
      console.error('Error fetching token', error);
      return null;
    }
  },

  // Suppression du token de AsyncStorage (utilisé pour déconnexion)
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error removing token', error);
    }
  },

  // Vérification si le token existe
  hasToken: async () => {
    const token = await TokenService.getToken();
    return token !== null;
  }
};

export default TokenService;
