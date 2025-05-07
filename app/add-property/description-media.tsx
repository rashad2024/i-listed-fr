"use client";

import { useState } from "react";

import { Flex, Text } from "@radix-ui/themes";

import CardView from "../../components/ui/common/card";
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
  // const dispatch = useDispatch<AppDispatch>();
  // const { loading, error, data } = useSelector(
  //   (state: RootState) => state.property || {}
  // );

  const [descriptionMedia, setDescriptionMedia] = useState(
    prepareDescriptionAndMediaInfo(data)
  );
  const [previewDescMedia, setPreviewDescMedia] = useState(isPreview);

  // const handleChange = (key: any, value: string) => {
  //   // key = key.target.id || key;
  //   console.log(key, value);
  //   // dispatch(setProperty({ [key]: value }));
  // };

  const editSection = (type: string) => {
    console.log(type);
    setPreviewDescMedia(!previewDescMedia);
  };

  return (
    <div className="info-container description-media">
      <Flex gap={"3"} align={"center"} justify={"between"}>
        <Text>Description & Media</Text>
        {activeStep > 2 && (
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
        isPreview={previewDescMedia}
        errors={errors}
        validation={validation}
      />
    </div>
  );
}
