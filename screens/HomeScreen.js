import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.status}>Current Status: <Text style={{ color: 'green' }}>Open</Text></Text>
      <Text style={styles.smiley}>😊 Not Too Busy</Text>
      <View style={styles.chartBox}>
        <Text>Expected Gym Busyness (Bar Chart Placeholder)</Text>
      </View>
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Messages" onPress={() => navigation.navigate('Messages')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  status: { fontSize: 18, marginBottom: 10 },
  smiley: { fontSize: 22, marginBottom: 20 },
  chartBox: { width: '100%', height: 120, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 20 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' }
});