import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const workouts = [
  { id: '1', name: 'Squat Rack', floor: 'First', status: 'Open' },
  { id: '2', name: 'Bench Press', floor: 'First', status: 'Busy' }
];

export default function MyWorkoutsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.name} ({item.floor} Floor) - <Text style={{ color: item.status === 'Open' ? 'green' : 'red' }}>{item.status}</Text></Text>
            <Button title="Path" onPress={() => navigation.navigate('PathMap')} />
          </View>
        )}
      />
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
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});