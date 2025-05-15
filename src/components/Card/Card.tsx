import React from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  CardTitle,
  CardDescription,
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
  return (
    <CardContainer color={color} size={size} shadow={shadow}>
      {imageSrc && <CardImage src={imageSrc} alt={title} size={size} />}
      <CardText>
        <CardTitle size={size}>{title}</CardTitle>
        <CardDescription size={size}>{description}</CardDescription>
      </CardText>
    </CardContainer>
  );
};
