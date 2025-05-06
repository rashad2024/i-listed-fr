import { Flex, Text } from "@radix-ui/themes";

import InputField from "./Input";
import SelectField from "./Select";
import ButtonInput from "./Button";
import DateInput from "./DateInput";
import CustomFileUploader from "./CustomFileUploader";

import { prepareInputFields } from "@/utils/helpers/add-property";

export default function CardView({
  formData,
  id,
  handleChange,
  addInputRow,
}: any) {
  const groupInput = (inputGroups: any) => {
    const inputFields = prepareInputFields(inputGroups);

    return (inputFields || []).map((input: any) => {
      const {
        id,
        label,
        value,
        type,
        placeholder,
        iconName,
        iconPosition,
        rowNumber,
      } = input;
      return (
        (input.type === "text" && (
          <InputField
            key={`${id}-${rowNumber}`}
            id={`${id}-${rowNumber}`}
            gap={"3"}
            label={label}
            value={value}
            type={type}
            onChange={(e) => handleChange(`${id}-${rowNumber}`, e.target.value)}
            placeholder={placeholder}
            iconName={iconName}
            iconPosition={iconPosition}
            size={"3"}
          />
        )) || (
          <ButtonInput
            key={`${id}-${rowNumber}`}
            direction={"row"}
            gap={"3"}
            onClick={() => addInputRow(`${id}-${rowNumber}`)}
          >
            <span>{input.value}</span>
          </ButtonInput>
        )
      );
    });
  };

  return (
    <Flex gap={"3"} id={id}>
      {formData && formData.length
        ? formData.map((item: any) => {
            const { inputInfo } = item;
            const {
              id,
              type,
              value,
              label,
              placeholder,
              options,
              iconName,
              iconPosition,
              inputGroups,
              hidden,
            } = inputInfo;
            console.log("hidden", hidden);
            return (
              ((type === "text" || type === "textarea") && !hidden && (
                <InputField
                  key={id}
                  id={id}
                  gap={"3"}
                  label={label}
                  value={value}
                  type={type}
                  onChange={(e) => handleChange(id, e.target.value)}
                  placeholder={placeholder}
                  iconName={iconName}
                  iconPosition={iconPosition}
                  size={"3"}
                  // hidden={hidden}
                />
              )) ||
              (type === "select" && !hidden && (
                <SelectField
                  key={id}
                  id={id}
                  gap={"3"}
                  label={label}
                  optionList={options}
                  onChange={(e: any) => handleChange(id, e)}
                  value={value}
                  placeholder={placeholder}
                  position={"popper"}
                  size={"3"}
                />
              )) ||
              (type === "date" && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  <DateInput
                    value={value}
                    onChange={(val) => handleChange(id, val?.toISOString())}
                    label={label}
                    id={id}
                    gap={"3"}
                    type={type}
                    placeholder={placeholder}
                    iconName={iconName}
                    iconPosition={iconPosition}
                    size={"3"}
                  />
                </Flex>
              )) ||
              (type === "media" && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  <CustomFileUploader />
                </Flex>
              )) ||
              (inputGroups && inputGroups.length && (
                <Flex
                  key={id}
                  gap={"3"}
                  direction={"column"}
                  className="input-groups-container"
                >
                  <Text>{label}</Text>
                  <Flex gap={"3"} className="input-groups">
                    {" "}
                    {groupInput(inputGroups)}{" "}
                  </Flex>
                </Flex>
              ))
            );
          })
        : ""}
    </Flex>
  );
}
