import AsyncStorage from '@react-native-async-storage/async-storage';
import { Diary } from '../types/diary';

const STORAGE_KEY = 'drawdiary_entries';

// Cross-platform storage adapter
const storage = {
  async getItem(key: string): Promise<string | null> {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
    return AsyncStorage.getItem(key);
  },

  async setItem(key: string, value: string): Promise<void> {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  },

  async removeItem(key: string): Promise<void> {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    } else {
      await AsyncStorage.removeItem(key);
    }
  }
};

export const saveDiary = async (diary: Diary): Promise<void> => {
  try {
    const existingDiaries = await getDiaries();
    const updatedDiaries = [diary, ...existingDiaries].slice(0, 5); // 최대 5개만 저장
    await storage.setItem(STORAGE_KEY, JSON.stringify(updatedDiaries));
  } catch (error) {
    console.error('Error saving diary:', error);
    throw error;
  }
};

export const getDiaries = async (): Promise<Diary[]> => {
  try {
    const data = await storage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting diaries:', error);
    return [];
  }
};

export const getTodayDiary = async (): Promise<Diary | null> => {
  try {
    const diaries = await getDiaries();
    const today = new Date().toDateString();
    return diaries.find(diary => 
      new Date(diary.createdAt).toDateString() === today
    ) || null;
  } catch (error) {
    console.error('Error getting today diary:', error);
    return null;
  }
};