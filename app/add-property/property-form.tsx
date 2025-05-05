"use client";

import { useState } from "react";
import { Text } from "@radix-ui/themes";

import Stages from "@/components/ui/common/Stages";
import BasicInformation from "./basic-info";
import DescriptionMedia from "./description-media";

export default function PropertyForm() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="property-form-container">
      <h1>Add Property</h1>
      <Text>Property location</Text>

      <Stages activeStep={activeStep} />

      {activeStep === 0 && <BasicInformation setActiveStep={setActiveStep} />}
      {activeStep === 1 && <DescriptionMedia setActiveStep={setActiveStep} />}
    </div>
  );
}
