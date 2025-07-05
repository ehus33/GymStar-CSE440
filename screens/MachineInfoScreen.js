import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MachineInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Squat Rack Information</Text>
      <Text style={styles.section}>Video Tutorial</Text>
      <Image source={{ uri: 'https://placehold.co/200x120' }} style={styles.image} />
      <Text style={styles.section}>Muscle Groups</Text>
      <View style={styles.muscleRow}>
        <Image source={{ uri: 'https://placehold.co/40x40' }} style={styles.muscleIcon} />
        <Text>Quads</Text>
        <Image source={{ uri: 'https://placehold.co/40x40' }} style={styles.muscleIcon} />
        <Text>Hamstrings</Text>
      </View>
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
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  section: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  image: { width: 200, height: 120 },
  muscleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10 },
  muscleIcon: { width: 40, height: 40, marginHorizontal: 5 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});