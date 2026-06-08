
import { Stack } from 'expo-router';
import { MissionProvider } from '../context/MissionContext';

export default function Layout() {
  return (
    <MissionProvider>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: '#0b1020' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#111827' }
      }} />
    </MissionProvider>
  );
}
