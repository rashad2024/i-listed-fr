import { useEffect, useState } from "react";

import { Flex, Card, Text } from "@radix-ui/themes";

import {
  getFieldOptions,
  filterPropertyOptions,
} from "@/utils/helpers/add-property";

import InputField from "@/components/ui/common/Input";
import Select from "@/components/ui/common/Select";
import SliderComponent from "@/components/ui/common/Slider";
import ButtonInput from "@/components/ui/common/Button";
import Icon from "@/components/ui/common/Icon";
import Skeleton from "@/components/ui/common/Skeleton";

export default function FilterCard({
  handleChange,
  getFieldValue,
  onClick,
}: any) {
  const [propertyOptions, setPropertyOptions] = useState<any>({});

  const onChange = (name: string, value: any) => {
    handleChange(name, value);
    filterPropertyOptions(name, value, propertyOptions);
  };

  useEffect(() => {
    const fetchFormOptions = async () => {
      const options = await getFieldOptions();

      setPropertyOptions(options);
      return options;
    };
    fetchFormOptions();
  }, []);
  return (
    <Flex gap={"3"} direction={"row"}>
      {propertyOptions?.priceRange ? (
        <Card
          size="5"
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "start",
          }}
        >
          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "100%",
              flex: "0 0 100%",
            }}
          >
            <Text as="div" className="card-title">
              Property Filter
            </Text>
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
              id="search"
              gap="3"
              type="text"
              key="search"
              label="Search By Keyword"
              className={"required"}
              placeholder="Search By Name"
              value={getFieldValue ? getFieldValue("search") : ""}
              onChange={(event: any) => onChange("search", event.target.value)}
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
              optionList={[
                {
                  name: "Please select a category",
                  id: "defaultCategory",
                },
                ...(propertyOptions.category || []),
              ]}
              onChange={(value: any) => onChange("categoryId", value)}
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
              id="subcategoryId"
              gap="3"
              key="subcategoryId"
              label="Subcategories"
              placeholder="Please select Subcategory"
              value={getFieldValue("subcategoryId")}
              className={"required"}
              optionList={[
                {
                  name: "Please select a subCategory",
                  id: "defaultSubcategory",
                },
                ...(propertyOptions?.subcategory || []),
              ]}
              onChange={(value: any) => onChange("subcategoryId", value)}
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
              optionList={[
                {
                  name: "Please select a category",
                  id: "defaultTransactionType",
                },
                ...(propertyOptions?.transactionType || []),
              ]}
              onChange={(value: any) => onChange("transactionTypeId", value)}
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
            <Flex key="priceRange" gap={"5"} direction={"column"} className="">
              <Text>{"Price Range"}</Text>
              <SliderComponent
                id={"priceRange"}
                value={[
                  propertyOptions?.priceRange?.min || 0,
                  propertyOptions?.priceRange?.max || 10000,
                ]}
                onChange={(e: any, value: any) => onChange("priceRange", value)}
              />
            </Flex>
          </Flex>

          <Flex
            gap={"3"}
            direction={"column"}
            style={{
              maxWidth: "calc(33% - 20px)",
              flex: "0 0 calc(33% - 20px)",
            }}
          >
            <ButtonInput
              type="button"
              gap={"3"}
              className="btn-primary filter-button"
              direction={"column"}
              onClick={() => onClick()}
              styles={{
                color: "#fff",
                justifyContent: "end",
              }}
            >
              <Icon name="CustomFilterIcon" size={24} />
              Filter
            </ButtonInput>
          </Flex>
        </Card>
      ) : (
        <Skeleton />
      )}
    </Flex>
  );
}
