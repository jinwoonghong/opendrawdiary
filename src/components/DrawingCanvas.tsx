import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface Point {
  x: number;
  y: number;
}

interface DrawingPath {
  points: Point[];
  color: string;
  smoothedPath?: string;
}

interface DrawingCanvasProps {
  color: string;
  style?: any;
}

const DrawingCanvas = React.forwardRef<any, DrawingCanvasProps>(({ color, style }, ref) => {
  const [paths, setPaths] = useState<DrawingPath[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);

  // 부드러운 곡선 생성 (베지어 곡선)
  const smoothPath = (points: Point[]): string => {
    if (points.length < 2) return '';
    
    let path = `M${points[0].x},${points[0].y}`;
    
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      path += ` Q${points[i].x},${points[i].y} ${xc},${yc}`;
    }
    
    // 마지막 점 처리
    if (points.length > 1) {
      const lastPoint = points[points.length - 1];
      path += ` L${lastPoint.x},${lastPoint.y}`;
    }
    
    return path;
  };

  // 붓 압력 효과 (선 두께 변화)
  const getStrokeWidth = (points: Point[], index: number): number => {
    if (points.length < 2) return 3;
    
    // 속도 계산
    const speed = index > 0 ? 
      Math.sqrt(
        Math.pow(points[index].x - points[index - 1].x, 2) + 
        Math.pow(points[index].y - points[index - 1].y, 2)
      ) : 0;
    
    // 빠를수록 얇게, 느릴수록 두껍게 (붓 효과)
    const baseWidth = 4;
    const width = Math.max(1.5, Math.min(6, baseWidth - speed * 0.1));
    
    return width;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setCurrentPath([{ x: locationX, y: locationY }]);
    },
    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setCurrentPath(prev => {
        const newPoint = { x: locationX, y: locationY };
        
        // 너무 가까운 점은 추가하지 않음 (부드러움 개선)
        if (prev.length > 0) {
          const lastPoint = prev[prev.length - 1];
          const distance = Math.sqrt(
            Math.pow(newPoint.x - lastPoint.x, 2) + 
            Math.pow(newPoint.y - lastPoint.y, 2)
          );
          
          if (distance < 2) return prev; // 너무 가까우면 무시
        }
        
        return [...prev, newPoint];
      });
    },
    onPanResponderRelease: () => {
      if (currentPath.length > 1) {
        const smoothedPath = smoothPath(currentPath);
        setPaths(prev => [...prev, { 
          points: currentPath, 
          color,
          smoothedPath 
        }]);
      }
      setCurrentPath([]);
    },
  });

  const clear = () => {
    setPaths([]);
    setCurrentPath([]);
  };

  const getImageData = () => {
    // 개선된 데이터 저장
    return JSON.stringify({ 
      paths: paths.map(p => ({
        points: p.points,
        color: p.color,
        smoothedPath: p.smoothedPath
      })), 
      timestamp: Date.now() 
    });
  };

  useImperativeHandle(ref, () => ({
    clear,
    getImageData,
  }), [paths]);

  // 현재 그리는 중인 경로를 부드럽게 표시
  const currentSmoothedPath = currentPath.length > 1 ? smoothPath(currentPath) : '';

  return (
    <View style={[styles.container, style]} {...panResponder.panHandlers}>
      <Svg style={styles.svg}>
        {/* 완성된 경로들 */}
        {paths.map((pathData, index) => (
          <Path
            key={index}
            d={pathData.smoothedPath || ''}
            stroke={pathData.color}
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.9}
          />
        ))}
        
        {/* 현재 그리는 중인 경로 */}
        {currentSmoothedPath && (
          <Path
            d={currentSmoothedPath}
            stroke={color}
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.8}
          />
        )}
      </Svg>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F3', // 한지색 배경
    borderWidth: 2,
    borderColor: '#DAA520', // 금색 테두리
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  svg: {
    flex: 1,
  },
});

export default DrawingCanvas;