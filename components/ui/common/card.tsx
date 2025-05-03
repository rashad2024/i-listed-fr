import { Flex } from "@radix-ui/themes";

import InputField from "./Input";
import SelectField from "./Select";

export default function CardView({ formData, id, handleChange }: any) {
  console.log("formdata: ", formData);
  return (
    <Flex gap={"3"} id={id}>
      {formData && formData.length
        ? formData.map((item: any) => {
            const { inputInfo } = item;
            const { id, type, value, label, placeholder, options, hidden } =
              inputInfo;

            return (
              (inputInfo && inputInfo.type === "text" && (
                <InputField
                  id={id}
                  gap={"3"}
                  label={label}
                  value={value}
                  type={type}
                  onChange={(e) => handleChange(id, e.target.value)}
                  placeholder={placeholder}
                  size={"3"}
                />
              )) ||
              (type === "select" && !hidden && (
                <SelectField
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
              ))
            );
          })
        : ""}
    </Flex>
  );
}
