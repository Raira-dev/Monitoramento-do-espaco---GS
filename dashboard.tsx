
import { View, Text, StyleSheet } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Dashboard() {
  const { mission } = useMission();

  const critical =
    mission.energy < 20 || mission.communication < 30;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel da Missão</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Energia: {mission.energy}%</Text>
        <Text style={styles.text}>Comunicação: {mission.communication}%</Text>
        <Text style={styles.text}>Estabilidade: {mission.stability}%</Text>
      </View>

      {critical && (
        <Text style={styles.alert}>
          ⚠ ALERTA: Níveis críticos detectados!
        </Text>
      )}
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
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  alert: {
    color: '#ef4444',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
