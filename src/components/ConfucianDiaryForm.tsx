import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { TYPOGRAPHY, SIZES } from '../constants';

interface ConfucianDiaryFormProps {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
}

const ConfucianDiaryForm: React.FC<ConfucianDiaryFormProps> = ({ 
  value, 
  onChangeText, 
  maxLength = 150 
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    title: {
      ...TYPOGRAPHY.heading,
      fontSize: 18,
      color: colors.text,
      marginBottom: 12,
      textAlign: 'center',
    },
    formContainer: {
      backgroundColor: colors.background,
      borderWidth: 2,
      borderColor: colors.gold,
      borderRadius: SIZES.borderRadius,
      padding: 16,
    },
    section: {
      marginBottom: 12,
    },
    sectionTitle: {
      ...TYPOGRAPHY.small,
      color: colors.textSecondary,
      marginBottom: 4,
      fontWeight: '600',
    },
    input: {
      ...TYPOGRAPHY.body,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.smoke,
      borderRadius: 4,
      padding: 8,
      minHeight: 40,
      textAlignVertical: 'top',
      backgroundColor: colors.paper,
    },
    mainInput: {
      minHeight: 60,
      fontSize: 16,
      fontWeight: '500',
    },
    reflectionInput: {
      minHeight: 50,
      fontStyle: 'italic',
    },
    charCount: {
      ...TYPOGRAPHY.caption,
      color: colors.textSecondary,
      textAlign: 'right',
      marginTop: 8,
    },
    guidance: {
      ...TYPOGRAPHY.caption,
      color: colors.textSecondary,
      textAlign: 'center',
      marginTop: 8,
      fontStyle: 'italic',
    },
  });

  // 충효일기 양식 파싱
  const parseDiaryText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const result = {
      daily: '',
      loyalty: '',
      filial: '',
      reflection: ''
    };

    lines.forEach(line => {
      if (line.includes('오늘의 일:')) {
        result.daily = line.replace('오늘의 일:', '').trim();
      } else if (line.includes('충심:')) {
        result.loyalty = line.replace('충심:', '').trim();
      } else if (line.includes('효심:')) {
        result.filial = line.replace('효심:', '').trim();
      } else if (line.includes('반성:')) {
        result.reflection = line.replace('반성:', '').trim();
      }
    });

    return result;
  };

  const getStructuredText = () => {
    const parsed = parseDiaryText(value);
    
    if (!parsed.daily && !parsed.loyalty && !parsed.filial && !parsed.reflection) {
      return `오늘의 일:

충심:

효심:

반성:`;
    }

    let result = '';
    if (parsed.daily) result += `오늘의 일: ${parsed.daily}\n`;
    else result += '오늘의 일: \n';
    
    if (parsed.loyalty) result += `충심: ${parsed.loyalty}\n`;
    else result += '충심: \n';
    
    if (parsed.filial) result += `효심: ${parsed.filial}\n`;
    else result += '효심: \n';
    
    if (parsed.reflection) result += `반성: ${parsed.reflection}`;
    else result += '반성: ';

    return result.trim();
  };

  const handleTextChange = (text: string) => {
    // 구조화된 형식 유지
    const structuredText = getStructuredText();
    
    // 사용자가 실제로 입력한 부분만 업데이트
    if (text.length > value.length) {
      // 문자 추가
      onChangeText(text);
    } else {
      // 문자 삭제
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>충효일기</Text>
      
      <View style={styles.formContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>오늘의 일</Text>
          <TextInput
            style={[styles.input, styles.mainInput]}
            placeholder="오늘 있었던 일을 간략히 기록하시지요"
            placeholderTextColor={colors.textSecondary}
            value={parseDiaryText(value).daily}
            onChangeText={(text) => {
              const lines = value.split('\n');
              lines[0] = `오늘의 일: ${text}`;
              onChangeText(lines.join('\n'));
            }}
            multiline
            maxLength={50}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>충심 (나라와 사회에 대한 마음)</Text>
          <TextInput
            style={[styles.input, styles.reflectionInput]}
            placeholder="나라와 공동체를 위한 마음을 적으시지요"
            placeholderTextColor={colors.textSecondary}
            value={parseDiaryText(value).loyalty}
            onChangeText={(text) => {
              const lines = value.split('\n');
              const loyaltyIndex = lines.findIndex(line => line.includes('충심:'));
              if (loyaltyIndex !== -1) {
                lines[loyaltyIndex] = `충심: ${text}`;
              } else {
                lines.splice(1, 0, `충심: ${text}`);
              }
              onChangeText(lines.join('\n'));
            }}
            multiline
            maxLength={40}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>효심 (부모님과 가족에 대한 마음)</Text>
          <TextInput
            style={[styles.input, styles.reflectionInput]}
            placeholder="부모님과 가족에 대한 마음을 적으시지요"
            placeholderTextColor={colors.textSecondary}
            value={parseDiaryText(value).filial}
            onChangeText={(text) => {
              const lines = value.split('\n');
              const filialIndex = lines.findIndex(line => line.includes('효심:'));
              if (filialIndex !== -1) {
                lines[filialIndex] = `효심: ${text}`;
              } else {
                lines.splice(2, 0, `효심: ${text}`);
              }
              onChangeText(lines.join('\n'));
            }}
            multiline
            maxLength={40}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>반성 (오늘의 돌아보기)</Text>
          <TextInput
            style={[styles.input, styles.reflectionInput]}
            placeholder="오늘을 돌아보며 반성할 점을 적으시지요"
            placeholderTextColor={colors.textSecondary}
            value={parseDiaryText(value).reflection}
            onChangeText={(text) => {
              const lines = value.split('\n');
              const reflectionIndex = lines.findIndex(line => line.includes('반성:'));
              if (reflectionIndex !== -1) {
                lines[reflectionIndex] = `반성: ${text}`;
              } else {
                lines.push(`반성: ${text}`);
              }
              onChangeText(lines.join('\n'));
            }}
            multiline
            maxLength={50}
          />
        </View>
      </View>

      <Text style={styles.guidance}>
        "충효는 만행의 근본이니라" - 성리학 가르침
      </Text>
      
      <Text style={styles.charCount}>
        {value.length}/{maxLength} 자
      </Text>
    </View>
  );
};

export default ConfucianDiaryForm;