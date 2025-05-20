# 🎨 react-palette-card

> A pastel gradient-style React card component

## ✨ Features

- Beautiful pastel gradient backgrounds
- Responsive size options: sm, md, lg with proportional scaling
- 7 color palette options
- Optional profile image support
- Toggleable shadow effect
- Rotation when hovering

## 📦 Installation

```bash
yarn add react-palette-card
# or
npm install react-palette-card
```

## 🧾 Props

| Name          | Type                         | Description                                         | Required |
| ------------- | ---------------------------- | --------------------------------------------------- | -------- |
| `title`       | `string`                     | Card title text (e.g., name, role)                  | ✅       |
| `description` | `string`                     | Card description (e.g., job, bio)                   | ✅       |
| `imageSrc`    | `string` (URL)               | URL or local path of profile image                  | ☑️       |
| `color`       | `'red'` \| `'orange'` \| ... | Background color palette ('blue' by default)        | ☑️       |
| `size`        | `'sm'` \| `'md'` \| `'lg'`   | Card size ('md' by default)                         | ☑️       |
| `shadow`      | `boolean`                    | Whether to apply a shadow effect (false by default) | ☑️       |

## 📂 Folder Structure

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

## ✍🏻 Usage

```javascript
import { Card } from "react-palette-card";
import profile from "./assets/profile.png";

<Card
  title=""
  description=""
  imageSrc={profile}
  color="green"
  size="md"
  shadow
/>;
```

## 📄 License

[MIT](https://web.mit.edu/)

Feel free to use, share, and contribute!
