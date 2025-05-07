import React, { useState } from "react";

import { Flex, Text, Checkbox } from "@radix-ui/themes";

import ButtonInput from "./Button";
import InputField from "./Input";

const DynamicInputList = ({
  inputGroups,
  inputInfo,
  handleChange,
  disabled,
}: any) => {
  const [inputs, setInputs] = useState(inputGroups);

  let fieldId = "";

  const { id, value, label } = inputInfo;
  const handleChangeEvent = (index: number, event: any) => {
    const id = event.target.id;
    const value = event.target.value;
    const textInputs = inputs.filter((input: any) => input.type === "text");

    console.log("textInputs", textInputs, inputGroups);
    const updated = [...textInputs];

    inputs[index].value = value;

    setInputs(inputs);

    handleChange(
      id,
      inputs.map((input: any) => (input.value ? input.value : ""))
    );
  };

  const handleClick = (event: any) => {
    const value = event.target.value;

    console.log("handleClick", id, value);
  };

  const handleAddInput = () => {
    setInputs([...inputs, {}]);
  };

  return (
    <Flex
      key={id}
      gap={"3"}
      direction={"column"}
      className="input-groups-container"
    >
      <Text>{label}</Text>
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
            index,
          } = input;
          fieldId = id || fieldId;
          return (
            (type === "checkbox" && (
              <Flex gap={"3"} direction={"row"} key={id}>
                <Text as="label" size={"3"}>
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Checkbox
                      id={id}
                      defaultChecked={value === "on" ? true : false}
                      disabled={disabled}
                      onClick={(e: any) =>
                        handleChange(
                          e.target?.id,
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    {placeholder}
                  </Flex>
                </Text>
              </Flex>
            )) || (
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
                size={"3"}
                disabled={disabled}
              />
            )
          );
        })}
        {!disabled ? (
          <ButtonInput
            key={id}
            direction={"row"}
            gap={"3"}
            onClick={() => handleAddInput()}
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
