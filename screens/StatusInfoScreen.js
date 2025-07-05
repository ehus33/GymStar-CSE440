import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const machines = [
  { id: '1', name: 'First Floor', status: 'Busy' },
  { id: '2', name: 'Third Floor', status: 'Open' },
  { id: '3', name: 'Leg Press', status: 'Medium' }
];

export default function StatusInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More Information On Status</Text>
      <FlatList
        data={machines}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.name} - <Text style={{ color: item.status === 'Open' ? 'green' : item.status === 'Busy' ? 'red' : 'orange' }}>{item.status}</Text></Text>
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