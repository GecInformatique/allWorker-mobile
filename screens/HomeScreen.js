import { View, Text,TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthService from '../services/AuthService';
import { Image } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import EmptyList from "../components/emptyList";


const recentTrips = [
    {
        id: 1,
        name: "Trip 1",
        location: "Location 1",
    },
    {
        id: 2,
        name: "Trip 2",
        location: "Location 2",
    },
    {
        id: 3,
        name: "Trip 3",
    },{
        id: 4,
        name: "Trip 4",
        location: "Location 4",
    },{
        id: 5,
        name: "Trip 5",
        location: "Location 5",
    },
    {
        id: 3,
        name: "Trip 3",
    },{
        id: 4,
        name: "Trip 4",
        location: "Location 4",
    },{
        id: 5,
        name: "Trip 5",
        location: "Location 5",
    }
]


export default function HomeScreen(){
    const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [recentTrips, setRecentTrips] = useState([]); // Assurez-vous que vous récupérez les données des voyages récents

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AuthService.user();
        setUser(userData);
      } catch (error) {
        console.error('Erreur de récupération des données utilisateur:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    // Implémentez la logique de déconnexion
    navigation.navigate('Login'); // Redirection vers la page de connexion
  };

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row items-center justify-between px-4">
        <Text className={`${colors.headingColor} font-bold text-2xl shadow-sm`}>
          {user ? `Welcome, ${user.name}` : 'Home Screen'}
        </Text>
        <TouchableOpacity
          className="p-2 px-3 bg-white border border-gray-300 rounded-full"
          onPress={handleLogout}
        >
          <Text className={`${colors.headingColor} font-bold text-2xl shadow-sm`}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-300 rounded-xl mx-4 mb-4">
        <Image source={require("../assets/images/signup.png")} className="w-60 h-60" />
      </View>
      <View className="px-3 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.headingColor} text-2xl font-bold`}>Recents trips</Text>
          <TouchableOpacity className="p-2 px-3 bg-white border border-gray-300 rounded-full flex-row justify-center items-center">
            <Text className={`${colors.headingColor} text-2xl font-bold`}>View all</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <Text>Hello</Text>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={recentTrips}
            ListEmptyComponent={<EmptyList message={"You haven't data "} />}
            numColumns={2}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            className="mx-1"
            renderItem={({ item }) => (
              <TouchableOpacity className="bg-white p-1 rounded-2xl m-1 mb-3 shadow-sm">
                <View>
                  <Image source={require('../assets/images/1.png')} className="w-36 h-36 mb-2" />
                  <Text className={`${colors.headingColor} font-bold`}>{item.name}</Text>
                  <Text className={`${colors.headingColor} text-xs`}>{item.location}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
          
  
    )
}