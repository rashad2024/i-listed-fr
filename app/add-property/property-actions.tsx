"use client";

import { Flex } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";

import ButtonInput from "@/components/ui/common/Button";

import { getButtonText } from "@/utils/helpers/add-property";

export default function PropertyActions({
  activeStep,
  setActiveStep,
  handleClick,
  selectedCategory,
  showUpdate,
  handleUpdateClick,
  isValid,
  isSubmitting,
  isDraft,
}: any) {
  return (
    <Flex direction={"row"} gap={"3"} style={{ justifyContent: "flex-end" }}>
      {activeStep > 2 || showUpdate || isDraft ? (
        <ButtonInput
          gap={"3"}
          direction={"row"}
          className="btn-secondary btn-cancel"
          onClick={() => handleClick("Cancel")}
          // disabled={}
        >
          <span>Cancel</span>
        </ButtonInput>
      ) : activeStep !== 0 && !showUpdate ? (
        <ButtonInput
          gap={"3"}
          direction={"row"}
          className="btn-secondary btn-previous"
          onClick={() => handleClick("Previous")}
          // disabled={!isValid}
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

      {!showUpdate && !isDraft && (
        <ButtonInput
          gap={"3"}
          type={"button"}
          direction={"row"}
          className="btn-secondary btn-draft"
          onClick={() => handleClick("Draft")}
          // disabled={}
        >
          <span>Save Draft</span>
        </ButtonInput>
      )}

      {showUpdate && (
        <ButtonInput
          gap={"3"}
          type={"button"}
          direction={"row"}
          className="btn-secondary btn-update"
          onClick={handleUpdateClick}
          // disabled={}
        >
          <span>Update</span>
        </ButtonInput>
      )}
      {!showUpdate && (
        <ButtonInput
          gap={"3"}
          direction={"row"}
          type={"button"}
          className="btn-secondary btn-next"
          onClick={() =>
            handleClick(getButtonText(activeStep, selectedCategory, isDraft))
          }
          disabled={isSubmitting}
        >
          {getButtonText(activeStep, selectedCategory, isDraft)}
        </ButtonInput>
      )}
    </Flex>
  );
}
