import { useEffect, useState } from "react";
import { Text, Flex, Card, Inset, Strong } from "@radix-ui/themes";

import InputField from "@/components/ui/common/Input";
import Select from "@/components/ui/common/Select";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";
import ButtonInput from "@/components/ui/common/Button";
import DynamicInputList from "@/components/ui/common/DynamicInputList";
import DateInputWithIcon from "@/components/ui/common/DateInput";

export default function PropertyInformation({
  fieldOptions,
  getFieldValue,
  handleChange,
  errors,
  unitIconName,
  isPreview,
}: {
  fieldOptions: any;
  handleChange: any;
  getFieldValue: (name: string) => any;
  errors: any;
  unitIconName?: string;
  isPreview?: boolean;
}) {
  const { getValues } = useDynamicFieldMap();
  getValues();

  return (
    <Flex gap={"3"} direction={"column"}>
      <Text>Basic info</Text>
      <Flex gap={"3"} direction={"row"}>
        <Card
          size="5"
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "start",
          }}
        >
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="title"
              gap="3"
              type="text"
              key="title"
              label="Title"
              className={"required"}
              placeholder="Luxury Villa in Seminyak"
              value={getFieldValue ? getFieldValue("title") : ""}
              onChange={(event: any) =>
                handleChange("title", event.target.value)
              }
              errors={errors?.title}
              disabled={isPreview}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="categoryId"
              gap="3"
              key="categoryId"
              label="Category"
              placeholder="Please select category"
              className={"required"}
              value={getFieldValue("categoryId")}
              optionList={fieldOptions?.category}
              onChange={(value: any) => handleChange("categoryId", value, true)}
              position="popper"
              errors={errors?.categoryId}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="subcategoryId"
              gap="3"
              key="subcategoryId"
              label="Subcategories"
              placeholder="Please select Subcategory"
              value={getFieldValue("subcategoryId")}
              className={"required"}
              optionList={fieldOptions?.subcategory}
              onChange={(value: any) => handleChange("subcategoryId", value)}
              position="popper"
              errors={errors?.subcategoryId}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="ownershipType"
              gap="3"
              key="ownershipType"
              label="Ownership Type"
              placeholder="Please select a ownership type"
              value={getFieldValue("ownershipTypeId")}
              optionList={fieldOptions?.ownershipType}
              onChange={(value: any) => handleChange("ownershipTypeId", value)}
              position="popper"
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="transactionType"
              gap="3"
              key="transactionType"
              label="Transaction Type"
              placeholder="Please select a transaction type"
              className={"required"}
              value={getFieldValue("transactionTypeId")}
              optionList={fieldOptions?.transactionType}
              onChange={(value: any) =>
                handleChange("transactionTypeId", value, true)
              }
              position="popper"
              errors={errors?.transactionTypeId}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="propertyStatus"
              gap="3"
              key="propertyStatus"
              label="Property Status"
              placeholder="Please select a property status"
              value={getFieldValue("propertyStatusId")}
              className={"required"}
              optionList={fieldOptions?.propertyStatus}
              onChange={(value: any) => handleChange("propertyStatusId", value)}
              position="popper"
              errors={errors?.propertyStatusId}
              disabled={isPreview}
            />
          </Flex>
          {!(
            getFieldValue("categoryId") &&
            ["2"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                maxWidth: "calc(33% - 20px)",
                flex: "0 0 calc(33% - 20px)",
              }}
            >
              <Select
                id="buildingPermit"
                gap="3"
                key="buildingPermit"
                label="Building Permit"
                placeholder="Please select a building permit"
                value={getFieldValue("buildingPermitId")}
                optionList={fieldOptions?.buildingPermit}
                onChange={(value: any) =>
                  handleChange("buildingPermitId", value)
                }
                position="popper"
                disabled={isPreview}
              />
            </Flex>
          )}
        </Card>
      </Flex>

      <Text>Location Information</Text>
      <Flex gap={"3"} direction={"row"}>
        <Card
          size="5"
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "start",
          }}
        >
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="title"
              gap="3"
              type="text"
              key="address"
              label="Address"
              className={"required"}
              placeholder="Address of your property"
              value={getFieldValue("address")}
              onChange={(event: any) =>
                handleChange("address", event.target.value)
              }
              errors={errors?.address}
              disabled={isPreview}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="location"
              gap="3"
              type="text"
              key="location"
              label="Location"
              className={"required"}
              placeholder="Enter location"
              value={getFieldValue("location")}
              onChange={(event: any) =>
                handleChange("location", event.target.value)
              }
              errors={errors?.location}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="zipCode"
              gap="3"
              type="number"
              key="zipCode"
              label="Zip Code"
              className={"required"}
              placeholder="Enter zip code"
              value={getFieldValue("zipCode")}
              onChange={(event: any) =>
                handleChange("zipCode", event.target.value)
              }
              errors={errors?.zipCode}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="zoneId"
              gap="3"
              key="zoneId"
              label="Zone"
              placeholder="Select zone"
              value={getFieldValue("zoneId")}
              optionList={fieldOptions?.zone}
              onChange={(value: any) => handleChange("zoneId", value)}
              position="popper"
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="googleMapLink"
              gap="3"
              type="text"
              key="googleMapLink"
              label="Google map link"
              placeholder="Enter google map link"
              className={"required"}
              value={getFieldValue("googleMapLink")}
              onChange={(e: any) =>
                handleChange("googleMapLink", e.target.value)
              }
              errors={errors?.googleMapLink}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="roadAccessId"
              gap="3"
              key="roadAccessId"
              label="Road Access"
              placeholder="Please select Road access"
              value={getFieldValue("roadAccessId")}
              className={"required"}
              optionList={fieldOptions?.roadAccess}
              onChange={(value: any) => handleChange("roadAccessId", value)}
              position="popper"
              errors={errors?.roadAccessId}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"row"}
            style={{
              maxWidth: "100%",
              flex: "0 0 100%",
            }}
          >
            <DynamicInputList
              inputGroups={
                isPreview && getFieldValue("nearbyPoints")?.length
                  ? getFieldValue("nearbyPoints").map(
                      (point: string, idx: number) => {
                        console.log(point, idx);
                        return {
                          id: "nearbyPoints",
                          value: point,
                          type: "text",
                          key: "nearbyPoints",
                          label: idx < 1 ? "Nearby points of Interest" : "",
                          placeholder: idx < 1 ? "Nearby points" : "",
                          disabled: isPreview,
                        };
                      }
                    )
                  : [
                      {
                        id: "nearbyPoints",
                        type: "text",
                        key: "nearbyPoints",
                        label: "Nearby points of Interest",
                        placeholder: "Nearby points",
                        value: getFieldValue("nearbyPoints"),

                        onChange: (value: string) =>
                          handleChange("nearbyPoints", value),
                      },
                    ]
              }
              inputInfo={{
                type: "button",
                label: "",
                id: "nearbyPoints",
                value: "+",
              }}
              // setInputs={setInputs}
              handleChange={handleChange}
              disabled={isPreview}
            />
          </Flex>
        </Card>
      </Flex>

      <Text>Property Details</Text>
      <Flex gap={"3"} direction={"row"}>
        <Card
          size="5"
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "start",
          }}
        >
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <Select
              id="landUnitId"
              gap="3"
              key="landUnitId"
              label="Select Unit"
              placeholder="Please select unit"
              className={"required"}
              value={getFieldValue("landUnitId")}
              optionList={fieldOptions?.landUnit}
              onChange={(value: any) => handleChange("landUnitId", value)}
              position="popper"
              errors={errors?.landUnitId}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="landSize"
              gap="3"
              key="landSize"
              label="Land Size"
              type="number"
              placeholder="Enter land size"
              className={"required"}
              value={getFieldValue("landSize")}
              iconName={unitIconName}
              iconPosition="right"
              onChange={(e: any) => handleChange("landSize", e.target.value)}
              errors={errors?.landSize}
              disabled={isPreview}
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="builtUpArea"
              gap="3"
              type="number"
              key="builtUpArea"
              label="Built-Up Area"
              className={"required"}
              placeholder="Built-Up area"
              iconName={unitIconName}
              iconPosition="right"
              value={getFieldValue("builtUpArea")}
              onChange={(event: any) =>
                handleChange("builtUpArea", event.target.value)
              }
              errors={errors?.builtUpArea}
              disabled={isPreview}
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="pricePerUnit"
              gap="3"
              type="number"
              key="pricePerUnit"
              label="Price Per Area Unit"
              placeholder="Price per unit"
              disabled={isPreview}
              value={getFieldValue("pricePerUnit")}
              onChange={(event: any) =>
                handleChange("pricePerUnit", event.target.value)
              }
            />
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <InputField
              id="totalPrice"
              gap="3"
              type="number"
              key="totalPrice"
              label="Total Price"
              className={"required"}
              placeholder="Total Price"
              value={getFieldValue("totalPrice")}
              onChange={(event: any) =>
                handleChange("totalPrice", event.target.value)
              }
              errors={errors?.totalPrice}
              disabled={isPreview}
            />
          </Flex>

          {!(
            getFieldValue("categoryId") &&
            ["2", "4"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                maxWidth: "calc(33% - 20px)",
                flex: "0 0 calc(33% - 20px)",
              }}
            >
              <InputField
                id="numberOfFloors"
                gap="3"
                type="number"
                key="numberOfFloors"
                label="Number of Floors"
                placeholder="Number of Floors"
                value={getFieldValue("numberOfFloors")}
                onChange={(event: any) =>
                  handleChange("numberOfFloors", event.target.value)
                }
                disabled={isPreview}
              />
            </Flex>
          )}

          {!(
            getFieldValue("categoryId") &&
            ["1", "2", "4"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                maxWidth: "calc(33% - 20px)",
                flex: "0 0 calc(33% - 20px)",
              }}
            >
              <InputField
                id="pricePerYear"
                gap="3"
                type="number"
                key="pricePerYear"
                label="Price Per Year"
                placeholder="Price Per Year"
                value={getFieldValue("pricePerYear")}
                onChange={(event: any) =>
                  handleChange("pricePerYear", event.target.value)
                }
                disabled={isPreview}
              />
            </Flex>
          )}

          {!(
            getFieldValue("categoryId") &&
            ["2", "3", "4"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <>
              <Flex
                gap={"3"}
                direction={"column"}
                style={{
                  maxWidth: "calc(33% - 20px)",
                  flex: "0 0 calc(33% - 20px)",
                }}
              >
                <InputField
                  id="maxRooms"
                  gap="3"
                  type="number"
                  key="maxRooms"
                  label="Max Rooms"
                  placeholder="Max Rooms"
                  value={getFieldValue("maxRooms")}
                  onChange={(event: any) =>
                    handleChange("maxRooms", event.target.value)
                  }
                  disabled={isPreview}
                />
              </Flex>

              <Flex
                gap={"3"}
                direction={"column"}
                style={{
                  maxWidth: "calc(33% - 20px)",
                  flex: "0 0 calc(33% - 20px)",
                }}
              >
                <InputField
                  id="beds"
                  gap="3"
                  type="number"
                  key="beds"
                  label="Beds"
                  placeholder="Beds"
                  className="required"
                  value={getFieldValue("beds")}
                  onChange={(event: any) =>
                    handleChange("beds", event.target.value)
                  }
                  errors={errors?.beds}
                  disabled={isPreview}
                />
              </Flex>

              <Flex
                gap={"3"}
                direction={"column"}
                style={{
                  maxWidth: "calc(33% - 20px)",
                  flex: "0 0 calc(33% - 20px)",
                }}
              >
                <InputField
                  id="baths"
                  gap="3"
                  type="number"
                  key="baths"
                  label="Baths"
                  placeholder="Baths"
                  className="required"
                  value={getFieldValue("baths")}
                  onChange={(event: any) =>
                    handleChange("baths", event.target.value)
                  }
                  errors={errors?.baths}
                  disabled={isPreview}
                />
              </Flex>

              <Flex
                gap={"3"}
                direction={"column"}
                style={{
                  maxWidth: "calc(33% - 20px)",
                  flex: "0 0 calc(33% - 20px)",
                }}
              >
                <Select
                  id="furnishingId"
                  gap="3"
                  key="furnishingId"
                  label="Furnishing"
                  placeholder="Furnishing"
                  value={getFieldValue("furnishingId")}
                  optionList={fieldOptions?.furnishing}
                  onChange={(value: any) => handleChange("furnishingId", value)}
                  position="popper"
                  disabled={isPreview}
                />
              </Flex>
            </>
          )}

          {!(
            getFieldValue("categoryId") &&
            ["2"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                maxWidth: "calc(33% - 20px)",
                flex: "0 0 calc(33% - 20px)",
              }}
            >
              <Select
                id="parkingSpaceId"
                gap="3"
                key="parkingSpaceId"
                label="Parking Space"
                placeholder="Parking Space"
                value={getFieldValue("parkingSpaceId")}
                optionList={fieldOptions?.parkingSpace}
                onChange={(value: any) => handleChange("parkingSpaceId", value)}
                position="popper"
                disabled={isPreview}
              />
            </Flex>
          )}

          {!(
            getFieldValue("categoryId") &&
            ["2", "4"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <Flex
              gap={"3"}
              direction={"column"}
              style={{
                maxWidth: "calc(33% - 20px)",
                flex: "0 0 calc(33% - 20px)",
              }}
            >
              <DateInputWithIcon
                id="buildingYear"
                gap={"3"}
                type="date"
                label="Building Year"
                placeholder="Building Year"
                iconName="CalendarIcon"
                iconPosition="right"
                size={"3"}
                value={
                  new Date(getFieldValue("buildingYear")?.toString()) ||
                  new Date("")
                }
                onChange={(value: any) => handleChange("buildingYear", value)}
                disabled={isPreview}
              />
            </Flex>
          )}

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <DateInputWithIcon
              id="availableDate"
              gap={"3"}
              type="date"
              label="Property Available Date"
              placeholder="Property Available Date"
              iconName="CalendarIcon"
              iconPosition="right"
              size={"3"}
              value={getFieldValue("availableDate") || ""}
              onChange={(val) =>
                handleChange("availableDate", val?.toISOString())
              }
              disabled={isPreview}
              // value={new Date(getFieldValue("availableDate")) || new Date()}
              // onChange={(value: any) => handleChange("availableDate", value)}
            />
          </Flex>

          {!(
            getFieldValue("categoryId") &&
            ["2", "4"].find((cat) => cat == getFieldValue("categoryId"))
          ) && (
            <>
              <Flex
                gap={"3"}
                direction={"column"}
                style={{
                  maxWidth: "calc(33% - 20px)",
                  flex: "0 0 calc(33% - 20px)",
                }}
              >
                <Select
                  id="pool"
                  gap="3"
                  key="pool"
                  label="Have Pool"
                  placeholder="Have Pool"
                  value={getFieldValue("pool")}
                  optionList={fieldOptions?.pool}
                  onChange={(value: any) => handleChange("pool", value)}
                  position="popper"
                  disabled={isPreview}
                />
              </Flex>

              {getFieldValue("pool") == "true" && (
                <>
                  <Flex
                    gap={"3"}
                    direction={"column"}
                    style={{
                      maxWidth: "calc(33% - 20px)",
                      flex: "0 0 calc(33% - 20px)",
                    }}
                  >
                    <Select
                      id="poolTypeId"
                      gap="3"
                      key="poolTypeId"
                      label="Pool Type"
                      placeholder="Pool Type"
                      value={getFieldValue("poolTypeId")}
                      optionList={fieldOptions?.poolType}
                      onChange={(value: any) =>
                        handleChange("poolTypeId", value)
                      }
                      position="popper"
                      disabled={isPreview}
                    />
                  </Flex>

                  <Flex
                    gap={"3"}
                    direction={"column"}
                    style={{
                      maxWidth: "calc(33% - 20px)",
                      flex: "0 0 calc(33% - 20px)",
                    }}
                  >
                    <InputField
                      id="poolSize"
                      gap="3"
                      type="number"
                      key="poolSize"
                      label="Pool Size"
                      placeholder="Pool Size"
                      value={getFieldValue("poolSize")}
                      onChange={(event: any) =>
                        handleChange("poolSize", event.target.value)
                      }
                      disabled={isPreview}
                    />
                  </Flex>
                </>
              )}
            </>
          )}
        </Card>
      </Flex>
    </Flex>
  );
}
