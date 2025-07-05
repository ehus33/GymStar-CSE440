import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PathMapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Path</Text>
      <View style={styles.mapBox}>
        <Text>Floorplan with blue route (placeholder)</Text>
      </View>
      <View style={styles.navBar}>
        <Text>Home</Text>
        <Text>Map</Text>
        <Text>Profile</Text>
        <Text>Messages</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  mapBox: { width: 300, height: 200, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginVertical: 20 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' }
});