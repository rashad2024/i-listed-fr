"use client";

import { Text, TextArea, Flex, Card, Inset, Strong } from "@radix-ui/themes";
import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";

import InputField from "@/components/ui/common/Input";
import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";

import CustomFileUploader from "@/components/ui/common/CustomFileUploader";
import UploadedFilePreview from "@/components/ui/common/UploadFilePreview";

export default function DescriptionMedia({
  handleChange,
  getFieldValue,
  errors,
  isPreview,
  setEditMode,
  editMode,
}: {
  handleChange: any;
  getFieldValue: (name: string) => string;
  errors: any;
  isPreview?: boolean;

  setEditMode: any;
  editMode: boolean;
}) {
  return (
    <Flex gap="3" direction="column">
      <Flex gap={"3"} direction={"row"} justify={"between"} align={"center"}>
        <Text className="card-header">Description and Media</Text>
        {isPreview && (
          <ButtonInput
            direction={"row"}
            gap={"3"}
            onClick={() => setEditMode(!editMode)}
            className="btn-secondary btn-edit"
          >
            <Icon name={"CustomEditIcon"} size={24} />
          </ButtonInput>
        )}
      </Flex>
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
            <Text className="form-label"> Description </Text>
            <TextArea
              key="description"
              id="description"
              placeholder=""
              size={"3"}
              value={getFieldValue("description") || ""}
              style={{ borderRadius: "4px", minWidth: "100%" }}
              onChange={(e: any) => handleChange("description", e.target.value)}
              disabled={editMode ? false : isPreview}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{ minWidth: "100%", flex: "0 0 100%" }}
          >
            {isPreview && !editMode ? (
              getFieldValue("images")?.length > 0 && (
                <>
                  {" "}
                  <Text className="form-label">Media</Text>
                  <UploadedFilePreview
                    id={"images"}
                    files={getFieldValue("images")}
                  />
                </>
              )
            ) : (
              <>
                <Text className="form-label"> Media </Text>
                <CustomFileUploader
                  id={"images"}
                  prevFiles={getFieldValue("images") || []}
                  handleChange={(value: any) => {
                    handleChange("images", value);
                  }}
                  disabled={editMode ? false : isPreview}
                />
              </>
            )}
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{ minWidth: "100%", flex: "0 0 100%" }}
          >
            {(isPreview &&
              !editMode &&
              (getFieldValue("videoLink") ? (
                <Flex
                  key={"videoLink"}
                  gap={"3"}
                  direction={"column"}
                  className=""
                >
                  <Text className="form-label">Video(mp4)</Text>
                  <UploadedFilePreview
                    id={"videoLink"}
                    files={[getFieldValue("videoLink")]}
                  />
                </Flex>
              ) : (
                ""
              ))) || (
              <>
                <Text className="form-label"> Video(mp4) </Text>
                <InputField
                  id="videoLink"
                  gap="3"
                  type="url"
                  key="videoLink"
                  label=""
                  placeholder="Video(mp4)"
                  value={getFieldValue("videoLink")}
                  disabled={editMode ? false : isPreview}
                  onChange={(event: any) =>
                    handleChange("videoLink", event.target.value)
                  }
                />
              </>
            )}
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
