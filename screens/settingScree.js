import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { Ionicons } from '@expo/vector-icons';


export default function SettingScreen() {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Paramètres</Text>
        </View>

        <View style={styles.settingsContainer}>
          {/* Paramètre Notifications */}
          <View style={styles.settingItem}>
            <View style={styles.settingLabel}>
              <Ionicons name="notifications-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#0cb444' }}
              thumbColor={isNotificationsEnabled ? '#0cb444' : '#f4f3f4'}
              onValueChange={toggleNotifications}
              value={isNotificationsEnabled}
            />
          </View>

          {/* Paramètre Mode Sombre */}
          <View style={styles.settingItem}>
            <View style={styles.settingLabel}>
              <Ionicons name="moon-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>Mode Sombre</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#0cb444' }}
              thumbColor={isDarkMode ? '#0cb444' : '#f4f3f4'}
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </View>

          {/* Changer le mot de passe */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('ChangePassword')} 
            style={styles.settingItemTouchable}
          >
            <View style={styles.settingLabel}>
              <Ionicons name="lock-closed-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>Changer le mot de passe</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#0cb444" />
          </TouchableOpacity>

          {/* À propos */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('About')} 
            style={styles.settingItemTouchable}
          >
            <View style={styles.settingLabel}>
              <Ionicons name="information-circle-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>À propos</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#0cb444" />
          </TouchableOpacity>

          {/* FAQ */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('FAQ')} 
            style={styles.settingItemTouchable}
          >
            <View style={styles.settingLabel}>
              <Ionicons name="help-circle-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>FAQ</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#0cb444" />
          </TouchableOpacity>

          {/* Termes et Conditions */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('TermsAndConditions')} 
            style={styles.settingItemTouchable}
          >
            <View style={styles.settingLabel}>
              <Ionicons name="document-text-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>Termes et Conditions</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#0cb444" />
          </TouchableOpacity>

          {/* Politique de confidentialité */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('PrivacyPolicy')} 
            style={styles.settingItemTouchable}
          >
            <View style={styles.settingLabel}>
              <Ionicons name="shield-checkmark-outline" size={24} color="#0cb444" />
              <Text style={styles.settingText}>Politique de confidentialité</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#0cb444" />
          </TouchableOpacity>
        </View>

        {/* Déconnexion */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')} 
            style={styles.logoutButton}
          >
            <Ionicons name="log-out-outline" size={24} color="white" />
            <Text style={styles.logoutText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsContainer: {
    marginHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingItemTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 15,
    fontSize: 16,
  },
  logoutContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});