import React, { useEffect, useState } from "react";

import { Flex, Text, Checkbox } from "@radix-ui/themes";

import ButtonInput from "./Button";
import InputField from "./Input";

const DynamicInputList = ({
  inputGroups,
  inputInfo,
  handleChange,
  disabled,
  isPreview,
  data,
}: any) => {
  const [inputs, setInputs] = useState(inputGroups);
  const [showPreviewView, setShowPreviewView] = useState(isPreview);

  let fieldId = "";

  const { id, value, label, type, onClick } = inputInfo;
  const handleChangeEvent = (index: number, event: any) => {
    const id = event.target.id;
    const value = event.target.value;
    const textInputs = inputs.filter((input: any) => input.type === "text");

    const updated = [...textInputs];

    inputs[index].value = value;

    setInputs(inputs);

    const inputFields = inputs.filter((input: any) => {
      if (input.type === "text") return input;
    });

    handleChange(
      id,
      inputFields.map((input: any) => (input.value ? input.value : ""))
    );
  };

  const handleClick = (id: any, value: any) => {
    handleChange(id, value);
    // console.log("handleClick", id, value);
  };

  const handleAddInput = (id: string) => {
    const input = inputs[inputs.length - 1];

    if (!input?.value?.length && input?.category) return;

    if (input?.category) {
      input.disabled = true;
      input.iconName = "CustomCrossIcon";
      input.iconPosition = "right";
      input.iconSize = 12;
      input.isSubmitted = true;

      setInputs(
        inputGroups.filter(
          (inputGroup: any) => !input.value || input.value !== inputGroup.value
        )
      );
    }

    if (onClick) {
      onClick(
        id,
        inputs.map((input: any) =>
          input.value && input.type === "text" ? input.value : ""
        )
      );
    }

    setInputs([...inputs, { id, type: "text", category: input.category }]);
  };

  const removeItem = (input: any) => {
    console.log("removeItem", input);
    handleChange(input.category, input.value, null, true);

    // handleChange(`${input.category}Added`, input.value);

    setInputs(
      inputGroups.filter(
        (inputGroup: any) => input.value && input.value !== inputGroup.value
      )
    );
  };

  // useEffect(() => {
  //   setInputs(inputGroups);
  // }, [inputGroups]);

  return (
    <Flex
      key={id}
      gap={"3"}
      direction={"column"}
      className="input-groups-container"
    >
      {label && <Text>{label}</Text>}
      <Flex gap={"3"} className="input-groups">
        {inputs.map((input: any, idx: number) => {
          const {
            id,
            label: inputLabel,
            value,
            type,
            placeholder,
            iconName,
            iconPosition,
            iconClick,
            disabled,
            iconSize,
            isDefault,
            category,
          } = input;
          fieldId = id || fieldId;

          if (isPreview && idx === inputs.length - 1 && !value) return;
          // console.log("input", input);
          return (
            <InputField
              key={`${fieldId}-${idx}`}
              id={`${fieldId}`}
              label={inputLabel}
              gap={"3"}
              value={value}
              type={type}
              onChange={(e: any) => handleChangeEvent(idx, e)}
              placeholder={placeholder}
              iconName={iconName}
              iconPosition={iconPosition}
              iconClick={(e: any) => removeItem(input)}
              iconSize={iconSize || 12}
              size={"3"}
              disabled={showPreviewView || disabled}
            />
          );
        })}
        {!(disabled || showPreviewView || isPreview) ? (
          <ButtonInput
            key={id}
            direction={"row"}
            gap={"3"}
            type={type}
            onClick={() => handleAddInput(id)}
          >
            <span>{value}</span>
          </ButtonInput>
        ) : (
          <Flex direction={"row"} gap={"3"}></Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default DynamicInputList;
