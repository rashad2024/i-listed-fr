"use client";

import { Text, TextArea, Flex, Card, Inset, Strong } from "@radix-ui/themes";
import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";
import InputField from "@/components/ui/common/Input";
import CustomFileUploader from "@/components/ui/common/CustomFileUploader";

export default function DescriptionMedia() {
  const { addValue, getValues }: any = ({} = useDynamicFieldMap());

  const getFieldValue = (name: string) => {
    //console.log(name, getValues(), getValues()[name]);
    return getValues()[name] || "";
  };
  const handleChange = (
    name: string,
    value: string | number | boolean | Array<any>
  ) => {
    // console.log(name, value);
    addValue(name, value);
  };
  return (
    <Flex gap="3" direction="column">
      <Text>Description and Media</Text>
      <Flex gap={"3"} direction={"row"}>
        <Card
          size={"5"}
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "2rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Flex
            gap={"3"}
            direction={"column"}
            style={{ minWidth: "100%", flex: "1 1 100%" }}
          >
            <Text> Description </Text>
            <TextArea
              key="description"
              id="description"
              placeholder=""
              size={"3"}
              value={getFieldValue("description") || ""}
              style={{ borderRadius: "4px", minWidth: "100%" }}
              onChange={(e: any) => handleChange("description", e.target.value)}
              disabled={false}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{ minWidth: "100%", flex: "0 0 100%" }}
          >
            <Text> Media </Text>
            <CustomFileUploader
              id={"images"}
              prevFiles={getFieldValue("images") || []}
              handleChange={(value: any) => handleChange("images", value)}
              disabled={false}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{ minWidth: "100%", flex: "0 0 100%" }}
          >
            <Text> Video(mp4) </Text>
            <InputField
              id="videoLink"
              gap="3"
              type="url"
              key="videoLink"
              label=""
              placeholder="Video(mp4)"
              value={getFieldValue("videoLink")}
              onChange={(event: any) =>
                handleChange("videoLink", event.target.value)
              }
            />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
