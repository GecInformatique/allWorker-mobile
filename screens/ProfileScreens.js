import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24}  /> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24}  /> 
        </TouchableOpacity>
      </View>
 
        <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Michel Jordan</Text>
        <Text style={styles.jobTitle}>UI/UX Designer</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Ionicons name="briefcase-outline" size={24} color="black" /> 
            <Text style={styles.infoText}>100+</Text>
            <Text style={styles.infoSubText}>Job done</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="trophy-outline" size={24} color="black" /> 
            <Text style={styles.infoText}>100+</Text>
            <Text style={styles.infoSubText}>IHUZO Points</Text>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="star-outline" size={24} color="black" /> 
            <Text style={styles.infoText}>5.5</Text>
            <Text style={styles.infoSubText}>Review</Text>
          </View>
        </View>
      </View>

    
      <View style={styles.section}>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>Verification</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>Qualification</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>Services & Products</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>My work details</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>Contracts</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.profileItemText}>Payment Method</Text>
          <Ionicons name="add-outline" size={24} color="black" /> 
        </TouchableOpacity>
      </View>

    
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoSubText: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff6666',
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
