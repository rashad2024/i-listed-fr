// import { Flex, Box, Text, Card } from "@radix-ui/themes";

// export default function Stages() {
//   return (
//     <div>
//       <Text>Stages</Text>

//       <Box pt="3">
//         <Flex>
//           <Card variant="surface">
//             <Text as="div" size="2" weight="bold">
//               Property Information
//             </Text>
//           </Card>
//           <Card variant="surface">
//             <Text as="div" size="2" weight="bold">
//               Description & Media
//             </Text>
//           </Card>
//           <Card variant="surface">
//             <Text as="div" size="2" weight="bold">
//               Extras Features
//             </Text>
//           </Card>
//         </Flex>
//       </Box>
//     </div>
//   );
// }

// components/ui/ProgressStepper.tsx
"use client";

import React from "react";

import "@/styles/components/_stages.scss";

const steps = [
  "Property Information",
  "Description & Media",
  "Extras Features",
];

type ProgressStepperProps = {
  activeStep: number;
};

export default function Stages({ activeStep }: ProgressStepperProps) {
  return (
    <div className="stages-container">
      <div className="title">Stages</div>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div
              key={step}
              className={`step ${index === activeStep ? "active" : ""}`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}
