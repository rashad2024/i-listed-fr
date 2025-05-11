"use client";

import { useEffect, useState } from "react";

import { Text, Flex } from "@radix-ui/themes";

import CardView from "@/components/ui/common/CardView";
import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";

import { prepareExtrasFeaturesInfo } from "@/utils/helpers/add-property";

import "@/styles/components/_card.scss";

export default function ExtrasFeatures({
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

  const [extraFeaturesInfo, setExtraFeaturesInfo] = useState(
    prepareExtrasFeaturesInfo(data, handleChange)
  );

  const [previewExtraFeatures, setPreviewExtraFeatures] = useState(isPreview);

  const editSection = (type: string) => {
    setPreviewExtraFeatures(!previewExtraFeatures);
  };

  useEffect(() => {
    setExtraFeaturesInfo(prepareExtrasFeaturesInfo(data, handleChange));
  }, [data, isPreview]);

  return (
    <div className="info-container extras-features">
      <Flex gap={"3"} align={"center"} justify={"between"}>
        <Text>Extras Features</Text>
        {isPreview && (
          <ButtonInput
            direction={"row"}
            gap={"3"}
            onClick={() => editSection("extras-features")}
            className="btn-secondary btn-edit"
          >
            <Icon name={"CustomEditIcon"} size={24} />
          </ButtonInput>
        )}
      </Flex>

      <CardView
        formData={extraFeaturesInfo}
        id="extras-features-card"
        handleChange={handleChange}
        isPreview={isPreview}
        errors={errors}
        validation={validation}
        data={data}
      />
    </div>
  );
}
