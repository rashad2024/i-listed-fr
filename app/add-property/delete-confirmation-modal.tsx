"use client";

import { SetStateAction } from "react";

import { useRouter, useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { deletePropertyById } from "@/features/redux/Property/propertyThunks";

import { Flex, Text, Link } from "@radix-ui/themes";

import ModalDemo from "@/components/ui/common/Modal";
import Icon from "@/components/ui/common/Icon";
import ButtonInput from "@/components/ui/common/Button";

export default function PropertyDeleteConfirmationModal({
  propertyId,
  setShowDeleteConfirmationModal,
  status,
}: {
  propertyId: string;
  setShowDeleteConfirmationModal: React.Dispatch<SetStateAction<boolean>>;
  status?: string;
}) {
  console.log(status);
  const router = useRouter();
  const params = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );

  const HeadingImage = () => {
    return (
      <Flex gap={"3"} direction={"column"} justify={"center"} align={"center"}>
        <Icon name="ConfirmDeleteIcon" size={82} />
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
          Are you sure you want to delete this property?
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
          Deleting this property will permanently remove it from the system,
          including all related details such as images, pricing, and metadata
        </Text>
      </Flex>
    );
  };

  const deleteProperty = async () => {
    if (!propertyId) return;

    await dispatch(deletePropertyById(propertyId))
      .unwrap()
      .then((data) => {
        // Do something after store is updated
        if (data.success) {
          setShowDeleteConfirmationModal(false);
          router.push(`/property/${params.status}`); // Redirect to /property-list
        }
      })
      .catch((err) => {
        console.error("Property deletion error:", err);
      });
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
          className="btn-primary btn-delete-cancel"
          direction={"column"}
          onClick={() => {
            setShowDeleteConfirmationModal(false);
          }}
          disabled={false}
          styles={{ width: "120px" }}
        >
          <span>Cancel</span>
        </ButtonInput>
        <ButtonInput
          type="button"
          gap={"3"}
          className="btn-primary delete-icon"
          direction={"column"}
          onClick={() => deleteProperty()}
          disabled={false}
          styles={{ width: "120px" }}
        >
          <span>Delete</span>
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
      modalOpen={setShowDeleteConfirmationModal}
    />
  );
}
