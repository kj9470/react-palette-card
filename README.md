# 🎨 react-palette-card

> 파스텔 그라데이션 스타일의 React 카드 컴포넌트

## ✨ Features

- 파스텔 그라데이션 배경
- `sm`, `md`, `lg` 사이즈별 자동 비율 조정
- 7가지 컬러 팔레트
- 이미지 삽입
- 그림자 효과

## 📦 설치

```bash
yarn add react-palette-card
# 또는
npm install react-palette-card
```

## 🧾 Props

| 이름          | 타입                         | 설명                               | 필수 |
| ------------- | ---------------------------- | ---------------------------------- | ---- |
| `title`       | `string`                     | 카드 제목                          | ✅   |
| `description` | `string`                     | 카드 설명                          | ✅   |
| `imageSrc`    | `string` (URL)               | 프로필 이미지 URL                  | ❌   |
| `color`       | `'red'` \| `'orange'` \| ... | 카드 색상 (기본값: `'blue'`)       | ❌   |
| `size`        | `'sm'` \| `'md'` \| `'lg'`   | 카드 크기 (기본값: `'md'`)         | ❌   |
| `shadow`      | `boolean`                    | 그림자 효과 여부 (기본값: `false`) | ❌   |

## 📂 폴더 구조

```bash
src/
┣ components/
┃ ┗ Card/
┃    ┣ Card.tsx
┃    ┣ Card.styles.ts
┃    ┣ Card.types.ts
┃    ┗ index.ts
┣ App.tsx
┣ main.tsx
```

## 📄 라이선스

MIT
