"use client";

import { useState } from "react";

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

type FormData = z.infer<typeof propertyFormSchema>;

export default function PropertyForm() {
  // const dispatch = useDispatch<AppDispatch>();
  // const { loading, error, data } = useSelector(
  //   (state: RootState) => state.property
  // );
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "",
    subcategories: "",
    ownershipType: "",
    transactionType: "",
    propertyStatus: "",
    landSize: "",
    builtUpArea: "",
    address: "",
    location: "",
    zipCode: "",
    totalPrice: "",
    beds: "",
    baths: "",
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(propertyFormSchema),
    mode: "onSubmit",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (key: any, value: string | boolean | number) => {
    // key = key.target.id || key;
    setFormData({ ...formData, [key]: value });
    setValue(key, value, { shouldValidate: true });
    console.log(key, value);
  };

  const formSubmit = (type: string) => {
    console.log(formData);
    if (Object.keys(errors).length || formData.title === "") return;

    if (type === "next") setActiveStep(activeStep + 1);
    if (type === "previous") setActiveStep(activeStep - 1);
    if (type === "preview") {
      setActiveStep(activeStep + 1);
      setShowPreview(true);
    } else setShowPreview(false);
  };
  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
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

      {!showPreview && <Stages activeStep={activeStep} />}

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
        {(activeStep === 2 || showPreview) && (
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
        />
      </form>
    </div>
  );
}
