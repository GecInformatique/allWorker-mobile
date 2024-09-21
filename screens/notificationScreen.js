import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function NotificationScreen() {
    const navigation = useNavigation();

    // Simuler des notifications avec un titre, description, et heure
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Commande expédiée", description: "Votre commande #1234 a été expédiée.", time: "14:30", isRead: false },
        { id: 2, title: "Message reçu", description: "Vous avez un nouveau message de support.", time: "13:00", isRead: true },
        { id: 3, title: "Facture disponible", description: "Votre facture de juillet est disponible.", time: "10:45", isRead: false },
        { id: 4, title: "Rendez-vous confirmé", description: "Votre rendez-vous est confirmé pour demain.", time: "09:00", isRead: false },
        { id: 5, title: "Compte sécurisé", description: "Votre mot de passe a été modifié avec succès.", time: "08:30", isRead: true },
        { id: 6, title: "Promotion spéciale", description: "Profitez de 20% de réduction cette semaine.", time: "07:45", isRead: false },
    ]);

    const styles = StyleSheet.create({
        notificationItem: {
            backgroundColor: '#fff',
            padding: 15,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            elevation: 4,
        },
        notificationTextContainer: {
            marginLeft: 10,
            flex: 1, // pour occuper tout l'espace possible
        },
        notificationTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
        },
        notificationDescription: {
            fontSize: 14,
            color: '#808080',
            marginTop: 5,
        },
        notificationTime: {
            fontSize: 12,
            color: '#808080',
            marginTop: 5,
            alignSelf: 'flex-end',
        },
        notificationTextRead: {
            color: '#A9A9A9', // Texte plus clair pour les notifications lues
        },
        iconContainer: {
            padding: 10,
            borderRadius: 50,
        },
        iconUnread: {
            backgroundColor: '#FF6347', // Couleur différente pour non lue
        },
        iconRead: {
            backgroundColor: '#A9A9A9', // Couleur grise pour lue
        },
    });

    // Fonction pour marquer une notification comme lue
    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notif) =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );
    };

    // Fonction pour afficher chaque notification dans la liste
    const renderNotification = ({ item }) => (
        <TouchableOpacity onPress={() => markAsRead(item.id)}>
            <View style={styles.notificationItem}>
                <View style={[styles.iconContainer, item.isRead ? styles.iconRead : styles.iconUnread]}>
                    <Ionicons name="notifications-outline" size={24} color="#fff" />
                </View>
                <View style={styles.notificationTextContainer}>
                    <Text style={[styles.notificationTitle, item.isRead && styles.notificationTextRead]}>
                        {item.title}
                    </Text>
                    <Text style={[styles.notificationDescription, item.isRead && styles.notificationTextRead]}>
                        {item.description}
                    </Text>
                    <Text style={styles.notificationTime}>
                        {item.time}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={notifications}
                renderItem={renderNotification}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false} // Pour cacher la barre de défilement
            />
        </View>
    );
}
