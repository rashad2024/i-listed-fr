// components/DateInputWithIcon.tsx
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import InputField from "./Input";
import { Flex, Text } from "@radix-ui/themes";

import "@/styles/components/_datepicker.scss";

interface DateInputWithIconProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  id: string;
  gap?: string;
  type?: string;
  iconName?: string;
  iconPosition?: string;
  size?: string;
}

// const CustomInput = forwardRef<HTMLInputElement, any>(
//   ({ value, onClick, placeholder }, ref) => (

//   )
// );

const CustomInput = forwardRef<HTMLInputElement, any>(
  (
    {
      id,
      gap,
      label,
      type,
      placeholder,
      iconName,
      iconPosition,
      size,
      value,
      onChange,
      onClick,
    },
    ref
  ) => (
    <Flex direction="row" gap={gap} onClick={onClick}>
      <InputField
        key={id}
        id={id}
        gap={gap}
        label={label}
        type={"text"}
        placeholder={placeholder}
        iconName={iconName}
        iconPosition={iconPosition}
        size={size}
        value={value}
        onChange={onChange}
      />
    </Flex>
  )
);

const DateInputWithIcon: React.FC<DateInputWithIconProps> = ({
  value,
  onChange,
  label,
  minDate,
  maxDate,
  id,
  gap,
  type,
  placeholder,
  iconName,
  iconPosition,
  size,
}) => {
  return (
    <Flex direction="column" gap={gap}>
      <Text>{label}</Text>
      <DatePicker
        selected={value}
        onChange={onChange}
        customInput={
          <CustomInput
            key={id}
            id={id}
            gap={gap}
            placeholder={placeholder}
            iconName={iconName}
            iconPosition={iconPosition}
            size={size}
            value={value}
          />
        }
        dateFormat="dd/MM/yyyy"
      />
    </Flex>
  );
};

export default DateInputWithIcon;
