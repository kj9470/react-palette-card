import React, { useRef } from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  CardTitle,
  CardDescription,
  Overlay,
} from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  color = "blue",
  size = "md",
  shadow = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    const { left, top } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateY = (-1 / 10) * x + 10;
    const rotateX = (4 / 30) * y - 10;

    overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;

    container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    overlay.style.filter = `opacity(0)`;
    container.style.transform = `perspective(350px) rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <CardContainer
      ref={containerRef}
      color={color}
      size={size}
      shadow={shadow}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Overlay ref={overlayRef} />
      {imageSrc && <CardImage src={imageSrc} alt={title} size={size} />}
      <CardText>
        <CardTitle size={size}>{title}</CardTitle>
        <CardDescription size={size}>{description}</CardDescription>
      </CardText>
    </CardContainer>
  );
};
