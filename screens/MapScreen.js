import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';

const zones = [
  { name: 'Cardio Room', color: 'green' },
  { name: 'Basketball Court', color: 'yellow' },
  { name: 'Weight Room', color: 'red' },
  { name: 'Toning Room', color: 'green' },
  { name: 'Yoga Room', color: 'yellow' },
  { name: 'Equipment Room', color: 'green' }
];

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map</Text>
      <TextInput placeholder="Search (equipment, floor, exercises)" style={styles.input} />
      <Text style={styles.floor}>Floor One</Text>
      <ScrollView horizontal style={styles.zoneRow}>
        {zones.map((z, i) => (
          <View key={i} style={[styles.zone, { backgroundColor: z.color }]}>
            <Text style={styles.zoneText}>{z.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonRow}>
        <Button title="Prev Floor" onPress={() => {}} />
        <Button title="Next Floor" onPress={() => {}} />
        <Button title="My Workouts" onPress={() => navigation.navigate('MyWorkouts')} />
      </View>
      <Button title="Legend (Key)" onPress={() => navigation.navigate('LegendModal')} />
      <View style={styles.legend}>
        <Text>Legend: Green = Most available, Yellow = Half, Red = Few available</Text>
      </View>
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Map" onPress={() => {}} />
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Messages" onPress={() => navigation.navigate('Messages')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 10 },
  floor: { fontSize: 18, marginBottom: 10 },
  zoneRow: { flexDirection: 'row', marginBottom: 10 },
  zone: { width: 120, height: 60, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  zoneText: { color: '#fff', fontWeight: 'bold' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  legend: { marginTop: 10, marginBottom: 10 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' }
});