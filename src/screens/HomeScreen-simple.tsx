import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>서화일기</Text>
        <Text style={styles.subtitle}>오늘의 하루를 붓으로 기록해보시지요</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Write')}
        >
          <Text style={styles.buttonText}>새 서화 그리기</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.listButton]}
          onPress={() => navigation.navigate('List')}
        >
          <Text style={[styles.buttonText, styles.listButtonText]}>서화첩 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3',
    padding: 24,
    position: 'relative',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#8B4513',
    textAlign: 'center',
    letterSpacing: -0.5,
    lineHeight: 58,
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B4513',
    backgroundColor: '#8B4513',
    shadowColor: 'rgba(139, 69, 19, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  listButton: {
    backgroundColor: '#FAF8F3',
    borderColor: '#DAA520',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  listButtonText: {
    color: '#8B4513',
  },
});

export default HomeScreen;