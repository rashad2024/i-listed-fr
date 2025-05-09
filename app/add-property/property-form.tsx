"use client";

import { useRouter } from "next/navigation";

import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { addProperty } from "@/features/redux/Property/propertyThunks";

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

import { prepareFormData } from "@/utils/helpers/add-property";

type FormData = z.infer<typeof propertyFormSchema>;

export default function PropertyForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );
  const [formData, setFormData] = useState<any>({});

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
  const [showPreview, setShowPreview] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<SetStateAction<any>>("");

  const handleChange = (key: any, value: any) => {
    // key = key.target.id || key;
    setFormData({ ...formData, [key]: value });
    setValue(key, value, { shouldValidate: true });

    if (key === "categoryId") {
      console.log("Selected category:", value);
      setSelectedCategory(value);
    }
  };

  const formSubmit = (type: string) => {
    // console.log(formData);
    // if (Object.keys(errors).length || formData.title === "") return;

    console.log("Form submitted:", formData);

    if (type === "Next") setActiveStep(activeStep + 1);
    if (type === "Previous") {
      setActiveStep(activeStep - 1);
      setShowPreview(false);
      setFormData({ ...formData, showPreview: false });
      setValue("showPreview", false, { shouldValidate: true });
    }
    if (type === "Submit") onSubmit(formData);

    if (type === "Preview") {
      setActiveStep(activeStep + 1);
      setShowPreview(true);
      setFormData({ ...formData, showPreview: true });
      setValue("showPreview", true, { shouldValidate: true });
    } else setShowPreview(false);
  };
  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    const formData = prepareFormData(data);

    await dispatch(addProperty(formData))
      .unwrap()
      .then((data) => {
        console.log("Success:", data);
        // Do something after store is updated
        if (data.success) {
          router.push("/property-list"); // Redirect to /property-list
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
      {showPreview ? (
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
          <Link href="/property-list">
            <Icon name="ArrowLeftIcon" size={24} color="#444444" /> Back to List
          </Link>
        </Flex>
      ) : (
        <h1>Add Property</h1>
      )}

      {!showPreview && (
        <Stages activeStep={activeStep} selectedCategory={selectedCategory} />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {(activeStep === 0 || showPreview) && (
          <PropertyInformation
            activeStep={activeStep}
            isPreview={showPreview}
            errors={errors}
            validation={register}
            handleChange={handleChange}
            data={formData}
          />
        )}
        {(activeStep === 1 || showPreview) && (
          <DescriptionMedia
            activeStep={activeStep}
            isPreview={showPreview}
            errors={errors}
            validation={register}
            handleChange={handleChange}
            data={formData}
          />
        )}
        {(activeStep === 2 || showPreview) &&
          (selectedCategory === "1" || selectedCategory === "3") && (
            <ExtrasFeatures
              activeStep={activeStep}
              isPreview={showPreview}
              errors={errors}
              validation={register}
              handleChange={handleChange}
              data={formData}
            />
          )}

        <PropertyActions
          activeStep={activeStep}
          setShowPreview={setShowPreview}
          handleClick={(type: string) => formSubmit(type)}
          selectedCategory={selectedCategory}
        />
      </form>
    </div>
  );
}
