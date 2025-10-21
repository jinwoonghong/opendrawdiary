import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { getDiaries } from '../utils/storage';
import { Diary } from '../types/diary';
import { useTheme } from '../contexts/ThemeContext';
import { COLORS, SIZES } from '../constants';

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

const ListScreen = () => {
  const navigation = useNavigation<ListScreenNavigationProp>();
  const { colors } = useTheme();
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    loadDiaries();
  }, []);

  const loadDiaries = async () => {
    const diaryList = await getDiaries();
    setDiaries(diaryList);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listContainer: {
      padding: SIZES.padding.md,
      gap: SIZES.padding.md,
    },
    diaryItem: {
      backgroundColor: colors.background,
      padding: SIZES.padding.lg,
      borderRadius: SIZES.borderRadius,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: SIZES.borderThin,
      borderColor: colors.border,
      marginBottom: SIZES.padding.sm,
    },
    diaryHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SIZES.padding.sm,
      paddingBottom: SIZES.padding.xs,
      borderBottomWidth: SIZES.borderThin,
      borderBottomColor: colors.border,
    },
    diaryDate: {
      fontSize: SIZES.fontSize.lg,
      fontWeight: '600',
      color: colors.textAccent,
      letterSpacing: -0.2,
    },
    diaryTime: {
      fontSize: SIZES.fontSize.sm,
      color: colors.textTertiary,
    },
    diaryText: {
      fontSize: SIZES.fontSize.base,
      color: colors.text,
      lineHeight: SIZES.lineHeight.relaxed,
      marginBottom: SIZES.padding.sm,
    },
    drawingPlaceholder: {
      backgroundColor: colors.backgroundTertiary,
      padding: SIZES.padding.sm,
      borderRadius: SIZES.borderRadiusSmall,
      alignItems: 'center',
      borderWidth: SIZES.borderThin,
      borderColor: colors.border,
    },
    drawingText: {
      fontSize: SIZES.fontSize.sm,
      color: colors.textTertiary,
      fontWeight: '500',
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: SIZES.padding.xxl,
    },
    emptyText: {
      fontSize: SIZES.fontSize.lg,
      color: colors.textSecondary,
      marginBottom: SIZES.padding.xl,
      textAlign: 'center',
      lineHeight: SIZES.lineHeight.relaxed,
    },
    writeButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: SIZES.padding.xl,
      paddingVertical: SIZES.padding.md,
      borderRadius: SIZES.borderRadius,
      shadowColor: 'rgba(139, 69, 19, 0.2)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    writeButtonText: {
      color: colors.background,
      fontSize: SIZES.fontSize.base,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
  });

  const renderDiaryItem = ({ item }: { item: Diary }) => (
    <View style={styles.diaryItem}>
      <View style={styles.diaryHeader}>
        <Text style={styles.diaryDate}>{item.date}</Text>
        <Text style={styles.diaryTime}>
          {new Date(item.createdAt).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
      <Text style={styles.diaryText} numberOfLines={2}>
        {item.text}
      </Text>
      <View style={styles.drawingPlaceholder}>
        <Text style={styles.drawingText}>🎨 그림 포함</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {diaries.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>작성한 일기가 없습니다</Text>
          <TouchableOpacity 
            style={styles.writeButton}
            onPress={() => navigation.navigate('Write')}
          >
            <Text style={styles.writeButtonText}>첫 일기 쓰기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={diaries}
          renderItem={renderDiaryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default ListScreen;