
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, TextInput,StyleSheet } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { Ionicons } from '@expo/vector-icons';


export default function ChangePasswordScreen() {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
      inputIcon: {
        marginRight: 10,
      },
    })
    
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
    
            <View className="flex mr-5 ml-5">
              <Text className={`font-normal text-[23px]`}>Définir le nouveau mot de passe</Text>
              <Text className={`mt-2 leading-normal ${colors.headingColor}`}>
                Saisissez votre nouveau mot de passe ci-dessous pour le mettre à jour.
              </Text>
            </View>
    
            <View className="space-y-2 mx-4">
              <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Nouveau mot de passe</Text>
              <View className="flex-row items-center bg-white rounded-full p-3">
                <Ionicons name="lock-closed-outline" size={20} color="#0cb444" />
                <TextInput 
                  className="ml-2 flex-1" 
                  placeholder="Entrez votre nouveau mot de passe" 
                  secureTextEntry={true} 
                />
              </View>
    
              <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Confirmez le mot de passe</Text>
              <View className="flex-row items-center bg-white rounded-full p-3">
                <Ionicons name="lock-closed-outline" size={20} color="#0cb444" />
                <TextInput 
                  className="ml-2 flex-1" 
                  placeholder="Confirmez votre nouveau mot de passe" 
                  secureTextEntry={true} 
                />
              </View>
            </View>
    
            <View className="mx-5 mb-1">
              <TouchableOpacity 
                onPress={() => navigation.navigate('MainTabs')} 
                className="mb-5 shadow p-3 rounded-full" 
                style={{ backgroundColor: colors.buttonColor }}
              >
                <Text className="text-center font-bold text-white text-lg">Mettre à jour</Text>
              </TouchableOpacity>
    
              <View className="flex-row justify-center items-center mt-1">
                <Text className={`font-medium text-base ${colors.textColor}`}>Vous avez déjà un compte ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className="text-green-900 font-bold font-medium ml-2 text-[18px]">Se connecter</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScreenWrapper>
    );


  
}