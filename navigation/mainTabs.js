import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreens';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/notificationScreen';
import TasksScreen from '../screens/TasksScreen';
import SettingScreen from '../screens/settingScree';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function MainTabs() {
    return (
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (route.name === 'Notifications') {
        iconName = focused ? 'notifications' : 'notifications-outline'; 
      } else if (route.name === 'Tasks') {
        iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Tasks" component={TasksScreen} />
  <Tab.Screen name="Notifications" component={NotificationScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
  <Tab.Screen name="Settings" component={SettingScreen} />
  
  
</Tab.Navigator>
    );
  }