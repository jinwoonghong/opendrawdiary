import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const WriteScreen = ({ navigation }: any) => {
  const [text, setText] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSave = () => {
    if (text.trim().length < 10) {
      Alert.alert('알림', '충효일기를 10자 이상 작성해주시지요.');
      return;
    }
    
    Alert.alert('완료', '충효서화가 서화첩에 보관되었소이다.', [
      { text: '확인', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>서화 그리기</Text>
        <Text style={styles.subtitle}>충효일기를 작성하고 그림을 그려보세요</Text>
        
        {/* 충효일기 입력 영역 */}
        <View style={styles.diarySection}>
          <Text style={styles.sectionTitle}>충효일기</Text>
          <TextInput
            style={styles.textInput}
            placeholder="오늘의 일을 기록해보시지요..."
            placeholderTextColor="#8B8680"
            value={text}
            onChangeText={setText}
            multiline
            maxLength={150}
          />
          <Text style={styles.charCount}>{text.length}/150</Text>
        </View>
        
        {/* 그림 그리기 영역 */}
        <View style={styles.drawingSection}>
          <Text style={styles.sectionTitle}>서화 그리기</Text>
          <TouchableOpacity 
            style={styles.drawingCanvas}
            onPress={() => setIsDrawing(!isDrawing)}
          >
            <Text style={styles.drawingText}>
              {isDrawing ? '🎨 그림 그리는 중...' : '🖌️ 여기를 눌러 그림 그리기'}
            </Text>
          </TouchableOpacity>
          
          {/* 색상 팔레트 */}
          <View style={styles.colorPalette}>
            {['#2C2C2C', '#8B4513', '#00A86B', '#4B0082', '#DAA520'].map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.colorButton, { backgroundColor: color }]}
              />
            ))}
          </View>
        </View>
        
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>서화첩에 보관</Text>
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
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#8B4513',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A4A4A',
    marginBottom: 24,
  },
  diarySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B4513',
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#DAA520',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
    color: '#2C2C2C',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  charCount: {
    textAlign: 'right',
    color: '#8B8680',
    fontSize: 12,
    marginTop: 4,
  },
  drawingSection: {
    marginBottom: 24,
  },
  drawingCanvas: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  drawingText: {
    fontSize: 16,
    color: '#8B8680',
  },
  colorPalette: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: 'rgba(139, 69, 19, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default WriteScreen;