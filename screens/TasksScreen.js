import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskScreen() {
  const [selectedTab, setSelectedTab] = useState('All');

  const tasks = [
    { title: 'Customer Service', date: 'March 25 - 12:00 PM', project: 'Zoho Project', status: 'InProgress' },
    { title: 'Admin Assistance', date: 'March 25 - 12:00 PM', project: 'Zoho Project', status: 'Completed' },
    { title: 'Cashier', date: 'March 25 - 12:00 PM', project: 'Zoho Project', status: 'Pending' },
    { title: 'Customer Service', date: 'March 25 - 12:00 PM', project: 'Zoho Project', status: 'InProgress' },
    { title: 'Admin Assistance', date: 'March 25 - 12:00 PM', project: 'Zoho Project', status: 'Completed' }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return styles.statusPending;
      case 'InProgress':
        return styles.statusInProgress;
      case 'Completed':
        return styles.statusCompleted;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        {['All', 'Pending', 'InProgress', 'Completed'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.tabButtonActive]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={selectedTab === tab ? styles.tabTextActive : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <ScrollView>
        {tasks
          .filter((task) => selectedTab === 'All' || task.status === selectedTab)
          .map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <View style={styles.iconContainer}>
                <Ionicons name="file-tray-full-outline" size={30} color={getStatusStyle(task.status).backgroundColor} />
              </View>
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.taskInfo}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.taskDate}>{task.date}</Text>
                </View>
                <Text style={styles.taskProject}>For {task.project}</Text>
              </View>
              <View style={[styles.statusBox, getStatusStyle(task.status)]}>
                <Text style={styles.statusText}>{task.status}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9fa',
    paddingHorizontal: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e5f1f5',
  },
  tabButtonActive: {
    backgroundColor: '#1DA1F2',
  },
  tabText: {
    color: '#666',
    fontSize: 14,
  },
  tabTextActive: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#1DA1F2',
    padding: 12,
    borderRadius: 30,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  iconContainer: {
    marginRight: 15,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  taskDate: {
    marginLeft: 5,
    color: '#666',
    fontSize: 14,
  },
  taskProject: {
    color: '#666',
    fontSize: 12,
  },
  statusBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
  },
  statusPending: {
    backgroundColor: '#FF9500',
  },
  statusInProgress: {
    backgroundColor: '#1DA1F2',
  },
  statusCompleted: {
    backgroundColor: '#28A745',
  },
});
