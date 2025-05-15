export type CardColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "navy"
  | "violet";
export type CardSize = "sm" | "md" | "lg";

export interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  color?: CardColor;
  size?: CardSize;
  shadow?: boolean;
}
