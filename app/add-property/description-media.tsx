"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { setProperty } from "@/features/auth/redux/Property/propertySlice";

import { Text } from "@radix-ui/themes";

import CardView from "../../components/ui/common/card";

import PropertyActions from "./property-actions";

import { prepareDescriptionAndMediaInfo } from "@/utils/helpers/add-property";

import "@/styles/components/_card.scss";

export default function DescriptionMedia({ setActiveStep }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property || {}
  );

  const [descriptionMedia, setDescriptionMedia] = useState(
    prepareDescriptionAndMediaInfo(data)
  );

  const handleChange = (key: any, value: string) => {
    // key = key.target.id || key;
    console.log(key, value);
    dispatch(setProperty({ [key]: value }));
  };

  const formSubmit = (type: string) => {
    console.log(type);
    setActiveStep(1);
  };

  useEffect(() => {}, [data]);

  return (
    <div className="info-container description-media">
      <Text>Description & Media</Text>
      <CardView
        formData={descriptionMedia}
        id="description-media-card"
        handleChange={handleChange}
      />
      {/* <Text>Location Information</Text>
      <CardView
        formData={locationInfo}
        id="location-info-card"
        handleChange={handleChange}
        addInputRow={addInputRow}
      />
      <Text>Property Details</Text>
      <CardView
        formData={propertyDetails}
        id="location-info-card"
        handleChange={handleChange}
      /> */}
      {/* <PropertyActions
        pageType={"description-and-media"}
        handleClick={(type: string) => formSubmit(type)}
      /> */}
    </div>
  );
}
