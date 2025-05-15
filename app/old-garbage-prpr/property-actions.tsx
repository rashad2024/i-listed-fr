"use client";

import { Flex } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";

import ButtonInput from "@/components/ui/common/Button";

import { getButtonText } from "@/utils/helpers/add-property";

export default function PropertyActions({
  activeStep,
  handleClick,
  selectedCategory,
}: any) {
  return (
    <Flex direction={"row"} gap={"3"} style={{ justifyContent: "flex-end" }}>
      {activeStep > 2 ? (
        <ButtonInput
          gap={"3"}
          direction={"row"}
          className="btn-secondary btn-previous btn-cancel"
          onClick={() => handleClick(activeStep > 2 ? "Cancel" : "Previous")}
        >
          <span>Cancel</span>
        </ButtonInput>
      ) : activeStep !== 0 ? (
        <ButtonInput
          gap={"3"}
          direction={"row"}
          className="btn-secondary btn-previous"
          onClick={() => handleClick("Previous")}
        >
          <span>
            <Icon
              name={"LeftArrowIcon"}
              size={10}
              style={{ marginRight: "6px" }}
            />
            Previous
          </span>
        </ButtonInput>
      ) : null}
      <ButtonInput
        gap={"3"}
        type={activeStep > 2 ? "submit" : "button"}
        direction={"row"}
        className="btn-secondary btn-draft"
        onClick={() => handleClick("Draft")}
      >
        <span>Save Draft</span>
      </ButtonInput>

      <ButtonInput
        gap={"3"}
        direction={"row"}
        type={activeStep > 2 ? "submit" : "button"}
        className="btn-secondary btn-next"
        onClick={() => handleClick(getButtonText(activeStep, selectedCategory))}
      >
        {getButtonText(activeStep, selectedCategory)}
      </ButtonInput>
    </Flex>
  );
}
