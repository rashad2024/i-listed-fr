import { Flex, Text, Checkbox, TextArea } from "@radix-ui/themes";

import InputField from "./Input";
import SelectField from "./Select";
import DateInput from "./DateInput";
import CustomFileUploader from "./CustomFileUploader";
import UploadedFilePreview from "./UploadFilePreview";
import DynamicInputList from "./DynamicInputList";

export default function CardView({
  formData,
  id,
  handleChange,
  isPreview,
  errors,
  validation,
}: // addInputRow,
any) {
  // const groupInput = (inputGroups: any) => {
  //   const inputFields = inputGroups;

  //   return <DynamicInputList inputs={inputFields} inputInfo={inputInfo}/>
  //   return (inputFields || []).map((input: any) => {
  //     const {
  //       id,
  //       label,
  //       value,
  //       type,
  //       placeholder,
  //       iconName,
  //       iconPosition,
  //       index,
  //     } = input;

  //     return (
  //       (type === "text" || type === "checkbox") && (
  //         <InputField
  //           key={`${id}-${index}`}
  //           id={`${id}`}
  //           gap={"3"}
  //           label={label}
  //           value={value ? value[index] : ""}
  //           type={type}
  //           onChange={(e) => handleChange(`${id}`, e.target.value, index)}
  //           placeholder={placeholder}
  //           iconName={iconName}
  //           iconPosition={iconPosition}
  //           size={"3"}
  //         />
  //       )
  //     );
  //   });
  // };

  return (
    <Flex gap={"3"} id={id}>
      {formData && formData.length
        ? formData.map((item: any) => {
            const { inputInfo, inputGroups } = item;
            const {
              id,
              type,
              value,
              label,
              placeholder,
              options,
              iconName,
              iconPosition,
              hidden,
            } = inputInfo;

            return (
              (id === "videoLink" && isPreview && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  <Text>{label}</Text>
                  <UploadedFilePreview
                    key={id}
                    files={[{ previewUrl: value, type: "video" }]}
                  />
                </Flex>
              )) ||
              ((type === "text" || type === "number") && !hidden && (
                <InputField
                  key={`${label}-${id}`}
                  id={id}
                  gap={"3"}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  iconName={iconName}
                  iconPosition={iconPosition}
                  size={"3"}
                  disabled={isPreview}
                  errors={errors && errors[id]}
                  {...validation(id)}
                  value={value}
                  onChange={(e) => handleChange(id, e.target.value)}
                />
              )) ||
              (type === "textarea" && (
                <Flex gap={"3"} direction={"column"} className="">
                  <Text>{label}</Text>
                  <TextArea
                    key={id}
                    id={id}
                    placeholder={placeholder}
                    size={"3"}
                    value={value}
                    style={{ borderRadius: "4px" }}
                    onChange={(e) => handleChange(id, e.target.value)}
                    disabled={isPreview}
                  />
                </Flex>
              )) ||
              (type === "select" && !hidden && (
                <SelectField
                  key={id}
                  id={id}
                  gap={"3"}
                  label={label}
                  optionList={options}
                  placeholder={placeholder}
                  position={"popper"}
                  size={"3"}
                  disabled={isPreview}
                  errors={errors && errors[id]}
                  {...validation(id)}
                  onChange={(e: any) => handleChange(id, e)}
                  value={value}
                />
              )) ||
              (type === "date" && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  <DateInput
                    value={value}
                    onChange={(val) => handleChange(id, val)}
                    label={label}
                    id={id}
                    gap={"3"}
                    type={type}
                    placeholder={placeholder}
                    iconName={iconName}
                    iconPosition={iconPosition}
                    size={"3"}
                    disabled={isPreview}
                  />
                </Flex>
              )) ||
              (type === "media" && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  {isPreview ? (
                    <>
                      {" "}
                      <Text>{label}</Text>
                      <UploadedFilePreview key={id} files={value} />
                    </>
                  ) : (
                    <>
                      <Text>{label}</Text>
                      <CustomFileUploader
                        id={id}
                        prevFiles={value}
                        handleChange={handleChange}
                        disabled={isPreview}
                      />
                    </>
                  )}
                </Flex>
              )) ||
              (inputGroups && inputGroups.length && (
                <DynamicInputList
                  key={id}
                  inputGroups={inputGroups}
                  inputInfo={inputInfo}
                  handleChange={handleChange}
                  disabled={isPreview}
                />
              ))
            );
          })
        : ""}
    </Flex>
  );
}
