import { useEffect, useState } from "react";
import { Text, Flex, Card, Inset, Strong } from "@radix-ui/themes";

import InputField from "@/components/ui/common/Input";
import Select from "@/components/ui/common/Select";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";
import ButtonInput from "@/components/ui/common/Button";
import DynamicInputList from "@/components/ui/common/DynamicInputList";
import DateInputWithIcon from "@/components/ui/common/DateInput";

export default function PropertyInformation({fieldOptions}) {
  const { addValue, getValues } = useDynamicFieldMap();

  const getFieldValue = (name: string) => {
    //console.log(name, getValues(), getValues()[name]);
    return getValues()[name];
  };
  const handleChange = (
    name: string,
    value: string | number | boolean | Array<any>
  ) => {
   // console.log(name, value);
    addValue(name, value);
  };

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
            alignItems: "center",
            flexWrap: "wrap",
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
              value={getFieldValue("title")}
              onChange={(event: any) =>
                handleChange("title", event.target.value)
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
            <Select
              id="categoryId"
              gap="3"
              key="categoryId"
              label="Category"
              placeholder="Please select category"
              className={"required"}
              value={getFieldValue("categoryId")}
              optionList={fieldOptions?.Category}
              onChange={(value: string) => handleChange("categoryId", value)}
              position="popper"
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
              id="subCategoryId"
              gap="3"
              key="subCategoryId"
              label="Subcategories"
              placeholder="Please select Subcategory"
              value={getFieldValue("subCategoryId")}
              className={"required"}
              optionList={fieldOptions?.subcategories}
              onChange={(value: string) => handleChange("subCategoryId", value)}
              position="popper"
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
              optionList={fieldOptions?.OwnershipType}
              onChange={(value: string) =>
                handleChange("ownershipTypeId", value)
              }
              position="popper"
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
              optionList={fieldOptions?.TransactionType}
              onChange={(value: string) =>
                handleChange("transactionTypeId", value)
              }
              position="popper"
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
              optionList={fieldOptions?.propertyStatuses}
              onChange={(value: string) =>
                handleChange("propertyStatusId", value)
              }
              position="popper"
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 12px)",
              flex: "0 0 calc(33% - 12px)",
            }}
          >
            <Select
              id="buildingPermit"
              gap="3"
              key="buildingPermit"
              label="Building Permit"
              placeholder="Please select a building permit"
              value={getFieldValue("buildingPermitId")}
              optionList={fieldOptions?.BuildingPermit}
              onChange={(value: string) =>
                handleChange("buildingPermitId", value)
              }
              position="popper"
            />
          </Flex>
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
            alignItems: "center",
            flexWrap: "wrap",
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
              id="zone"
              gap="3"
              key="zone"
              label="Zone"
              placeholder="Select zone"
              value={getFieldValue("zone")}
              optionList={fieldOptions?.Zone}
              onChange={(value: string) => handleChange("zone", value)}
              position="popper"
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
              id="mapLink"
              gap="3"
              type="link"
              key="mapLink"
              label="Google map link"
              placeholder="Enter google map link"
              className={"required"}
              value={getFieldValue("mapLink")}
              onChange={(value: string) =>
                handleChange("mapLink", value)
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
            <Select
              id="roadAccess"
              gap="3"
              key="roadAccess"
              label="Road Access"
              placeholder="Please select Road access"
              value={getFieldValue("roadAccess")}
              className={"required"}
              optionList={fieldOptions?.RoadAccess}
              onChange={(value: string) => handleChange("roadAccess", value)}
              position="popper"
            />
          </Flex>
          <Flex
            gap={"3"}
            direction={"row"}
            // style={{
            //   maxWidth: "calc(33% - 12px)",
            //   flex: "0 0 calc(33% - 12px)",
            // }}
          >
            {/* <InputField
              id="nearbyPoints"
              gap="3"
              key="nearbyPoints"
              label="Nearby points of Interest"
              placeholder="Nearby points"
              value={getFieldValue("nearbyPoints")}
              onChange={(value: string) => handleChange("nearbyPoints", value)}
            />
            <ButtonInput
              type="button"
              gap={"3"}
              className="btn-primary"
              direction={"column"}
              onClick={() => {
                // setShowNearbyPointsModal(true);
              }}
              disabled={false}
              styles={{ width: "120px" }}
            >
              <span>+</span>
            </ButtonInput> */}
            <DynamicInputList
              inputGroups={[
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
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "nearByPoints",
                value: "+",
              }}
              // setInputs={setInputs}
              handleChange={handleChange}
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
            alignItems: "center",
            flexWrap: "wrap",
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
              id="landSizeId"
              gap="3"
              key="landSizeId"
              label="Land Size"
              placeholder="Please select land size"
              className={"required"}
              value={getFieldValue("landSizeId")}
              optionList={fieldOptions?.LandSize}
              onChange={(value: string) => handleChange("landSizeId", value)}
              position="popper"
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
              value={getFieldValue("builtUpArea")}
              onChange={(event: any) =>
                handleChange("builtUpArea", event.target.value)
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
              id="pricePerUnit"
              gap="3"
              type="number"
              key="pricePerUnit"
              label="Price Per Area Unit"
              placeholder="Price per unit"
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
              id="numberOfFloors"
              gap="3"
              type="number"
              key="numberOfFloors"
              label="Number of Floors"
              placeholder="Total Price"
              value={getFieldValue("numberOfFloors")}
              onChange={(event: any) =>
                handleChange("numberOfFloors", event.target.value)
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
              id="maxRooms"
              gap="3"
              type="number"
              key="maxRooms"
              label="Max Rooms"
              placeholder="Total Price"
              value={getFieldValue("numberOfFloors")}
              onChange={(event: any) =>
                handleChange("numberOfFloors", event.target.value)
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
              optionList={fieldOptions?.Furnishing}
              onChange={(value: string) => handleChange("furnishingId", value)}
              position="popper"
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
              id="parkingSpaceId"
              gap="3"
              key="parkingSpaceId"
              label="Parking Space"
              placeholder="Parking Space"
              value={getFieldValue("parkingSpaceId")}
              optionList={fieldOptions?.ParkingSpace}
              onChange={(value: string) =>
                handleChange("parkingSpaceId", value)
              }
              position="popper"
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
            <DateInputWithIcon
              id="buildingYear"
              gap={"3"}
              type="date"
              label="Building Year"
              placeholder="Building Year"
              iconName="CalendarIcon"
              iconPosition="right"
              size={"3"}
              value={new Date()}
              onChange={(value: any) => handleChange("buildingYear", value)}
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
            <DateInputWithIcon
              id="availableDate"
              gap={"3"}
              type="date"
              label="Property Available Date"
              placeholder="Property Available Date"
              iconName="CalendarIcon"
              iconPosition="right"
              size={"3"}
              value={new Date()}
              onChange={(value: any) => handleChange("availableDate", value)}
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
              id="pool"
              gap="3"
              key="pool"
              label="Have Pool"
              placeholder="Have Pool"
              value={getFieldValue("pool")}
              optionList={[{ label: "label", value: "1" }]}
              onChange={(value: string) => handleChange("pool", value)}
              position="popper"
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
              id="poolTypeId"
              gap="3"
              key="poolTypeId"
              label="Pool Type"
              placeholder="Pool Type"
              value={getFieldValue("poolTypeId")}
              optionList={fieldOptions?.PoolType}
              onChange={(value: string) => handleChange("poolTypeId", value)}
              position="popper"
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
            />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
