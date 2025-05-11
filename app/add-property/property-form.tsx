"use client";

import { useRouter } from "next/navigation";

import { useState, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import {
  addProperty,
  addPropertyAsDraft,
  deletePropertyById,
} from "@/features/redux/Property/propertyThunks";

import { Flex, Link, Text } from "@radix-ui/themes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { propertyFormSchema } from "@/utils/validation/propertySchema";
import { z } from "zod";

import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";

import Stages from "@/components/ui/common/Stages";
import PropertyInformation from "./property-info";
import DescriptionMedia from "./description-media";
import ExtrasFeatures from "./extras-features";
import PropertyActions from "./property-actions";

import PropertyDeleteConfirmationModal from "./delete-confirmation-modal";
import PropertySuccessModal from "./property-success-modal";

import { prepareFormData } from "@/utils/helpers/add-property";

type FormData = z.infer<typeof propertyFormSchema>;

export default function PropertyForm({ property, previewProperty }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );
  const [formData, setFormData] = useState<any>(property);

  console.log("FormData", formData, previewProperty, property);
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(propertyFormSchema),
    mode: "onSubmit",
  });

  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [showBasicInfo, setShowBasicInfo] = useState(previewProperty);
  const [showExtrasPreview, setShowExtrasPreview] = useState(previewProperty);
  const [showDescriptionPreview, setShowDescriptionPreview] =
    useState(previewProperty);
  const [showSuccessModal, setShowSuccessModal] = useState("");
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<SetStateAction<any>>("");

  const handleChange = (
    key: any,
    value: any,
    shouldMerge?: boolean,
    shouldRemove?: boolean
  ) => {
    // key = key.target.id || key;
    if (shouldMerge) {
      const tt = formData[key] || [];
      value = [...tt, value];
    }

    if (shouldRemove) {
      console.log(key, value, formData[key]);
      const kitt = formData[key]?.filter((item: any) => {
        if (item !== value) return item;
      });

      console.log(kitt);
      value = kitt || [];
    }

    setFormData({ ...formData, [key]: value });
    setValue(key, value, { shouldValidate: true });

    if (key === "categoryId") {
      console.log("Selected category:", value);
      setSelectedCategory(value);
    }
    console.log("value: ", value);
    console.log("formData: ", formData);
  };

  const formSubmit = async (type: string) => {
    // console.log(formData);
    // if (Object.keys(errors).length || formData.title === "") return;

    console.log("Form submitted:", formData);

    if (type === "Next") setActiveStep(activeStep + 1);
    else if (type === "Previous") {
      setActiveStep(activeStep - 1);
      setShowDescriptionPreview(false);
      setShowExtrasPreview(false);
      setShowBasicInfo(false);
      setFormData({
        ...formData,
        ...{
          showBasicInfo: false,
          showExtrasPreview: false,
          showDescriptionPreview: false,
        },
      });
      setValue("showPreview", false, { shouldValidate: true });
    } else if (type === "Submit") {
      onSubmit(formData);
    } else if (type === "Cancel") {
      router.push("/property");
    } else if (type === "Preview") {
      console.log("Preview");
      setActiveStep(activeStep + 1);
      setShowBasicInfo(true);
      setShowDescriptionPreview(true);
      setShowExtrasPreview(true);
      setFormData({
        ...formData,
        ...{
          showBasicInfo: true,
          showExtrasPreview: true,
          showDescriptionPreview: true,
        },
      });
      setValue("showPreview", true, { shouldValidate: true });
    } else if (type === "Draft") {
      console.log("Form submitted:", formData);
      const data = prepareFormData(formData);

      await dispatch(addPropertyAsDraft(data))
        .unwrap()
        .then((res: any) => {
          console.log("Success:", res);
          // Do something after store is updated
          if (res.success) {
            // router.push("/property-list"); // Redirect to /property-list
          }
        })
        .catch((err: any) => {
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            // if (!Object.keys(formErrors).length) {
            setError(err.field, {
              type: "manual",
              message: err.messages.join("."),
            });
          });
        });
    } else {
      // setShowBasicInfo(false);
      // setShowDescriptionPreview(false);
      // setShowExtrasPreview(false);
    }
  };

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    const formData = prepareFormData(data);

    await dispatch(addProperty(formData))
      .unwrap()
      .then((data) => {
        console.log("Success:", data, data?.data?.id);
        // Do something after store is updated
        if (data?.data?.id) {
          setShowSuccessModal(data?.data?.id); // Redirect to /property-list
        }
      })
      .catch((err) => {
        const { errors } = JSON.parse(err);

        errors.map((err: any) => {
          // if (!Object.keys(formErrors).length) {
          setError(err.field, {
            type: "manual",
            message: err.messages.join("."),
          });
        });
      });
  };

  return (
    <div className="property-form-container">
      {showDescriptionPreview ||
      showExtrasPreview ||
      showBasicInfo ||
      previewProperty ? (
        <Flex direction={"row"} justify={"between"} gap={"3"} align={"end"}>
          <Flex
            direction={"column"}
            gap={"3"}
            justify={"start"}
            className="preview-header"
          >
            <h2>Property Details</h2>
            <Text as="p" className="preview-subtitle">
              {" "}
              View and manage property information
            </Text>
            <Link href="/property">
              <Icon name="ArrowLeftIcon" size={24} color="#444444" /> Back to
              List
            </Link>
          </Flex>
          <Flex>
            <ButtonInput
              type="button"
              gap={"3"}
              className="btn-primary delete-icon"
              direction={"column"}
              onClick={() => setShowDeleteConfirmationModal(true)}
              disabled={false}
              styles={{ width: "110px", margin: "2rem 0" }}
            >
              <Icon name={"CustomDeleteIcon"} size={24} />
              <span>Delete</span>
            </ButtonInput>
          </Flex>
        </Flex>
      ) : (
        <h1>Add Property</h1>
      )}
      {!(
        showDescriptionPreview ||
        showExtrasPreview ||
        showBasicInfo ||
        previewProperty
      ) && (
        <Stages activeStep={activeStep} selectedCategory={selectedCategory} />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {(activeStep === 0 || showBasicInfo) && (
          <PropertyInformation
            activeStep={activeStep}
            isPreview={previewProperty || showBasicInfo}
            errors={errors}
            validation={register}
            handleChange={handleChange}
            data={formData}
          />
        )}
        {(activeStep === 1 || showDescriptionPreview) && (
          <DescriptionMedia
            activeStep={activeStep}
            isPreview={previewProperty || formData.showDescriptionPreview}
            errors={errors}
            validation={register}
            handleChange={handleChange}
            data={formData}
          />
        )}
        {(activeStep === 2 || showExtrasPreview) &&
          (selectedCategory === "1" || selectedCategory === "3") && (
            <ExtrasFeatures
              activeStep={activeStep}
              isPreview={previewProperty || formData.showExtrasPreview}
              errors={errors}
              validation={register}
              handleChange={handleChange}
              data={formData}
            />
          )}

        {!previewProperty && (
          <PropertyActions
            activeStep={activeStep}
            // setShowPreview={setShowPreview}
            handleClick={(type: string) => formSubmit(type)}
            selectedCategory={selectedCategory}
          />
        )}
      </form>

      {showSuccessModal && (
        <PropertySuccessModal
          propertyId={showSuccessModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {showDeleteConfirmationModal && (
        <PropertyDeleteConfirmationModal
          propertyId={formData.id}
          setShowDeleteConfirmationModal={setShowDeleteConfirmationModal}
        />
      )}
    </div>
  );
}
