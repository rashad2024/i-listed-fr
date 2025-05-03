"use client";

import { Select, Flex, Text } from "@radix-ui/themes";
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
}) {
  console.log("value", value);
  return (
    <Flex direction="column" gap={gap}>
      <Text>{label}</Text>
      <Select.Root
        key={id}
        size={size}
        value={value}
        onValueChange={(data) => onChange(data)}
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
    </Flex>
  );
}
