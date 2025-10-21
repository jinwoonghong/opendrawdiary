# DrawDiary - 서화일기 앱

## 🚀 빠른 시작

### 개발 모드 실행
```bash
cd app
npm start
```

### Expo Go로 테스트
1. 스마트폰에 Expo Go 앱 설치
2. 위 명령어 실행 후 나타나는 QR코드 스캔
3. 앱 즉시 테스트 가능

### 웹 버전 테스트
```bash
cd app
npm run web
```
http://localhost:8081 에서 접속

## 📱 기능

### ✅ MVP 기능 (48시간 목표)
- [x] 일기 작성 (텍스트 140자 + 손그림)
- [x] 로컬 저장 (AsyncStorage + localStorage)
- [x] 일기 목록 (최대 5개)
- [x] 국립중앙박물관 디자인 시스템
- [x] 웹/모바일 크로스플랫폼

### 🔄 향후 기능
- [ ] 캘린더 뷰
- [ ] 검색 기능
- [ ] 클라우드 백업
- [ ] 알림 기능

## 🛠️ 기술 스택
- React Native + Expo
- TypeScript
- AsyncStorage (모바일) + localStorage (웹)
- React Navigation
- React Native SVG (그림 기능)

## 📦 배포

### Vercel 웹 배포
```bash
cd app
npm run build
vercel
```

### Expo Go 공유 (즉시 출시)
```bash
cd app
npx expo share
```
나타나는 QR코드나 링크로 즉시 공유 가능

### 앱스토어 출시 (향후)
```bash
cd app
eas build --platform all
eas submit
```

## 🎨 디자인
- 국립중앙박물관 디자인 시스템 기반
- 전통 한글 폰트 스타일
- 박물관 컬러 팔레트
- 다크모드 지원

## 📝 사용 방법
1. '새 일기 쓰기' 탭
2. 140자 이내로 오늘의 하루 작성
3. 그림 그리기 (5가지 색상)
4. 저장하기 클릭
5. 일기 목록에서 확인
