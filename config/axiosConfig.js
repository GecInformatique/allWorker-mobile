import axios from 'axios';

// Créez une instance Axios
const axiosInstance = axios.create({
  baseURL: 'http://192.168.42.207:8000/api/v1', // Remplacez par l'URL de votre API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor pour les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Ajouter un token d'authentification, si disponible
    const token = ''; // Remplacez par votre logique pour obtenir le token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor pour les réponses
axiosInstance.interceptors.response.use(
  (response) => {
    // Traiter les données de la réponse
    return response;
  },
  (error) => {
    // Gérer les erreurs globales
    if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code d'état
      // qui sort de la plage des 2xx
      console.error('Erreur de réponse:', error.response.data);
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Erreur de requête:', error.request);
    } else {
      // Quelque chose s'est produit lors de la configuration de la requête
      console.error('Erreur:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
