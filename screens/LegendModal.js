import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

export default function LegendModal({ navigation }) {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Key</Text>
          <Text>🟢 Open – 0 minute wait</Text>
          <Text>🟡 Semi-Open – 1–5 minute wait</Text>
          <Text>🟠 Medium – 5–10 minute wait</Text>
          <Text>🔴 Busy – 10+ minute wait</Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: 30, borderRadius: 12, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});