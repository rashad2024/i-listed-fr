import { Flex, Strong, TextField } from "@radix-ui/themes";

import Icon from "./Icon";

export default function InputField({
  id,
  gap,
  label,
  value,
  type,
  onChange,
  placeholder,
  errors,
  iconName,
  iconPosition,
  iconClick,
  radius = "4px",
  size = "2",
  disabled = false,
  iconSize = 24,
}: {
  key?: string;
  id: string;
  gap: string;
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
      {label && <Strong className="form-label">{label}</Strong>}
      {
        <TextField.Root
          id={id}
          placeholder={placeholder}
          size={size}
          value={value}
          type={type}
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
