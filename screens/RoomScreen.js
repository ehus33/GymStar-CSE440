import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const machines = [
  { id: 1, name: 'Treadmill', status: 'busy', color: 'red' },
  { id: 2, name: 'Elliptical', status: 'free', color: 'green' },
  { id: 3, name: 'Bike', status: 'moderate', color: 'orange' },
];

export default function RoomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Machines</Text>
      {machines.map(machine => (
        <TouchableOpacity
          key={machine.id}
          style={[styles.machine, { backgroundColor: machine.color }]}
          onPress={() => navigation.navigate('Machine', { machineId: machine.id })}
        >
          <Text style={styles.machineText}>{machine.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  machine: { padding: 20, marginVertical: 10, borderRadius: 10 },
  machineText: { color: '#fff', fontSize: 18 },
});