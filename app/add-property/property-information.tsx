"use client";

import { SetStateAction, useEffect, useState } from "react";

import { Flex, Text } from "@radix-ui/themes";

import { getFieldOptions } from "@/utils/helpers/add-property";

export default function PropertyInformation({}) {
  const [propertyOptions, setOptionList] = useState<SetStateAction<any>>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const propertyOptions = await getFieldOptions();

        console.log(propertyOptions);

        setOptionList(propertyOptions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOptions();
  }, []);
  const BasicInfoCard = () => {
    return (
      <Flex gap={"3"} direction={"column"}>
        <Text as="span">Basic Information</Text>
      </Flex>
    );
  };
  return (
    <Flex gap={"3"} direction={"row"}>
      <BasicInfoCard />
      {/* <LocationInfoCard />
      <PropertyDetailsCard /> */}
    </Flex>
  );
}
