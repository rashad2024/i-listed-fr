"use client";

import { useState, SetStateAction } from "react";

import Stages from "@/components/ui/common/Stages";
import PropertyInformation from "./property-information";

import "@/styles/pages/property.scss";

export default function CreateProperty() {
  const [selectedCategory, setSelectedCategory] =
    useState<SetStateAction<any>>("");

  const [activeStep, setActiveStep] = useState(0);

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
      />
      {/* )} */}
    </div>
  );
}
