"use client";

import { Text, TextArea, Checkbox, Flex, Card, Strong } from "@radix-ui/themes";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";

import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";
import DynamicInputList from "@/components/ui/common/DynamicInputList";

export default function ExtrasFeaturePage({
  handleChange,
  getFieldValue,
  errors,
  isPreview,
  setEditMode,
  editMode,
}: {
  handleChange: any;
  getFieldValue: (name: string) => any;
  errors: any;
  isPreview?: boolean;
  setEditMode: any;
  editMode: boolean;
}) {
  const { addValue, getValues }: any = useDynamicFieldMap();

  const addMore = (category: string, value: any) => {
    const rrr = value.map((item: any) => {
      console.log("sdsad: ", item);
      return { isSubmitted: true, value: item, isDefault: false };
    });
    console.log("value", rrr);
    handleChange(`${category}Added`, rrr);
  };

  const hideLivingSpace =
    isPreview &&
    !(
      getFieldValue("livingSpaceAdded")?.length > 0 ||
      !!getFieldValue("enclosed") ||
      !!getFieldValue("openPlan") ||
      !!getFieldValue("ac")
    );
  const hideKitchen =
    isPreview &&
    !(
      getFieldValue("kitchenAdded")?.length > 0 ||
      !!getFieldValue("fullyEquipped") ||
      !!getFieldValue("fridge") ||
      !!getFieldValue("oven") ||
      !!getFieldValue("stoves")
    );
  const hideUtilitiesIncluded =
    isPreview &&
    !(
      getFieldValue("utilitiesIncludedAdded")?.length > 0 ||
      !!getFieldValue("electric") ||
      !!getFieldValue("water") ||
      !!getFieldValue("wifi")
    );
  const hideServicesIncluded =
    isPreview &&
    !(
      getFieldValue("serviceIncludedAdded")?.length > 0 ||
      !!getFieldValue("cleaning") ||
      !!getFieldValue("abcd") ||
      !!getFieldValue("abdc")
    );
  const hideAdditionalFeatures =
    isPreview &&
    !(
      getFieldValue("additionalFeaturesAdded")?.length > 0 ||
      !!getFieldValue("emergencyExit") ||
      !!getFieldValue("cctv") ||
      !!getFieldValue("securityGuard") ||
      !!getFieldValue("balcony") ||
      !!getFieldValue("laundryService") ||
      !!getFieldValue("elevatorLift")
    );

  const showField = (name: string) => {
    switch (name) {
      case "enclosed":
        return !isPreview || editMode || !!getFieldValue("enclosed");
      case "openPlan":
        return !isPreview || editMode || !!getFieldValue("openPlan");
      case "ac":
        return !isPreview || editMode || !!getFieldValue("ac");
      case "fullyEquipped":
        return !isPreview || editMode || !!getFieldValue("fullyEquipped");
      case "fridge":
        return !isPreview || editMode || !!getFieldValue("fridge");
      case "oven":
        return !isPreview || editMode || !!getFieldValue("oven");
      case "stoves":
        return !isPreview || editMode || !!getFieldValue("stoves");
      case "electric":
        return !isPreview || editMode || !!getFieldValue("electric");
      case "water":
        return !isPreview || editMode || !!getFieldValue("water");
      case "wifi":
        return !isPreview || editMode || !!getFieldValue("wifi");
      case "cleaning":
        return !isPreview || editMode || !!getFieldValue("cleaning");
      case "abcd":
        return !isPreview || editMode || !!getFieldValue("abcd");
      case "abdc":
        return !isPreview || editMode || !!getFieldValue("abdc");
      case "emergencyExit":
        return !isPreview || editMode || !!getFieldValue("emergencyExit");
      case "cctv":
        return !isPreview || editMode || !!getFieldValue("cctv");
      case "securityGuard":
        return !isPreview || editMode || !!getFieldValue("securityGuard");
      case "balcony":
        return !isPreview || editMode || !!getFieldValue("balcony");
      case "laundryService":
        return !isPreview || editMode || !!getFieldValue("laundryService");
      case "elevatorLift":
        return !isPreview || editMode || !!getFieldValue("elevatorLift");
      default:
        return true;
    }
  };

  return (
    <Flex gap="3" direction="column" className="extras-features">
      <Flex gap={"3"} direction={"row"} justify={"between"} align={"center"}>
        <Text className="card-header"> Extras Feature</Text>
        {isPreview && (
          <ButtonInput
            direction={"row"}
            gap={"3"}
            onClick={() => setEditMode(!editMode)}
            className="btn-secondary btn-edit"
          >
            <Icon name={"CustomEditIcon"} size={24} />
          </ButtonInput>
        )}
      </Flex>

      <Flex gap={"3"} direction={"row"}>
        <Card
          size={"5"}
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "2rem !important",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {!hideLivingSpace && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                minWidth: "100%",
                flex: "1 1 100%",
                borderBottom: "1px solid #E9E9E9",
                paddingBottom: "2rem",
              }}
            >
              <Text className="form-label"> Living Space </Text>
              <Flex gap="3" direction="row" style={{ minWidth: "100%" }}>
                {showField("enclosed") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"enclosed"}
                          defaultChecked={
                            !!getFieldValue("enclosed") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"enclosed"}
                          onClick={(e: any) =>
                            handleChange(
                              "enclosed",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Enclosed
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("openPlan") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"openPlan"}
                          defaultChecked={
                            !!getFieldValue("openPlan") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"openPlan"}
                          onClick={(e: any) =>
                            handleChange(
                              "openPlan",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Open-Plan
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("ac") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"ac"}
                          defaultChecked={!!getFieldValue("ac") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"ac"}
                          onClick={(e: any) =>
                            handleChange(
                              "ac",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        AC
                      </Flex>
                    </Text>
                  </Flex>
                )}

                <DynamicInputList
                  inputGroups={
                    getFieldValue("livingSpaceAdded")?.length > 0
                      ? getFieldValue("livingSpaceAdded").map((item: any) => {
                          return {
                            category: "livingSpace",
                            id: "livingSpace",
                            type: "text",
                            key: "livingSpace",
                            label: "",
                            placeholder: "",
                            value: item.value,
                            isDefault: item.isDefault,
                            iconName: item.isSubmitted ? "CustomCrossIcon" : "",
                            disabled: item.isSubmitted ? true : false,
                            isSubmitted: item.isSubmitted,
                            iconPosition: "right",
                            onChange: (value: any) =>
                              handleChange("livingSpace", value),
                          };
                        })
                      : [
                          {
                            category: "livingSpace",
                            id: "livingSpace",
                            type: "text",
                            key: "livingSpace",
                            label: "",
                            placeholder: "",
                            value: "",
                            onChange: (value: any) =>
                              handleChange("livingSpace", value),
                          },
                        ]
                  }
                  inputInfo={{
                    type: "button",
                    label: "",
                    id: "livingSpace",
                    value: "+",
                    onClick: addMore,
                  }}
                  handleChange={handleChange}
                  isPreview={editMode ? false : isPreview}
                />
              </Flex>
            </Flex>
          )}

          {!hideKitchen && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                minWidth: "100%",
                flex: "1 1 100%",
                borderBottom: "1px solid #E9E9E9",
                paddingBottom: "2rem",
              }}
            >
              <Text className="form-label"> Kitchen </Text>
              <Flex gap="3" direction="row" style={{ minWidth: "100%" }}>
                {showField("fullyEquipped") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"fullyEquipped"}
                          defaultChecked={
                            getFieldValue("fullyEquipped") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"fullyEquipped"}
                          onClick={(e: any) =>
                            handleChange(
                              "fullyEquipped",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Fully Equipped
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("fridge") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"fridge"}
                          defaultChecked={
                            getFieldValue("fridge") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"fridge"}
                          onClick={(e: any) =>
                            handleChange(
                              "fridge",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Fridge
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("oven") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"oven"}
                          defaultChecked={getFieldValue("oven") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"oven"}
                          onClick={(e: any) =>
                            handleChange(
                              "oven",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Oven
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("stoves") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"stoves"}
                          defaultChecked={
                            getFieldValue("stoves") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"stoves"}
                          onClick={(e: any) =>
                            handleChange(
                              "stoves",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Stoves
                      </Flex>
                    </Text>
                  </Flex>
                )}

                <DynamicInputList
                  inputGroups={
                    getFieldValue("kitchenAdded")?.length > 0
                      ? getFieldValue("kitchenAdded").map((item: any) => {
                          return {
                            category: "kitchen",
                            id: "kitchen",
                            type: "text",
                            key: "kitchen",
                            label: "",
                            placeholder: "",
                            value: item.value,
                            isDefault: item.isDefault,
                            iconName: item.isSubmitted ? "CustomCrossIcon" : "",
                            disabled: item.isSubmitted ? true : false,
                            isSubmitted: item.isSubmitted,
                            iconPosition: "right",
                            onChange: (value: any) =>
                              handleChange("kitchen", value),
                          };
                        })
                      : [
                          {
                            category: "kitchen",
                            id: "kitchen",
                            type: "text",
                            key: "kitchen",
                            label: "",
                            placeholder: "",
                            disabled: isPreview,
                            value: "",
                            onChange: (value: any) =>
                              handleChange("kitchen", value),
                          },
                        ]
                  }
                  inputInfo={{
                    type: "button",
                    label: "",
                    id: "kitchen",
                    value: "+",
                    onClick: addMore,
                  }}
                  handleChange={handleChange}
                  isPreview={editMode ? false : isPreview}
                />
              </Flex>
            </Flex>
          )}

          {!hideUtilitiesIncluded && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                minWidth: "100%",
                flex: "1 1 100%",
                borderBottom: "1px solid #E9E9E9",
                paddingBottom: "2rem",
              }}
            >
              <Text className="form-label"> Utilities Included </Text>
              <Flex gap="3" direction="row" style={{ minWidth: "100%" }}>
                {showField("electric") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"electric"}
                          defaultChecked={
                            getFieldValue("electric") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"electric"}
                          onClick={(e: any) =>
                            handleChange(
                              "electric",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Electric
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("water") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"water"}
                          defaultChecked={getFieldValue("water") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"water"}
                          onClick={(e: any) =>
                            handleChange(
                              "water",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Water
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("wifi") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"wifi"}
                          defaultChecked={getFieldValue("wifi") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"wifi"}
                          onClick={(e: any) =>
                            handleChange(
                              "wifi",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Wifi
                      </Flex>
                    </Text>
                  </Flex>
                )}

                <DynamicInputList
                  inputGroups={
                    getFieldValue("utilitiesIncludedAdded")?.length > 0
                      ? getFieldValue("utilitiesIncludedAdded").map(
                          (item: any) => {
                            return {
                              category: "utilitiesIncluded",
                              id: "utilitiesIncluded",
                              type: "text",
                              key: "utilitiesIncluded",
                              label: "",
                              placeholder: "",
                              value: item.value,
                              isDefault: item.isDefault,
                              iconName: item.isSubmitted
                                ? "CustomCrossIcon"
                                : "",
                              disabled: item.isSubmitted ? true : false,
                              isSubmitted: item.isSubmitted,
                              iconPosition: "right",
                              onChange: (value: any) =>
                                handleChange("utilitiesIncluded", value),
                            };
                          }
                        )
                      : [
                          {
                            category: "utilitiesIncluded",
                            id: "utilitiesIncluded",
                            type: "text",
                            key: "utilitiesIncluded",
                            label: "",
                            placeholder: "",
                            disabled: isPreview,
                            value: "",
                            onChange: (value: any) =>
                              handleChange("utilitiesIncluded", value),
                          },
                        ]
                  }
                  inputInfo={{
                    type: "button",
                    label: "",
                    id: "utilitiesIncluded",
                    value: "+",
                    onClick: addMore,
                  }}
                  handleChange={handleChange}
                  isPreview={editMode ? false : isPreview}
                />
              </Flex>
            </Flex>
          )}

          {!hideServicesIncluded && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                minWidth: "100%",
                flex: "1 1 100%",
                borderBottom: "1px solid #E9E9E9",
                paddingBottom: "2rem",
              }}
            >
              <Text className="form-label"> Services Included </Text>
              <Flex gap="3" direction="row" style={{ minWidth: "100%" }}>
                {showField("cleaning") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"cleaning"}
                          defaultChecked={
                            getFieldValue("cleaning") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"cleaning"}
                          onClick={(e: any) =>
                            handleChange(
                              "cleaning",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Cleaning
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("abcd") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"abcd"}
                          defaultChecked={getFieldValue("abcd") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"abcd"}
                          onClick={(e: any) =>
                            handleChange(
                              "abcd",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Abcd
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("abdc") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"abdc"}
                          defaultChecked={getFieldValue("abdc") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"abdc"}
                          onClick={(e: any) =>
                            handleChange(
                              "abdc",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Abdc
                      </Flex>
                    </Text>
                  </Flex>
                )}

                <DynamicInputList
                  inputGroups={
                    getFieldValue("servicesIncludedAdded")?.length > 0
                      ? getFieldValue("servicesIncludedAdded").map(
                          (item: any) => {
                            return {
                              category: "servicesIncluded",
                              id: "servicesIncluded",
                              type: "text",
                              key: "servicesIncluded",
                              label: "",
                              placeholder: "",
                              value: item.value,
                              isDefault: item.isDefault,
                              iconName: item.isSubmitted
                                ? "CustomCrossIcon"
                                : "",
                              disabled: item.isSubmitted ? true : false,
                              isSubmitted: item.isSubmitted,
                              iconPosition: "right",
                              onChange: (value: any) =>
                                handleChange("servicesIncluded", value),
                            };
                          }
                        )
                      : [
                          {
                            category: "servicesIncluded",
                            id: "servicesIncluded",
                            type: "text",
                            key: "servicesIncluded",
                            label: "",
                            placeholder: "",
                            value: "",
                            onChange: (value: any) =>
                              handleChange("servicesIncluded", value),
                          },
                        ]
                  }
                  inputInfo={{
                    type: "button",
                    label: "",
                    id: "servicesIncluded",
                    value: "+",
                    onClick: addMore,
                  }}
                  handleChange={handleChange}
                  isPreview={editMode ? false : isPreview}
                />
              </Flex>
            </Flex>
          )}

          {!hideAdditionalFeatures && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                minWidth: "100%",
                flex: "1 1 100%",
                borderBottom: "1px solid #E9E9E9",
                paddingBottom: "2rem",
              }}
            >
              <Text className="form-label"> Additional Features </Text>
              <Flex gap="3" direction="row" style={{ minWidth: "100%" }}>
                {showField("emergencyExit") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"emergencyExit"}
                          defaultChecked={
                            getFieldValue("emergencyExit") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"emergencyExit"}
                          onClick={(e: any) =>
                            handleChange(
                              "emergencyExit",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Emergency Exit
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("cctv") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"cctv"}
                          defaultChecked={getFieldValue("cctv") ? true : false}
                          disabled={editMode ? false : isPreview}
                          name={"cctv"}
                          onClick={(e: any) =>
                            handleChange(
                              "cctv",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        CCTV
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("securityGuard") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"securityGuard"}
                          defaultChecked={
                            getFieldValue("securityGuard") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"securityGuard"}
                          onClick={(e: any) =>
                            handleChange(
                              "securityGuard",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Security Guard
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("balcony") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"balcony"}
                          defaultChecked={
                            getFieldValue("balcony") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"balcony"}
                          onClick={(e: any) =>
                            handleChange(
                              "balcony",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Balcony
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("laundryService") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"laundryService"}
                          defaultChecked={
                            getFieldValue("laundryService") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"laundryService"}
                          onClick={(e: any) =>
                            handleChange(
                              "laundryService",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Laundry Service
                      </Flex>
                    </Text>
                  </Flex>
                )}

                {showField("elevatorLift") && (
                  <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Text as="label" size="3">
                      <Flex as="span" gap="3" style={{ whiteSpace: "nowrap" }}>
                        <Checkbox
                          id={"elevatorLift"}
                          defaultChecked={
                            getFieldValue("elevatorLift") ? true : false
                          }
                          disabled={editMode ? false : isPreview}
                          name={"elevatorLift"}
                          onClick={(e: any) =>
                            handleChange(
                              "elevatorLift",
                              e.target.getAttribute("data-state") === "checked"
                                ? false
                                : true
                            )
                          }
                          variant="classic"
                        />
                        Elevator Lift
                      </Flex>
                    </Text>
                  </Flex>
                )}

                <DynamicInputList
                  inputGroups={
                    getFieldValue("additionalFeaturesAdded")?.length > 0
                      ? getFieldValue("additionalFeaturesAdded").map(
                          (item: any) => {
                            return {
                              category: "additionalFeatures",
                              id: "additionalFeatures",
                              type: "text",
                              key: "additionalFeatures",
                              label: "",
                              placeholder: "",
                              value: item.value,
                              isDefault: item.isDefault,
                              iconName: item.isSubmitted
                                ? "CustomCrossIcon"
                                : "",
                              disabled: item.isSubmitted ? true : false,
                              isSubmitted: item.isSubmitted,
                              iconPosition: "right",
                              onChange: (value: any) =>
                                handleChange("additionalFeatures", value),
                            };
                          }
                        )
                      : [
                          {
                            category: "additionalFeatures",
                            id: "additionalFeatures",
                            type: "text",
                            key: "additionalFeatures",
                            label: "",
                            disabled: editMode ? false : isPreview,
                            placeholder: "",
                            value: "",
                            onChange: (value: any) =>
                              handleChange("additionalFeatures", value),
                          },
                        ]
                  }
                  inputInfo={{
                    type: "button",
                    label: "",
                    id: "additionalFeatures",
                    value: "+",
                    onClick: addMore,
                  }}
                  handleChange={handleChange}
                  isPreview={editMode ? false : isPreview}
                />
              </Flex>
            </Flex>
          )}
        </Card>
      </Flex>
    </Flex>
  );
}
