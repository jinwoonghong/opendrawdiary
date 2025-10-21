export const TYPOGRAPHY = {
  // 조선시대 서체 스타일
  title: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    color: '#2C2C2C', // 먹색
    letterSpacing: 2, // 자간 조절
    lineHeight: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600' as const,
    color: '#2C2C2C',
    letterSpacing: 1,
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    color: '#2C2C2C',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal' as const,
    color: '#8B8680', // 재색
    lineHeight: 16,
  },
  button: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#FAF8F3', // 한지색
    letterSpacing: 1,
  },
  // 전통적인 강조 스타일
  emphasis: {
    fontSize: 20,
    fontWeight: 'bold' as const,
    color: '#8B4513', // 단청색
    letterSpacing: 1,
  },
  // 작은 글씨 (주석)
  small: {
    fontSize: 14,
    fontWeight: 'normal' as const,
    color: '#8B8680',
    lineHeight: 20,
  },
};