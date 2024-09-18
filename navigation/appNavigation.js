import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomScreen from "../screens/welcomScreen";
import MainTabs from "./mainTabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgetPasswordScreen from "../screens/forgetPasswordScreen";
import VerifyScreen from "../screens/verifyScreen";
import ChangePasswordScreen from "../screens/changePasswordScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
        
    )
}