"use client";

import * as Icons from "@radix-ui/react-icons";
import * as additionalIcons from "../additionalIcons/IconList";

interface DynamicIconProps {
  name: string; // <- note: just string, no keyof typing
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export default function DynamicIcon({
  name,
  size = 24,
  color = "currentColor",
  style,
}: DynamicIconProps) {
  const IconComponent = (Icons as any)[name] || (additionalIcons as any)[name]; // <- forced lookup

  if (!IconComponent) {
    return null; // fallback if not found
  }

  return (
    <IconComponent width={size} height={size} color={color} style={style} />
  );
}
