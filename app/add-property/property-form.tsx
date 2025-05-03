"use client";

import { Text } from "@radix-ui/themes";

import Stages from "@/components/ui/common/Stages";
import BasicInformation from "./basic-info";

export default function PropertyForm() {
  return (
    <div className="property-form-container">
      <h1>Add Property</h1>
      <Text>Property location</Text>

      <Stages activeStep={0} />

      <BasicInformation />
    </div>
  );
}
