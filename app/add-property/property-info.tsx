"use client";

import { useEffect, useState } from "react";

import { Flex, Text } from "@radix-ui/themes";

import CardView from "@/components/ui/common/card";
import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";

import {
  prepareBasicInfo,
  prepareLocationInfo,
  preparePropertyDetails,
} from "@/utils/helpers/add-property";

import "@/styles/components/_card.scss";

export default function PropertyInformation({
  activeStep,
  isPreview,
  errors,
  validation,
  handleChange,
  data,
}: any) {
  // const dispatch = useDispatch<AppDispatch>();
  // let { loading, error, data } = useSelector(
  //   (state: RootState) => state.property || {}
  // );

  const [basicInfo, setBasicInfo] = useState(prepareBasicInfo(data));
  const [locationInfo, setLocationInfo] = useState(prepareLocationInfo(data));
  const [propertyDetails, setPropertyDetails] = useState(
    preparePropertyDetails(data)
  );

  const [previewBasic, setPreviewBasic] = useState(isPreview);

  const editSection = (type: string) => {
    console.log(type);
    setPreviewBasic(!previewBasic);
  };

  useEffect(() => {
    setBasicInfo(prepareBasicInfo(data));
    setLocationInfo(prepareLocationInfo(data));
    setPropertyDetails(preparePropertyDetails(data));
  }, [data]);
  console.log("editMode activeStep", previewBasic);
  return (
    <div className="info-container basic-info">
      <Flex gap={"3"} align={"center"} justify={"between"}>
        <Text>Basic Information</Text>
        {activeStep > 2 && (
          <ButtonInput
            direction={"row"}
            gap={"3"}
            onClick={() => editSection("basic")}
            className="btn-secondary btn-edit"
          >
            <Icon name={"CustomEditIcon"} size={24} />
          </ButtonInput>
        )}
      </Flex>

      <CardView
        formData={basicInfo}
        id="basic-info-card"
        handleChange={handleChange}
        errors={errors}
        isPreview={previewBasic}
        validation={validation}
      />
      <Text>Location Information</Text>
      <CardView
        formData={locationInfo}
        id="location-info-card"
        handleChange={handleChange}
        isPreview={previewBasic}
        errors={errors}
        validation={validation}
      />
      <Text>Property Details</Text>
      <CardView
        formData={propertyDetails}
        id="property-details-card"
        handleChange={handleChange}
        isPreview={previewBasic}
        errors={errors}
        validation={validation}
      />
    </div>
  );
}
