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

  const { id, value, label, type } = inputInfo;
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

    // handleChange(
    //   id,
    //   inputFields.map((input: any) => input.value)
    // );

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

    console.log("sss", inputs, input.value, input.id);
    if (!input.value?.length) return;
    if (input.category) {
      console.log(
        !input.value ||
          (input.value[input.value.length - 1] &&
            !input.value[input.value.length - 1].value)
      );
      if (
        !input.value
        // ||
        // (inputValue[inputValue.length - 1] &&
        //   !inputValue[inputValue.length - 1].value)
      ) {
        return;
      }
      // handleChange(
      //   fieldId,
      //   {
      //     id: ⁠ custom-${inputs.length - 1} ⁠,
      //     value: input.value,
      //     isDefault: false,
      //   },
      //   true
      // );
      input.disabled = true;
      input.iconName = "CustomCrossIcon";
      input.iconPosition = "right";
      input.iconSize = 12;
      // input.iconClick = (e: any, input: any) => {
      //   handleChange(input.category, input.value, false, true);

      //   console.log(
      //     "inputGroups",
      //     input.value,

      //     inputGroups.filter(
      //       (inputGroup: any) => input.value && input.value !== inputGroup.value
      //     )
      //   );
      //   setInputs(
      //     inputGroups.filter(
      //       (inputGroup: any) =>
      //         !input.value || input.value !== inputGroup.value
      //     )
      //   );
      // };
    }
    setInputs([...inputs, { id, category: input.category, type: "text" }]);
  };

  const removeItem = (input: any) => {
    console.log("removeItem", input);
    handleChange(input.category, input.value, false, true);

    setInputs(
      inputGroups.filter(
        (inputGroup: any) => !input.value || input.value !== inputGroup.value
      )
    );
  };

  useEffect(() => {
    setShowPreviewView(isPreview);
  }, [isPreview]);

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
            iconClick,
            disabled,
            iconSize,
            isDefault,
            category,
          } = input;
          fieldId = id || fieldId;

          if (isPreview && idx === inputs.length - 1) return;
          // console.log("input", input);
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
                      disabled={showPreviewView}
                      name={placeholder}
                      onClick={(e: any) =>
                        handleClick(
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
                iconClick={(e: any) => removeItem(input)}
                iconSize={iconSize}
                size={"3"}
                disabled={showPreviewView || disabled}
              />
            )
          );
        })}
        {!(disabled || showPreviewView) ? (
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
