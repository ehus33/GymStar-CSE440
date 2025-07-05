import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.gear}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: 'https://placehold.co/100x100' }} style={styles.avatar} />
      <Text style={styles.name}>Abby Hecko <Text style={styles.handle}>@sheller</Text></Text>
      <Text style={styles.stats}>★ 250</Text>
      <Text style={styles.level}>Level 2 | Beginner</Text>
      <View style={styles.qrBox}>
        <Text>Membership QR Code</Text>
        <View style={styles.qrPlaceholder}><Text>QR</Text></View>
      </View>
      <Button title="My Workouts" onPress={() => navigation.navigate('MyWorkouts')} />
      <Button title="Log Out" onPress={() => navigation.replace('Splash')} />
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Profile" onPress={() => {}} />
        <Button title="Messages" onPress={() => navigation.navigate('Messages')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  headerRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginVertical: 10 },
  gear: { fontSize: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, margin: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  handle: { color: '#888' },
  stats: { fontSize: 18, marginVertical: 5 },
  level: { fontSize: 16, color: '#666', marginBottom: 10 },
  qrBox: { alignItems: 'center', marginVertical: 10 },
  qrPlaceholder: { width: 80, height: 80, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 30 }
});