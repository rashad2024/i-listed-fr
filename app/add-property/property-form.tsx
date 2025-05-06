"use client";

import { useState } from "react";
import { Text } from "@radix-ui/themes";

import Stages from "@/components/ui/common/Stages";
import BasicInformation from "./basic-info";
import DescriptionMedia from "./description-media";
import ExtrasFeatures from "./extras-features";
import PropertyActions from "./property-actions";

export default function PropertyForm() {
  const [activeStep, setActiveStep] = useState(0);
  const formSubmit = (type: string) => {
    console.log(type);
    if (type === "next") setActiveStep(activeStep+1);
    if (type === "previous") setActiveStep(activeStep - 1);
    // if(type === "drafts")setActiveStep(1);
  };

  return (
    <div className="property-form-container">
      <h1>Add Property</h1>
      <Text>Property location</Text>

      <Stages activeStep={activeStep} />

      {activeStep === 0 && <BasicInformation setActiveStep={setActiveStep} />}
      {activeStep === 1 && <DescriptionMedia setActiveStep={setActiveStep} />}
{activeStep === 2 && <ExtrasFeatures setActiveStep={setActiveStep} />}

      <PropertyActions
        activeStep={activeStep}
        handleClick={(type: string) => formSubmit(type)}
      />
    </div>
  );
}
