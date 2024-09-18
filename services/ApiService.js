// services/ApiService.js
import axios from 'axios';
import TokenService from './TokenService';  // Si vous avez un token à utiliser pour l'authentification

const API_URL = 'https://example.com/api'; // Remplacez par l'URL de base de votre API

const ApiService = {
  // Méthode GET
  get: async (url, params = {}) => {
    try {
      const token = await TokenService.getToken(); // Optionnel si token JWT
      const response = await axios.get(`${API_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Optionnel
        },
        params: params,  // Pour envoyer des paramètres GET
      });
      return response.data;
    } catch (error) {
      console.error(`GET ${url} failed`, error);
      throw error;
    }
  },

  // Méthode POST
  post: async (url, data = {}) => {
    try {
      const token = await TokenService.getToken(); // Optionnel si token JWT
      const response = await axios.post(`${API_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,  // Optionnel
        },
      });
      return response.data;
    } catch (error) {
      console.error(`POST ${url} failed`, error);
      throw error;
    }
  },

  // Méthode PUT
  put: async (url, data = {}) => {
    try {
      const token = await TokenService.getToken(); // Optionnel si token JWT
      const response = await axios.put(`${API_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,  // Optionnel
        },
      });
      return response.data;
    } catch (error) {
      console.error(`PUT ${url} failed`, error);
      throw error;
    }
  },

  // Méthode DELETE
  delete: async (url) => {
    try {
      const token = await TokenService.getToken(); // Optionnel si token JWT
      const response = await axios.delete(`${API_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Optionnel
        },
      });
      return response.data;
    } catch (error) {
      console.error(`DELETE ${url} failed`, error);
      throw error;
    }
  },
};

export default ApiService;
