"use client";

import { useRouter } from "next/navigation";
import { useState, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";

import { Text, Flex, Link } from "@radix-ui/themes";
import Icon from "@/components/ui/common/Icon";
import ButtonInput from "@/components/ui/common/Button";

import { propertyFormSchema } from "@/utils/validation/propertySchema";
import { z } from "zod";

import {
  addPropertyAsDraft,
  addProperty,
  updateDraftProperty,
  updateProperty,
} from "@/features/redux/Property/propertyThunks";
import {
  getFieldOptions,
  validateForm,
  filterPropertyOptions,
} from "@/utils/helpers/add-property";

import { handleErrors } from "@/utils/helpers/common";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";

import PropertyDeleteConfirmationModal from "@/app/old-garbage-prpr/delete-confirmation-modal";
import PropertySuccessModal from "@/app/old-garbage-prpr/property-success-modal";

import Stages from "@/components/ui/common/Stages";
import PropertyInformation from "./property-information";
import DescriptionMedia from "./description-media";
import ExtrasFeaturePage from "./extras-features";
import PropertyActions from "./property-actions";

import { prepareFormData } from "@/utils/helpers/add-property";

import "@/styles/pages/property.scss";
import "@/styles/components/_card.scss";

type FormData = z.infer<typeof propertyFormSchema>;

export default function CreatePropertyForm({
  property,
  isViewMode,
  shouldEdit,
  isDraft,
}: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );
  const router = useRouter();

  const [basicEditMode, setBasicEditMode] = useState(shouldEdit);
  const [descEditMode, setDescEditMode] = useState(shouldEdit);
  const [extrasEditMode, setExtrasEditMode] = useState(shouldEdit);
  const [propertyId, setPropertyId] = useState(property?.id);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [unitIconName, setUnitIconName] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<SetStateAction<any>>(
    property?.categoryId || ""
  );
  const [propertyOptions, setPropertyOptions] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState("");
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [isPreview, setIsPreview] = useState(!!isViewMode);

  const { addValue, getValues, reset, addBulkValue } = useDynamicFieldMap();

  const getFieldValue = (name: string): any => {
    //console.log(name, getValues(), getValues()[name]);
    return getValues()[name];
  };

  const handleChange = (
    name: any,
    value: any,
    shouldFilterOptions: boolean,
    removeChanges: boolean
  ) => {
    if (removeChanges) {
      // addValue(
      //   `${name}Added`,
      //   getFieldValue(`${name}Added`).filter(
      //     (item: any) => item.value !== value
      //   )
      // );
      value = getFieldValue(name)?.filter((item: any) => item !== value) || [];
    }

    console.log(getValues());

    addValue(name, value);

    if (shouldFilterOptions) {
      filterPropertyOptions(name, value, propertyOptions);
    }

    if (name === "landUnitId") {
      if (value == 1) {
        setUnitIconName("UnitAreaIcon");
      } else if (value == 2) {
        setUnitIconName("UnitM2Icon");
      } else {
        setUnitIconName("UnitFt2Icon");
      }
    } else if (name === "categoryId") {
      setSelectedCategory(value);
    }

    if (isSubmitted) {
      const errors = validateForm(
        { ...getValues(), [name]: value },
        propertyFormSchema
      );

      console.log("errors", errors);
      if (errors) {
        setErrors(errors);
      }
    }

    // if (isViewMode && !isPreview) {
    //   shouldEdit = true;
    // }
  };

  const createDrafts = async (formData: any) => {
    const data = prepareFormData(formData);

    await dispatch(addPropertyAsDraft(data))
      .unwrap()
      .then((res: any) => {
        // Do something after store is updated
        if (res.success) {
          setPropertyId(res?.data?.id);
          setShowSuccessModal("add"); // Redirect to /property-list
        }
      })
      .catch((err: any) => {
        const { errors } = JSON.parse(err);
        const formErrors = handleErrors(errors);

        setErrors({ ...errors, ...formErrors });
      });
  };
  const updateDraft = async (propertyId: string, formData: any) => {
    const data = prepareFormData(formData);

    await dispatch(updateDraftProperty({ propertyId, propertyData: data }))
      .unwrap()
      .then((res: any) => {
        // Do something after store is updated
        if (res.success) {
          setShowSuccessModal("edit"); // Redirect to /property-list
          setPropertyId(res?.data?.id);
          setBasicEditMode(false);
          setDescEditMode(false);
          setExtrasEditMode(false);
        }
      })
      .catch((err: any) => {
        const { errors } = JSON.parse(err);
        const formErrors = handleErrors(errors);

        setErrors({ ...errors, ...formErrors });
      });
  };
  const updateCurrentProperty = async (propertyId: string, formData: any) => {
    const data = prepareFormData(formData);

    await dispatch(updateProperty({ propertyId, propertyData: data }))
      .unwrap()
      .then((res: any) => {
        // Do something after store is updated
        if (res.success) {
          setShowSuccessModal("edit"); // Redirect to /property-list
          setPropertyId(res?.data?.id);
          setBasicEditMode(false);
          setDescEditMode(false);
          setExtrasEditMode(false);
        }
      })
      .catch((err: any) => {
        const { errors } = JSON.parse(err);
        const formErrors = handleErrors(errors);

        setErrors({ ...errors, ...formErrors });
      });
  };

  const handleUpdateClick = () => {
    console.log(property.publicationStatus);
    if (!propertyId) return;
    if (isViewMode && property.publicationStatus !== "DRAFT") {
      updateCurrentProperty(propertyId || property.id, getValues());
    } else {
      updateDraft(propertyId || property.id, getValues());
    }
  };

  const createProperty = async (formData: any) => {
    const data = prepareFormData(formData);

    await dispatch(addProperty(data))
      .unwrap()
      .then((res: any) => {
        // Do something after store is updated
        if (res?.data?.id) {
          setPropertyId(res?.data?.id);
          setShowSuccessModal("add"); // Redirect to /property-list
        }
      })
      .catch((err: any) => {
        const { errors } = JSON.parse(err);
        const formErrors = handleErrors(errors);

        setErrors({ ...errors, ...formErrors });
      });
  };

  const formSubmit = (type: string) => {
    console.log("type", type);
    const errors =
      type === "Next" ? validateForm(getValues(), propertyFormSchema) : false;

    console.log("errors", errors);

    if (Object.keys(errors).length) {
      setErrors(errors);
      setIsSubmitted(true);
    } else {
      switch (type) {
        case "Draft":
          if (propertyId) updateDraft(propertyId, getValues());
          else createDrafts(getValues());
          break;
        case "Previous":
          setActiveStep(activeStep - 1);
          setBasicEditMode(false);
          setDescEditMode(false);
          setExtrasEditMode(false);
          break;
        case "Next":
          setActiveStep(activeStep + 1);
          break;
        case "Preview": {
          setIsPreview(true);
          setActiveStep(activeStep + 1);
          break;
        }
        case "Submit":
          if (propertyId) updateCurrentProperty(propertyId, getValues());
          else createProperty(getValues());
          break;
        case "Cancel":
          // reset();
          setBasicEditMode(false);
          setDescEditMode(false);
          setExtrasEditMode(false);
          setActiveStep(0);
          router.push(isDraft ? "/drafts" : "/property");
          break;
      }
      //   if (type === "Next") {
      //     setActiveStep(activeStep + 1);
      //   }
    }
  };

  useEffect(() => {
    const fetchFormOptions = async () => {
      const options = await getFieldOptions();

      setPropertyOptions(options);
      return options;
    };
    fetchFormOptions();
  }, []);

  useEffect(() => {
    addBulkValue({ ...property, ...{ dataReady: !!propertyOptions } });

    setPropertyId(property?.id);

    if (isViewMode) {
      !selectedCategory && setSelectedCategory(property?.categoryId);
      filterPropertyOptions(
        "categoryId",
        property?.categoryId,
        propertyOptions
      );

      console.log();
      filterPropertyOptions(
        "transactionTypeId",
        property?.transactionTypeId,
        propertyOptions
      );
    }
  }, [propertyOptions]);

  return (
    <div className="property-form-container" id="property-form">
      {isViewMode ? (
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

      {!isPreview && (
        <Stages activeStep={activeStep} selectedCategory={selectedCategory} />
      )}

      {/* {(activeStep === 0 || showBasicInfo) && ( */}
      {(activeStep === 0 || isPreview) && getFieldValue("dataReady") && (
        <PropertyInformation
          handleChange={handleChange}
          getFieldValue={getFieldValue}
          fieldOptions={propertyOptions}
          errors={errors}
          unitIconName={unitIconName}
          isPreview={isViewMode || isPreview}
          setEditMode={setBasicEditMode}
          editMode={basicEditMode}
        />
      )}

      {(activeStep === 1 || isPreview || isViewMode) &&
        getFieldValue("dataReady") && (
          <DescriptionMedia
            handleChange={handleChange}
            getFieldValue={getFieldValue}
            errors={errors}
            isPreview={isViewMode || isPreview}
            setEditMode={setDescEditMode}
            editMode={descEditMode}
          />
        )}

      {(activeStep === 2 || isPreview || isViewMode) &&
        (selectedCategory == "1" || selectedCategory == "3") &&
        getFieldValue("dataReady") && (
          <ExtrasFeaturePage
            handleChange={handleChange}
            getFieldValue={getFieldValue}
            errors={errors}
            isPreview={isViewMode || isPreview}
            setEditMode={setExtrasEditMode}
            editMode={extrasEditMode}
          />
        )}

      {(!isViewMode ||
        isDraft ||
        ((propertyId || isViewMode) &&
          (basicEditMode || descEditMode || extrasEditMode))) && (
        <PropertyActions
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleClick={(type: string) => formSubmit(type)}
          selectedCategory={selectedCategory}
          showUpdate={
            propertyId && (basicEditMode || descEditMode || extrasEditMode)
          }
          handleUpdateClick={() => handleUpdateClick()}
          isDraft={isDraft}
        />
      )}

      {showSuccessModal && (
        <PropertySuccessModal
          propertyId={propertyId}
          setShowSuccessModal={setShowSuccessModal}
          mode={showSuccessModal}
          status={property?.publicationStatus}
          isDraft={isDraft}
        />
      )}
      {showDeleteConfirmationModal && propertyId && (
        <PropertyDeleteConfirmationModal
          propertyId={propertyId}
          setShowDeleteConfirmationModal={setShowDeleteConfirmationModal}
          isDraft={isDraft}
        />
      )}
    </div>
  );
}
