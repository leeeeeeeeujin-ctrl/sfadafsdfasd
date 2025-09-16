# 🏰 Raid Starter Kit

멀티플레이어 웹 기반 레이드 게임 시스템입니다.

## ✨ 주요 기능

- **실시간 채팅**: 일반 채팅 + AI 채팅 (발화권 제어)
- **방 관리**: 1~12 슬롯, 관전자 지원
- **캐릭터 시스템**: 이미지 업로드, 스킬 설정
- **실시간 통신**: WebSocket 기반
- **반응형 UI**: 모바일 친화적 디자인

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 서버 실행
```bash
npm start
```

### 3. 브라우저에서 접속
```
http://localhost:8080
```

## 📁 프로젝트 구조

```
raid-starter-kit/
├── server/
│   └── server.js          # Express 서버 + WebSocket
├── public/
│   ├── styles/
│   │   └── base.css       # 기본 스타일
│   ├── core/
│   │   ├── store.js       # 로컬 스토리지 관리
│   │   ├── api.js         # API 통신
│   │   └── ws.js          # WebSocket 통신
│   ├── components/
│   │   ├── chat-log.js    # 채팅 로그
│   │   ├── chat-general.js # 일반 채팅
│   │   ├── chat-ai.js     # AI 채팅
│   │   └── slots-grid.js  # 슬롯 그리드
│   └── pages/
│       ├── lobby.html     # 로비
│       ├── room.html      # 방
│       ├── character.html # 캐릭터 생성
│       └── roster.html    # 로스터
└── package.json
```

## 🎮 사용법

1. **로비에서 방 만들기**: 방 이름, 설명, 최대 인원 설정
2. **캐릭터 생성**: 이미지 업로드, 이름, 스킬 설정
3. **방 참가**: 슬롯 선택 후 캐릭터로 참가
4. **채팅**: 일반 채팅과 AI 채팅 사용
5. **게임 시작**: 호스트가 게임 시작

## 🛠️ 기술 스택

- **Backend**: Node.js, Express.js, WebSocket
- **Frontend**: Vanilla JavaScript (ES6+), CSS3
- **Storage**: LocalStorage (클라이언트), In-Memory (서버)
- **File Upload**: Multer

## 📝 라이선스

MIT License
