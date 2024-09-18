import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity,Image } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";



const WelcomScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image source={require('../assets/images/all-worker.png')} className="h-70 w-70 shadow"/>
        </View>
        <View className=" justify-center">
            <Text className={`text-center font-bold text-4xl ${colors.headingColor} mb-5`}>Bienvenue sur</Text>
            <View className="flex-row justify-center">
                            <Image source={require('../assets/images/logo.png')} className="h-70 w-70 shadow"/>

            </View>
        </View>
        <View className="mx-5 mb-10">
            
          <TouchableOpacity onPress={() => navigation.navigate('Login')} className="mb-5 shadow p-3 rounded-full" style={{backgroundColor:colors.buttonColor}}>
            <Text className="text-center font-bold text-white text-lg">Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} className="shadow p-3 rounded-full" style={{backgroundColor:colors.buttonColor}}>
            <Text className="text-center font-bold text-white text-lg">Inscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomScreen;