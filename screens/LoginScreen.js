import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { Ionicons } from '@expo/vector-icons';
import AuthService from "../services/AuthService";  // Import du service d'authentification

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // État pour stocker les messages d'erreur


    const styles = StyleSheet.create({
      inputIcon: {
        marginRight: 10,
      },
    });  

    const handleLogin = async () => {
        console.log("Tentative de connexion avec : ", email, password);  // Affichage des valeurs d'email et mot de passe
    
        const body = {
          email,
          password
        };
    
        try {
            const response = await AuthService.login(body);
            console.log("Réponse de l'API :", response);
            
            if (response && response.access_token) {  // Vérifiez le nom du champ selon la réponse
                console.log("Utilisateur connecté : ", response);
                // Récupérer les informations de l'utilisateur après la connexion
                const userData = await AuthService.user();
                console.log('User data:', userData);
                navigation.navigate('MainTabs');
            } else {
                console.log("Échec de la connexion : ", response.message || "Problème inconnu");
                setError(response.message || "Échec de la connexion");
            }
        } catch (error) {
            console.log("Erreur de connexion :", error.response?.data || error.message);
            setError(error.response?.data?.message || "Erreur inconnue");
        } finally {
            setShowProgressBar(false);  // Masquer la barre de progression
        }
        };
    return ( 
      <ScreenWrapper>
          <View className="h-full flex justify-around">
              {/* Bouton de retour */}
              <TouchableOpacity 
                  onPress={() => navigation.goBack()} 
                  className="absolute top-5 left-5 p-2 bg-white rounded-full shadow mb-5"
              >
                  <Ionicons name="arrow-back-outline" size={24} color="#0cb444" />
              </TouchableOpacity>

              <View className="flex-row justify-center mt-10">
                  <Image source={require('../assets/images/logo.png')} className="h-70 w-70 shadow" />
              </View>
 
              <View className="flex-row justify-center ">
                  <Text className={`text-center font-600 text-3xl ${colors.headingColor} mb-2`}>Connexion</Text>
              </View>

              <View className="space-y-2 mx-4">
                  <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Email</Text>
                  <View className="flex-row items-center bg-white rounded-full p-3">
                      <Ionicons name="mail-outline" size={20} color="#0cb444" />
                      <TextInput 
                          className="ml-2 flex-1" 
                          placeholder="Email" 
                          value={email} 
                          onChangeText={setEmail}  // Mise à jour de l'email
                          keyboardType="email-address"  // Type de clavier pour email
                      />
                  </View>

                  <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Mot de passe</Text>
                  <View className="flex-row items-center bg-white rounded-full p-3">
                      <Ionicons name="lock-closed-outline" size={20} color="#0cb444" />
                      <TextInput 
                          className="ml-2 flex-1" 
                          placeholder="Mot de passe" 
                          secureTextEntry={true} 
                          value={password} 
                          onChangeText={setPassword}  // Mise à jour du mot de passe
                      />
                  </View>

                  <TouchableOpacity className="flex-row justify-end" onPress={() => navigation.navigate('ForgetPassword')}>
                      <Text className=" text-green-900 underline text-[13px]">Mot de passe oublié ?</Text>
                  </TouchableOpacity>
              </View>

              <View className="mx-5 mb-1">
                  <TouchableOpacity 
                      onPress={handleLogin}  // Fonction de gestion de connexion
                      className="mb-5 shadow p-3 rounded-full" 
                      style={{ backgroundColor: colors.buttonColor }}
                  >
                      <Text className="text-center font-bold text-white text-lg">Connexion</Text>
                  </TouchableOpacity>
                  
                  <View className="flex-row justify-center items-center mt-1">
                      <Text className={`font-medium text-base ${colors.textColor}`}>New here?</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                          <Text className="text-green-900 font-bold font-medium ml-2 text-[18px]">Inscription</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </ScreenWrapper>
    );
}
