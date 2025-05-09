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
  selectedCategory: string;
};

export default function Stages({
  activeStep,
  selectedCategory,
}: ProgressStepperProps) {
  return (
    <div className="stages-container">
      <div className="title">Stages</div>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            (!(selectedCategory === "4" || selectedCategory === "2") ||
              ((selectedCategory === "4" || selectedCategory === "2") &&
                step !== "Extras Features") ||
              !selectedCategory) && (
              <div
                key={step}
                className={`step ${index === activeStep ? "active" : ""}`}
              >
                {step}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
