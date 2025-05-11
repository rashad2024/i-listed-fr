"use client";

import { useState, useEffect, useRef, SetStateAction } from "react";

import { Flex, Text } from "@radix-ui/themes";

import CardView from "@/components/ui/common/CardView";

import ButtonInput from "../../components/ui/common/Button";
import Icon from "../../components/ui/common/Icon";

import { prepareDescriptionAndMediaInfo } from "@/utils/helpers/add-property";

import "@/styles/components/_card.scss";

export default function DescriptionMedia({
  activeStep,
  isPreview,
  errors,
  validation,
  handleChange,
  data,
}: any) {
  const [descriptionMedia, setDescriptionMedia] = useState(
    prepareDescriptionAndMediaInfo(data)
  );
  const [previewDescMedia, setPreviewDescMedia] = useState(isPreview);

  const editSection = (type: string) => {
    setPreviewDescMedia(!previewDescMedia);
  };

  useEffect(() => {
    setDescriptionMedia(prepareDescriptionAndMediaInfo(data));
  }, [data, isPreview]);

  return (
    <div className="info-container description-media">
      <Flex gap={"3"} align={"center"} justify={"between"}>
        <Text>Description & Media</Text>
        {isPreview && (
          <ButtonInput
            direction={"row"}
            gap={"3"}
            onClick={() => editSection("description-media")}
            className="btn-secondary btn-edit"
          >
            <Icon name={"CustomEditIcon"} size={24} />
          </ButtonInput>
        )}
      </Flex>

      <CardView
        formData={descriptionMedia}
        id="description-media-card"
        handleChange={handleChange}
        isPreview={isPreview}
        errors={errors}
        validation={validation}
      />
    </div>
  );
}
