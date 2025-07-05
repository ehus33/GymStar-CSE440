import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function MachineOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Squat Rack</Text>
      <Text style={styles.subtitle}>First Floor</Text>
      <Text>Status: <Text style={{ color: 'green' }}>OPEN</Text></Text>
      <Text>Estimated Wait Time: 0 minutes</Text>
      <Image source={{ uri: 'https://placehold.co/200x120' }} style={styles.image} />
      <Button title="More Information" onPress={() => navigation.navigate('MachineInfo')} />
      <Button title="Path" onPress={() => navigation.navigate('PathMap')} />
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
  subtitle: { fontSize: 18, marginBottom: 10 },
  image: { width: 200, height: 120, marginVertical: 20 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});