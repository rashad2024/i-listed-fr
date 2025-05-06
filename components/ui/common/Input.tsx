import { Flex, Text, TextField, TextArea } from "@radix-ui/themes";

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
  hidden,
}: {
  id: string;
  gap: string;
  label?: string;
  type:
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
    | "textarea"
    | undefined;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  errors?: any;
  iconName?: string;
  iconPosition?: "left" | "right" | undefined;
  iconClick?: any;
  radius?: string;
  size?: "2" | "1" | "3" | undefined;
  hidden?: boolean;
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
      <Text>{label}</Text>
      {type === "textarea" ? (
        <TextArea
          key={id}
          id={id}
          placeholder={placeholder}
          size={size}
          value={value}
          style={{ borderRadius: radius }}
          onChange={onChange}
        />
      ) : (
        <TextField.Root
          id={id}
          placeholder={placeholder}
          size={size}
          value={value}
          type={type}
          style={{ borderRadius: radius }}
          onChange={(e) => onChange(e)}
        >
          {iconName && iconPosition && (
            <TextField.Slot
              side={iconPosition}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <Icon name={iconName} size={16} />
            </TextField.Slot>
          )}
        </TextField.Root>
      )}
      {errors && <p className="text-red form-error">{errors.message}</p>}
    </Flex>
  );
}
