"use client";

import { SetStateAction } from "react";
import { useRouter } from "next/navigation";

import { Flex, Text, Link } from "@radix-ui/themes";

import ModalDemo from "@/components/ui/common/Modal";
import Icon from "@/components/ui/common/Icon";
import ButtonInput from "@/components/ui/common/Button";

export default function PropertySuccessModal({
  propertyId,
  setShowSuccessModal,
  mode,
  status,
  isDraft,
}: {
  propertyId: string;
  setShowSuccessModal: any;
  mode?: string;
  status?: string;
  isDraft?: string;
}) {
  const router = useRouter();
  const HeadingImage = () => {
    return (
      <Flex gap={"3"} direction={"column"} justify={"center"} align={"center"}>
        <Icon name="CustomSuccessModalIcon" size={40} />
      </Flex>
    );
  };

  const Content = () => {
    return (
      <Flex gap={"3"} direction={"column"} align={"center"}>
        <Text
          as="p"
          style={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "100%",
            margin: "1rem 0",
            color: "#444444",
            fontFamily: "Inter",
          }}
        >
          Property {mode == "edit" ? "Updated" : "Added"}{" "}
          <Text as="span" color="green">
            Successfully!{" "}
          </Text>{" "}
        </Text>
        <Text
          as="p"
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "100%",
            margin: "1rem 0",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Your property has been successfully added to the platform. It is now
          live and visible to thousands of potential buyers and renters. Get
          ready to receive inquiries and showcase your listing to a wide
          audience.
          <Text
            as="p"
            style={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "100%",
              margin: "1rem 0",
              color: "#444444",
              textAlign: "center",
              marginTop: "0.25rem",
            }}
          >
            {" "}
            You can view the property details, click preview
          </Text>
        </Text>
      </Flex>
    );
  };

  const viewProperty = () => {
    setShowSuccessModal(false);
    router.push(`/${isDraft ? "drafts" : "property"}/${propertyId}`);
  };

  const close = () => {
    setShowSuccessModal(false);
    router.push(`${status === "DRAFT" ? "/drafts" : "/property"}`);
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Component to render the action buttons for the success modal.
     * @param {{ closeModal: () => void }} props
     * @returns {JSX.Element}
     */
    /*******  b7dbe1aa-9919-48d0-bb25-3cd2e92ff8d0  *******/
  };

  const ActionContainer = ({ closeModal }: { closeModal: any }) => {
    return (
      <Flex
        gap={"3"}
        direction={"row"}
        justify={"center"}
        minWidth={"100%"}
        style={{ gap: "1rem" }}
      >
        <ButtonInput
          type="button"
          gap={"3"}
          className="btn-primary"
          direction={"column"}
          onClick={() => viewProperty()}
          disabled={false}
          styles={{ width: "120px" }}
        >
          <span>View</span>
        </ButtonInput>
        <ButtonInput
          type="button"
          gap={"3"}
          className="btn-primary btn-close"
          direction={"column"}
          onClick={() => close()}
          disabled={false}
          styles={{ width: "120px" }}
        >
          <span>Close</span>
        </ButtonInput>
      </Flex>
    );
  };

  return (
    <ModalDemo
      HeadingImage={HeadingImage}
      BodyContent={Content}
      closeIcon="Cross2Icon"
      ActionContainer={ActionContainer}
      modalOpen={setShowSuccessModal}
    />
  );
}
