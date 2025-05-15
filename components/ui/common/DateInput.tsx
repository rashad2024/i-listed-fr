// components/DateInputWithIcon.tsx
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import InputField from "./Input";
import { Flex, Text } from "@radix-ui/themes";

import "@/styles/components/_datepicker.scss";

interface DateInputWithIconProps {
  value: any;
  onChange: (date: any) => void;
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
  format?: string;
  disabled?: boolean;
  dateFormat?: string;
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
      disabled,
    },
    ref
  ) => (
    <Flex direction="row" gap={gap} onClick={onClick} aria-disabled={disabled}>
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
        disabled={disabled}
      />
    </Flex>
  )
);

const DateInputWithIcon: React.FC<DateInputWithIconProps> = ({
  value = new Date(),
  onChange,
  label,
  id,
  gap,
  type,
  placeholder,
  iconName,
  iconPosition,
  size,
  disabled,
}) => {
  const dateFormat = id === "buildingYear" ? "yyyy" : "dd-MM-YYYY";
  const showYearPicker = id === "buildingYear";

  // const [date, setDate] = useState(new Date());

  return (
    <Flex direction="column" gap={gap}>
      <Text className="form-label">{label}</Text>
      <DatePicker
        selected={showYearPicker ? new Date(`${value}-01-01`) : value}
        onChange={(date) =>
          onChange(showYearPicker ? date?.getFullYear() : date)
        }
        disabled={disabled}
        placeholderText={showYearPicker ? "YYYY" : placeholder}
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
            disabled={disabled}
          />
        }
        showYearPicker={showYearPicker}
        dateFormat={dateFormat}
        portalId="property-form"
        // minDate={new Date(1900, 0, 1)}
        // maxDate={new Date()}
      />
    </Flex>
  );
};

export default DateInputWithIcon;
