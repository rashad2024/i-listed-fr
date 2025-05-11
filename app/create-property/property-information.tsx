import { useEffect, useState } from "react";
import { Text, Flex, Card, Inset, Strong } from "@radix-ui/themes";

import InputField from "@/components/ui/common/Input";
import Select from "@/components/ui/common/Select";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";
import ButtonInput from "@/components/ui/common/Button";
import DynamicInputList from "@/components/ui/common/DynamicInputList";

export default function PropertyInformation() {
  const { addValue, getValues } = useDynamicFieldMap();
  const [inputs, setInputs] = useState<any[]>([{}]);

  const getFieldValue = (name: string) => {
    console.log(name, getValues(), getValues()[name]);
    return getValues()[name];
  };
  const handleChange = (
    name: string,
    value: string | number | boolean | Array<any>
  ) => {
    console.log(name, value);
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
              optionList={[{ label: "label", value: "8" }]}
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
              optionList={[{ label: "label", value: "1" }]}
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
              optionList={[{ label: "label", value: "2" }]}
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
              optionList={[{ label: "label", value: "3" }]}
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
              optionList={[{ label: "label", value: "4" }]}
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
              optionList={[{ label: "label", value: "5" }]}
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
              optionList={[{ label: "label", value: "2" }]}
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
              key="mapLink"
              label="Google map link"
              placeholder="Enter google map link"
              className={"required"}
              value={getFieldValue("transactionTypeId")}
              onChange={(value: string) =>
                handleChange("transactionTypeId", value)
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
              optionList={[{ label: "label", value: "4" }]}
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
    </Flex>
  );
}
