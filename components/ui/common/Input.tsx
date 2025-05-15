import { useEffect, useState } from "react";
import { Flex, Strong, TextField, Text } from "@radix-ui/themes";

import Icon from "./Icon";

export default function InputField({
  id,
  gap,
  label,
  value,
  type,
  name,
  onChange,
  placeholder,
  errors,
  iconName = "",
  iconPosition,
  iconClick,
  radius = "4px",
  size = "2",
  disabled = false,
  iconSize = 24,
  className,
}: {
  key?: string;
  id: string;
  gap: string;
  name?: string;
  label?: string;
  type?:
    | "number"
    | "search"
    | "time"
    | "text"
    | "hidden"
    | "tel"
    | "url"
    | "email"
    | "date"
    | "datetime-local"
    | "month"
    | "password"
    | "week"
    | undefined;
  value: string | any;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | any
  ) => void;
  placeholder?: string;
  errors?: any;
  iconName?: string;
  iconPosition?: "left" | "right" | undefined;
  iconClick?: any;
  radius?: string;
  size?: "2" | "1" | "3" | undefined;
  disabled?: boolean;
  iconSize?: number;
  className?: string;
}) {
  const handleClick = () => {
    if (iconName === "EyeNoneIcon") {
      iconClick("EyeOpenIcon");
    } else if (iconName === "EyeOpenIcon") {
      iconClick("EyeNoneIcon");
    }
  };

  return (
    <Flex direction="column" gap={gap}>
      {label && (
        <Strong className={`form-label`}>
          {label}
          {className === "required" && (
            <Text as="span" className="required"></Text>
          )}
        </Strong>
      )}
      {
        <TextField.Root
          key={id}
          id={id}
          placeholder={placeholder}
          size={size}
          value={value}
          type={type}
          name={name}
          style={{
            borderRadius: radius,
          }}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        >
          {iconName && iconPosition && (
            <TextField.Slot
              side={iconPosition}
              onClick={(e) => (iconClick ? iconClick(e) : handleClick())}
              style={{ cursor: "pointer" }}
            >
              <Icon name={iconName} size={iconSize} />
            </TextField.Slot>
          )}
        </TextField.Root>
      }
      {errors && <p className="text-red form-error">{errors.message}</p>}
    </Flex>
  );
}
