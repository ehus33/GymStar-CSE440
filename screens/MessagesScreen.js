import React from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

const members = [
  { id: '1', name: 'Ryan', role: 'Intermediate', online: true },
  { id: '2', name: 'Dean', role: 'Beginner', online: false },
  { id: '3', name: 'Ethan', role: 'Advanced', online: true }
];
const chats = [
  { id: '1', name: 'Amber', role: 'Intermediate', last: 'See you at 5!', online: true },
  { id: '2', name: 'Dean', role: 'Beginner', last: 'Let’s do legs tomorrow', online: false }
];

export default function MessagesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <TextInput placeholder="Search Messages" style={styles.input} />
      <ScrollView horizontal style={styles.carousel}>
        {members.map(m => (
          <View key={m.id} style={styles.avatarBox}>
            <View style={[styles.avatar, { backgroundColor: m.online ? 'green' : 'gray' }]} />
            <Text>{m.name}</Text>
          </View>
        ))}
        <Button title="Add Members" onPress={() => {}} />
      </ScrollView>
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatRow}>
            <View style={[styles.dot, { backgroundColor: item.online ? 'green' : 'gray' }]} />
            <Text style={styles.chatName}>{item.name} | {item.role}</Text>
            <Text style={styles.chatLast}>{item.last}</Text>
          </View>
        )}
      />
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Messages" onPress={() => {}} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 10 },
  carousel: { flexDirection: 'row', marginBottom: 10 },
  avatarBox: { alignItems: 'center', marginRight: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginBottom: 4 },
  chatRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  chatName: { fontWeight: 'bold', marginRight: 8 },
  chatLast: { color: '#888' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }
});