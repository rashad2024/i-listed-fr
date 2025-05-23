"use client";

import { Select, Flex, Strong, Text } from "@radix-ui/themes";
import * as SelectItem from "@radix-ui/react-select";
import Icon from "./Icon";

export default function SelectField({
  id,
  gap,
  label,
  name,
  optionList,
  onChange,
  value,
  position,
  size = "2",
  placeholder,
  disabled = false,
  errors,
  className,
}: {
  id?: string;
  gap: string;
  label: string;
  name?: string;
  optionList: Array<{
    id: string;
    name: string;
    hidden?: boolean;
    symbol?: string;
    label?: string;
  }>;
  onChange: Function;
  value: any;
  position: "item-aligned" | "popper" | undefined;
  size?: "2" | "1" | "3" | undefined;
  placeholder?: string;
  disabled?: boolean;
  errors?: any;
  className?: string;
}) {
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
      <Select.Root
        key={id}
        size={size}
        name={name}
        value={value}
        onValueChange={(data) => onChange(data)}
        defaultValue={value}
        disabled={disabled}
      >
        <Select.Trigger placeholder={placeholder}>
          {optionList?.find((option) => option.id?.toString() == value)
            ?.symbol ||
            optionList?.find((option) => option.id?.toString() == value)
              ?.label ||
            optionList?.find((option) => option.id?.toString() == value)?.name}
          {/* <SelectItem.Value
            placeholder={placeholder}
            defaultValue={parseInt(value)}
          /> */}
          <SelectItem.Icon>
            <Icon name="ChevronDown" />
          </SelectItem.Icon>
        </Select.Trigger>
        <Select.Content position={position}>
          {optionList?.map(
            (option) =>
              !option.hidden && (
                <Select.Item
                  value={option?.id?.toString()}
                  key={option?.id}
                  className="select-item"
                >
                  {option.symbol ? option.symbol : option.label || option.name}
                  {/* <SelectItem.ItemIndicator className="indicator">
                    ✔
                  </SelectItem.ItemIndicator> */}
                </Select.Item>
              )
          )}
        </Select.Content>
      </Select.Root>
      {errors && <p className="text-red form-error">{errors.message}</p>}
    </Flex>
  );
}
