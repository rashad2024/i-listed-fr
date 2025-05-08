"use client";

import { Select, Flex, Strong } from "@radix-ui/themes";
import { useState } from "react";

export default function SelectField({
  id,
  gap,
  label,
  optionList,
  onChange,
  value,
  position,
  size = "2",
  placeholder,
  disabled = false,
  errors,
}: {
  id?: string;
  gap: string;
  label: string;
  optionList: Array<{ label: string; value: string; hidden?: boolean }>;
  onChange: Function;
  value: any;
  position: "item-aligned" | "popper" | undefined;
  size?: "2" | "1" | "3" | undefined;
  placeholder?: string;
  disabled?: boolean;
  errors?: any;
}) {
  return (
    <Flex direction="column" gap={gap}>
      <Strong className="form-label">{label}</Strong>
      <Select.Root
        key={id}
        size={size}
        value={value}
        onValueChange={(data) => onChange(data)}
        disabled={disabled}
      >
        <Select.Trigger placeholder={placeholder}></Select.Trigger>
        <Select.Content position={position}>
          {optionList.map(
            (option) =>
              !option.hidden && (
                <Select.Item value={option.value} key={option.value}>
                  {option.label}
                </Select.Item>
              )
          )}
        </Select.Content>
      </Select.Root>
      {errors && <p className="text-red form-error">{errors.message}</p>}
    </Flex>
  );
}
