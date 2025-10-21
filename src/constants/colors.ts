export const COLORS = {
  // 국립중앙박물관 inspired primary colors
  primary: '#8B4513', // Museum brown - 단청색
  secondary: '#1a1a2e', // Museum navy - 박물관 남색
  accent: '#DAA520', // Museum gold - 황금색
  crimson: '#8B0000', // Museum crimson - 진홍색
  
  // 조선시대 오방색 (Five Directions Colors)
  traditionalRed: '#8B4513', // 적색 - 주황빛 갈색 (단청)
  traditionalBlue: '#2F4F4F', // 청색 - 남색 (청자)
  traditionalYellow: '#DAA520', // 황색 - 황금색 (황룡)
  
  // 전통 색상
  indigo: '#4B0082', // 자색 - 진보라
  jade: '#00A86B', // 녹색 - 옥색
  
  // 중성색 (한지, 먹) - Museum inspired
  paper: '#FAF8F3', // 한지색 - Museum paper background
  ink: '#2C2C2C', // 먹색 - Museum text primary
  charcoal: '#4A4A4A', // 숯색 - Museum text secondary
  ash: '#8B8680', // 재색 - Museum muted text
  smoke: '#F5F5F5', // 연기색 - Museum light background
  warmBeige: '#F8F6F0', // 따뜻한 베이지 - Museum accent background
  
  // 배경색 - Enhanced with museum aesthetic
  background: '#FFFFFF', // Museum white primary
  backgroundSecondary: '#FAF8F3', // 한지 배경
  backgroundTertiary: '#F8F6F0', // Museum accent background
  backgroundDark: '#1a1a2e', // Museum navy dark
  
  // 텍스트 색상 - Museum hierarchy
  text: '#2C2C2C', // 먹색 텍스트 - Primary text
  textSecondary: '#4A4A4A', // 숯색 텍스트 - Secondary text
  textTertiary: '#8B8680', // 재색 텍스트 - Tertiary text
  textLight: '#FAF8F3', // 한지색 텍스트 - Light text
  textAccent: '#8B4513', // Museum brown - Accent text
  
  // 의미 색상 - Museum semantic colors
  success: '#00A86B', // 옥색 (성공)
  warning: '#DAA520', // 황금색 (경고)
  error: '#8B0000', // 진홍색 (오류)
  info: '#1a1a2e', // 남색 (정보)
  
  // 그림 색상 (전통 물감 + Museum palette)
  drawing: [
    '#2C2C2C', // 먹
    '#8B4513', // 주홍
    '#00A86B', // 취록
    '#4B0082', // 자주
    '#DAA520', // 황금
    '#1a1a2e', // 박물관 남색
    '#8B0000', // 진홍색
  ],
  
  // 장식 색상 - Museum metallics
  gold: '#DAA520', // 금색
  silver: '#C0C0C0', // 은색
  bronze: '#CD7F32', // 동색
  
  // Museum UI specific colors
  border: '#E5E5E5', // Museum border
  shadow: 'rgba(0,0,0,0.08)', // Museum shadow
  overlay: 'rgba(0,0,0,0.4)', // Museum overlay
};

export const SIZES = {
  // Museum inspired spacing system
  borderRadius: 8, // Museum card radius
  borderRadiusSmall: 4, // Museum button radius
  borderRadiusLarge: 12, // Museum featured elements
  
  // Spacing - Museum 8pt grid system
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Component sizes
  buttonHeight: 48,
  buttonHeightSmall: 36,
  buttonHeightLarge: 56,
  inputHeight: 48,
  
  // Borders
  border: 2, // 전통 테두리 두께
  borderThin: 1, // Museum thin border
  borderThick: 3, // Museum thick border
  
  // Shadows - Museum elevation system
  shadow: {
    subtle: '0 2px 8px rgba(0,0,0,0.08)',
    medium: '0 4px 16px rgba(0,0,0,0.12)',
    strong: '0 8px 32px rgba(0,0,0,0.16)',
  },
  
  // Typography scale
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },
};