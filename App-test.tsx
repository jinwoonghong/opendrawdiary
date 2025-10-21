import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>서화일기</Text>
      <Text style={styles.subtitle}>국립중앙박물관 스타일</Text>
      <Text style={styles.description}>DrawDiary 앱이 정상적으로 작동합니다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#4A4A4A',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'center',
  },
});