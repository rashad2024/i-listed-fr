"use client";

import { Flex, Text, Link } from "@radix-ui/themes";
import Icon from "@/components/ui/common/Icon";

import TableWithPagination from "@/components/ui/common/TableWithPagination";

import "@/styles/pages/property-list.scss";

export default function AllProperties() {
  return (
    <Flex
      direction={"column"}
      gap={"3"}
      justify={"start"}
      className="property-list-container"
    >
      <Flex
        direction={"row"}
        gap={"3"}
        justify={"between"}
        className="preview-header"
      >
        <Flex direction={"column"} gap={"3"} justify={"start"} className="">
          <h2>Property Details</h2>
          <Text as="p" className="preview-subtitle">
            {" "}
            View and manage property information
          </Text>
        </Flex>
        <Link href="/add-property" className="btn-primary add-property">
          <Icon name="PlusIcon" size={24} color="white" /> Add Property
        </Link>
      </Flex>
      <Flex
        direction={"row"}
        gap={"3"}
        justify={"between"}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <TableWithPagination />{" "}
      </Flex>
    </Flex>
  );
}
