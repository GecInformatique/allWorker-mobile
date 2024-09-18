import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity,Image, StyleSheet  } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen(){
    const navigation = useNavigation();
    return (
      <ScreenWrapper>
        <View className="h-full flex justify-around p-5 bg-gray-100">
          {/* Section de l'entête du profil */}
          <View className="items-center mt-10">
            <Image 
              source={require('../assets/images/logo.png')}  
              className="h-32 w-32 rounded-full border-4 border-green-500 shadow-lg" 
            />
            <Text className="text-xl font-bold mt-3">Nom de l'Utilisateur</Text>
            <Text className="text-base text-gray-500">email@example.com</Text>
          </View>
  
          {/* Section des options de profil */}
          <View className="space-y-4 mt-10">
            {/* Bouton "Mes tâches" */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Tasks')} 
              className="flex-row items-center p-4 bg-white rounded-xl shadow"
            >
              <Ionicons name="clipboard-outline" size={24} color="#0cb444" />
              <Text className="ml-4 text-lg font-medium">Mes tâches</Text>
            </TouchableOpacity>
  
            {/* Bouton "Paramètres" */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')} 
              className="flex-row items-center p-4 bg-white rounded-xl shadow"
            >
              <Ionicons name="settings-outline" size={24} color="#0cb444" />
              <Text className="ml-4 text-lg font-medium">Paramètres</Text>
            </TouchableOpacity>
  
            {/* Bouton "Notifications" */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Notifications')} 
              className="flex-row items-center p-4 bg-white rounded-xl shadow"
            >
              <Ionicons name="notifications-outline" size={24} color="#0cb444" />
              <Text className="ml-4 text-lg font-medium">Notifications</Text>
            </TouchableOpacity>
  
            {/* Bouton "Déconnexion" */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')} 
              className="flex-row items-center p-4 bg-red-500 rounded-xl shadow"
            >
              <Ionicons name="log-out-outline" size={24} color="white" />
              <Text className="ml-4 text-lg font-medium text-white">Déconnexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenWrapper>
    )
}