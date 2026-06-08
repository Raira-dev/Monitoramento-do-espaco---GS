
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

type MissionData = {
  energy: number;
  communication: number;
  stability: number;
};

type MissionContextType = {
  mission: MissionData;
  updateMission: (data: Partial<MissionData>) => void;
};

const MissionContext = createContext({} as MissionContextType);

export function MissionProvider({ children }: any) {
  const [mission, setMission] = useState<MissionData>({
    energy: 80,
    communication: 90,
    stability: 95,
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const saved = await AsyncStorage.getItem('mission');
    if (saved) {
      setMission(JSON.parse(saved));
    }
  }

  async function updateMission(data: Partial<MissionData>) {
    const updated = { ...mission, ...data };
    setMission(updated);
    await AsyncStorage.setItem('mission', JSON.stringify(updated));
  }

  return (
    <MissionContext.Provider value={{ mission, updateMission }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}
