import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const equipment = [
  { name: 'Squat Rack', color: 'green' },
  { name: 'Bench Press', color: 'yellow' },
  { name: 'Pull-Up Station', color: 'red' }
];

export default function RoomDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Room (Floor One)</Text>
      <Text style={styles.subtitle}>My Workouts</Text>
      <ScrollView horizontal style={styles.equipmentRow}>
        {equipment.map((e, i) => (
          <View key={i} style={[styles.equipment, { backgroundColor: e.color }]}>
            <Text style={styles.equipmentText}>{e.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Messages" onPress={() => navigation.navigate('Messages')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  equipmentRow: { flexDirection: 'row', marginBottom: 10 },
  equipment: { width: 100, height: 60, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  equipmentText: { color: '#fff', fontWeight: 'bold' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});