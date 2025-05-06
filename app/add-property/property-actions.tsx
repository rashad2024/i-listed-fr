"use client";

import { Flex } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";

import ButtonInput from "@/components/ui/common/Button";

export default function PropertyActions({ activeStep, handleClick }) {
  return (
    <Flex direction={"row"} gap={"3"} style={{ justifyContent: "flex-end" }}>
      {activeStep !== 0 ? (
        <ButtonInput
          gap={"3"}
          className="btn-secondary btn-previous"
          onClick={() => handleClick("previous")}
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
        className="btn-secondary btn-draft"
        onClick={() => handleClick("drafts")}
      >
        <span>Save Draft</span>
      </ButtonInput>
      <ButtonInput
        gap={"3"}
        className="btn-secondary btn-next"
        onClick={() => handleClick("next")}
      >
        <span>
          Next <Icon name={"RightArrowIcon"} size={10} />
        </span>
      </ButtonInput>
    </Flex>
  );
}
