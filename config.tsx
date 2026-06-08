
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Config() {
  const { updateMission } = useMission();

  const [energy, setEnergy] = useState('');
  const [communication, setCommunication] = useState('');

  function save() {
    if (!energy || !communication) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    updateMission({
      energy: Number(energy),
      communication: Number(communication),
    });

    Alert.alert('Sucesso', 'Dados atualizados!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração da Missão</Text>

      <TextInput
        placeholder="Energia"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setEnergy}
      />

      <TextInput
        placeholder="Comunicação"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setCommunication}
      />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
