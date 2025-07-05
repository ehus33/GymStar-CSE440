import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const results = [
  { id: '1', location: 'Second Floor', status: 'Open' },
  { id: '2', location: 'First Floor', status: 'Closed' }
];

export default function SearchResultsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultRow}>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={{ color: item.status === 'Open' ? 'green' : 'red' }}>{item.status}</Text>
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
  resultRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  location: { fontWeight: 'bold', marginRight: 10 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});