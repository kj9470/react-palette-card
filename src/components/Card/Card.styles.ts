import styled from "@emotion/styled";
import type { CardColor, CardSize } from "./Card.types";

export const colorPalette: Record<CardColor, string> = {
  red: "linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)",
  orange: "linear-gradient(135deg, #FFB347 0%, #FFD194 100%)",
  yellow: "linear-gradient(135deg, #FFF176 0%, #FFD54F 100%)",
  green: "linear-gradient(135deg, #A8E6CF 0%, #DCEDC1 100%)",
  blue: "linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)",
  navy: "linear-gradient(135deg, #BDBBFF 0%, #8BA6FF 100%)",
  violet: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
};

const sizeStyles = {
  sm: {
    width: "220px",
    height: "120px",
    title: "16px",
    description: "12px",
    image: "40px",
  },
  md: {
    width: "300px",
    height: "160px",
    title: "20px",
    description: "14px",
    image: "56px",
  },
  lg: {
    width: "380px",
    height: "200px",
    title: "24px",
    description: "16px",
    image: "72px",
  },
};

export const CardContainer = styled.div<{
  color: CardColor;
  size: CardSize;
  shadow: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
  border-radius: 20px;
  background: ${({ color }) => colorPalette[color]};
  box-shadow: ${({ shadow }) =>
    shadow ? "0 12px 24px rgba(0,0,0,0.12)" : "none"};
  width: ${({ size }) => sizeStyles[size].width};
  height: ${({ size }) => sizeStyles[size].height};
  transition: transform 0.2s ease;
  color: #333;
`;

export const CardImage = styled.img<{ size: CardSize }>`
  width: ${({ size }) => sizeStyles[size].image};
  height: ${({ size }) => sizeStyles[size].image};
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  overflow: hidden;
`;

export const CardTitle = styled.div<{ size: CardSize }>`
  font-size: ${({ size }) => sizeStyles[size].title};
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardDescription = styled.div<{ size: CardSize }>`
  font-size: ${({ size }) => sizeStyles[size].description};
  font-weight: 400;
  opacity: 0.85;
  line-height: 1.4;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.6) 50%,
    transparent 54%
  );
  filter: brightness(1.05) opacity(0.3);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 1;
`;
