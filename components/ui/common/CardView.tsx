import { Flex, Text, Checkbox, TextArea, Slider } from "@radix-ui/themes";

import InputField from "./Input";
import SelectField from "./Select";
import DateInput from "./DateInput";
import CustomFileUploader from "./CustomFileUploader";
import UploadedFilePreview from "./UploadFilePreview";
import DynamicInputList from "./DynamicInputList";
import SliderComponent from "./Slider";
import ButtonInput from "./Button";
import Icon from "./Icon";

export default function CardView({
  cardTitle,
  formData,
  id,
  handleChange,
  isPreview,
  errors,
  validation,
  data,
}: // addInputRow,
any) {
  return (
    <Flex gap={"3"} id={id} direction={"row"}>
      {cardTitle && <Text className="card-title">{cardTitle}</Text>}
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
              onClick,
              hidden,
              required,
            } = inputInfo;

            return (
              (id === "videoLink" && isPreview && (
                <Flex key={id} gap={"3"} direction={"column"} className="">
                  <Text>{label}</Text>
                  <UploadedFilePreview id={id} files={[value]} />
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
                  className={required && "required"}
                  {...(validation?.length && { ...validation(id) })}
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
                  className={required && "required"}
                  {...(validation?.length && { ...validation(id) })}
                  onChange={(e: any) => handleChange(id, e)}
                  value={value}
                />
              )) ||
              (type === "date" && !hidden && (
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
                      <UploadedFilePreview id={id} files={value} />
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
              (type === "range" && (
                <Flex key={id} gap={"5"} direction={"column"} className="">
                  <Text>{label}</Text>
                  <SliderComponent
                    id={id}
                    value={value}
                    onChange={(e: any, value: any) => handleChange(id, value)}
                  />
                </Flex>
              )) ||
              (type === "button-input" && (
                <ButtonInput
                  type="button"
                  gap={"3"}
                  className="btn-primary filter-button"
                  direction={"column"}
                  onClick={() => onClick()}
                  styles={{
                    width: "160px",
                    color: "#fff",
                    justifyContent: "end",
                  }}
                >
                  <Icon name={iconName} size={24} />
                  {value}
                </ButtonInput>
              )) ||
              (inputGroups && inputGroups.length && (
                <DynamicInputList
                  key={id}
                  inputGroups={inputGroups}
                  inputInfo={inputInfo}
                  handleChange={handleChange}
                  disabled={isPreview}
                  data={data}
                  isPreview={isPreview}
                />
              ))
            );
          })
        : ""}
    </Flex>
  );
}
