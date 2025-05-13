"use client";

import { useState, SetStateAction, useEffect } from "react";

import {getFieldOptions} from "@/utils/helpers/add-property";

import Stages from "@/components/ui/common/Stages";
import PropertyInformation from "./property-information";
import DescriptionMedia from "./description-media";
import ExtrasFeaturePage from "./extras-features"

import "@/styles/pages/property.scss";

export default function CreateProperty() {
  const [selectedCategory, setSelectedCategory] =
    useState<SetStateAction<any>>("");
  const [propertyOptions, setPropertyOptions] = useState([]);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() =>{
    const fetchFormOptions = async() => {
      const options = await getFieldOptions();
      console.log("options:", options);
      
      setPropertyOptions(options);
      return options;
    }
    fetchFormOptions();
  }, []);
console.log(propertyOptions);
  return (
    <div className="property-form-container">
      <h1>Add Property</h1>
      
      <Stages activeStep={activeStep} selectedCategory={selectedCategory} />

      {/* {(activeStep === 0 || showBasicInfo) && ( */}
      <PropertyInformation
      //   activeStep={activeStep}
      //   isPreview={previewProperty || showBasicInfo}
      //   errors={errors}
      //   validation={register}
      //   handleChange={handleChange}
      //   data={formData}
      fieldOptions={propertyOptions}
      />
      
      <DescriptionMedia />
      
      <ExtrasFeaturePage />
      
      {/* )} */}
    </div>
  );
}
