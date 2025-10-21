import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

interface TraditionalPatternProps {
  type?: 'border' | 'corner' | 'background';
  size?: number;
  color?: string;
}

const TraditionalPattern: React.FC<TraditionalPatternProps> = ({ 
  type = 'border', 
  size = 100, 
  color = '#DAA520' 
}) => {
  if (type === 'corner') {
    return (
      <Svg width={size} height={size} style={styles.pattern}>
        {/* 무늬 모서리 장식 */}
        <Path
          d={`M0,0 L${size * 0.3},0 L${size * 0.3},${size * 0.1} L${size * 0.1},${size * 0.1} L${size * 0.1},${size * 0.3} L0,${size * 0.3} Z`}
          fill={color}
          opacity={0.3}
        />
        <Circle
          cx={size * 0.15}
          cy={size * 0.15}
          r={size * 0.05}
          fill={color}
          opacity={0.5}
        />
      </Svg>
    );
  }

  if (type === 'background') {
    return (
      <View style={[styles.backgroundPattern, { width: size, height: size }]}>
        <Svg width={size} height={size} style={styles.pattern}>
          {/* 구름 무늬 */}
          <Path
            d={`M${size * 0.2},${size * 0.5} Q${size * 0.3},${size * 0.3} ${size * 0.5},${size * 0.4} T${size * 0.8},${size * 0.5}`}
            stroke={color}
            strokeWidth={2}
            fill="none"
            opacity={0.2}
          />
          <Path
            d={`M${size * 0.1},${size * 0.7} Q${size * 0.4},${size * 0.6} ${size * 0.6},${size * 0.7} T${size * 0.9},${size * 0.8}`}
            stroke={color}
            strokeWidth={2}
            fill="none"
            opacity={0.2}
          />
        </Svg>
      </View>
    );
  }

  // Default border pattern
  return (
    <Svg width={size} height={size} style={styles.pattern}>
      {/* 전통 테두리 무늬 */}
      <Line
        x1={size * 0.1}
        y1={0}
        x2={size * 0.1}
        y2={size}
        stroke={color}
        strokeWidth={2}
        opacity={0.3}
      />
      <Line
        x1={size * 0.9}
        y1={0}
        x2={size * 0.9}
        y2={size}
        stroke={color}
        strokeWidth={2}
        opacity={0.3}
      />
      <Line
        x1={0}
        y1={size * 0.1}
        x2={size}
        y2={size * 0.1}
        stroke={color}
        strokeWidth={2}
        opacity={0.3}
      />
      <Line
        x1={0}
        y1={size * 0.9}
        x2={size}
        y2={size * 0.9}
        stroke={color}
        strokeWidth={2}
        opacity={0.3}
      />
      
      {/* 모서리 장식 */}
      <Circle cx={size * 0.1} cy={size * 0.1} r={3} fill={color} opacity={0.5} />
      <Circle cx={size * 0.9} cy={size * 0.1} r={3} fill={color} opacity={0.5} />
      <Circle cx={size * 0.1} cy={size * 0.9} r={3} fill={color} opacity={0.5} />
      <Circle cx={size * 0.9} cy={size * 0.9} r={3} fill={color} opacity={0.5} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  pattern: {
    position: 'absolute',
  },
  backgroundPattern: {
    position: 'absolute',
    opacity: 0.1,
  },
});

export default TraditionalPattern;