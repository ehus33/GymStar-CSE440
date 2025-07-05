import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function MachineScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treadmill</Text>
      <Text>Status: Busy</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <Button title="Information" onPress={() => navigation.navigate('MachineInfo')} />
      <Button title="My Workouts" onPress={() => navigation.navigate('MyWorkouts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 150, height: 150, marginVertical: 20 },
});