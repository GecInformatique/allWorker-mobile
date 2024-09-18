import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ScreenWrapper({children}){
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight: Platform.OS === "android" ? 35 : 0;
    return(
        <View style={{paddingTop:statusBarHeight}}>
            {children}
        </View>
    )
}