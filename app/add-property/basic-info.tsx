"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { setProperty } from "@/features/auth/redux/Property/propertySlice";

import { Text } from "@radix-ui/themes";

import CardView from "../../components/ui/common/card";
import PropertyActions from "./property-actions";

import {
  prepareBasicInfo,
  prepareLocationInfo,
  addNewRowsToData,
  preparePropertyDetails,
} from "@/utils/helpers/add-property";

import "@/styles/components/_card.scss";

export default function BasicInformation({ setActiveStep }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property || {}
  );

  //   const [title, setTitle] = useState(data.title || "");
  //   const [category, setCategory] = useState(data.category);
  //   const [subcategories, setSubcategories] = useState(data.subcategories);
  //   const [ownershipType, setOwnershipType] = useState(data.ownershipType);
  //   const [transactionType, setTransactionType] = useState(data.transactionType);
  //   const [propertyStatus, setPropertyStatus] = useState(data.propertyStatus);
  //   const [buildingPermit, setBuildingPermit] = useState(data.buildingPermit);

  const [basicInfo, setBasicInfo] = useState(prepareBasicInfo(data));
  const [locationInfo, setLocationInfo] = useState(prepareLocationInfo(data));
  const [propertyDetails, setPropertyDetails] = useState(
    preparePropertyDetails(data)
  );

  const handleChange = (key: any, value: string) => {
    // key = key.target.id || key;
    console.log(key, value);
    dispatch(setProperty({ [key]: value }));
  };

  const addInputRow = (id: any) => {
    const newData = addNewRowsToData(id, locationInfo);

    setLocationInfo(newData);
  };

  const formSubmit = (type: string) => {
    console.log(type);
    setActiveStep(1);
  };

  useEffect(() => {
    setBasicInfo(prepareBasicInfo(data));
    setLocationInfo(locationInfo);
    setPropertyDetails(preparePropertyDetails(data));
  }, [data]);

  return (
    <div className="info-container basic-info">
      <Text>Basic Information</Text>
      <CardView
        formData={basicInfo}
        id="basic-info-card"
        handleChange={handleChange}
      />
      <Text>Location Information</Text>
      <CardView
        formData={locationInfo}
        id="location-info-card"
        handleChange={handleChange}
        addInputRow={addInputRow}
      />
      <Text>Property Details</Text>
      <CardView
        formData={propertyDetails}
        id="property-details-card"
        handleChange={handleChange}
      />
      <PropertyActions
        pageType={"basic"}
        handleClick={(type: string) => formSubmit(type)}
      />
    </div>
  );
}
