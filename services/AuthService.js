import axios from 'axios';
import TokenService from './TokenService';
import UserModel from '../models/UserModel';
import axiosInstance from '../config/axiosConfig';

const API_URL = 'http://192.168.1.175:8000/api/v1'; // Remplacez par votre API
 
const AuthService = {
    login: async (body) => {
        try {
          const response = await axiosInstance.post('/auth/login', body);
          console.log("Réponse de l'API : ", response.data);
          return response.data;
        } catch (error) {
          console.error('Erreur de requête :', error.response ? error.response.data : error.message);
          throw error;
        }
      
      },

      user: async () => {
        try {
          // Effectue la requête pour obtenir les informations de l'utilisateur
          const response = await axiosInstance.get('/auth/me'); // Utilise l'instance Axios
          console.log("Réponse de l'API (user) : ", response.data);
          return response.data;
        } catch (error) {
          // Affiche les erreurs pour débogage
          console.error('Erreur de requête :', error.response ? error.response.data : error.message);
          throw error;
        }
      },
    
  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      if (response.data.token) {
        const user = new UserModel(response.data.id, response.data.name, response.data.email, response.data.token);

        // Sauvegarde du token avec TokenService
        await TokenService.saveToken(response.data.token);

        return user;
      }
      return null;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  logout: async () => {
    // Suppression du token avec TokenService
    await TokenService.removeToken();
  },

  getCurrentUser: async () => {
    const token = await TokenService.getToken();
    if (!token) {
      return null;
    }

    try {
      const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return new UserModel(response.data.id, response.data.name, response.data.email, token);
    } catch (error) {
      console.error('Failed to fetch current user', error);
      return null;
    }
  }
};

export default AuthService;
