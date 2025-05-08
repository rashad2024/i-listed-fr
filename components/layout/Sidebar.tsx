"use client";

import { Text, Link } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import Icon from "../ui/common/Icon";

import "../../styles/components/_sidebar.scss";

export default function Sidebar({ pageType }: { pageType?: string }) {
  return (
    <div className="sidebar">
      <div className="logo">iListed</div>
      <hr />

      <div className="menu"></div>
      <div className="menu ">
        <Accordion.Root type="multiple" className="accordionRoot">
          <Accordion.Item value="item-2" className="accordionItem">
            <Accordion.Header>
              {/* <Accordion.Trigger className="accordionTrigger"> */}
              <Link href="/dashboard">
                <Icon name="CustomDashboardIcon" size={16} />
                <Text>Dashboard</Text>
              </Link>
              {/* </Accordion.Trigger> */}
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item
            value="item-2"
            className={`accordionItem ${pageType ? "active" : ""}`}
          >
            <Accordion.Header>
              <Accordion.Trigger className="accordionTrigger">
                <span>
                  <Icon name="HouseIcon" size={16} /> <Text>Properties</Text>
                </span>
                <ChevronDownIcon />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordionContent">
              <Link
                href="/add-property"
                className={pageType === "property" ? "active" : ""}
              >
                <Text>Add Property</Text>
              </Link>
              <Link
                href="/drafts"
                className={pageType === "drafts" ? "active" : ""}
              >
                <Text>Drafts</Text>
              </Link>
              <Link
                href="/property-list"
                className={pageType === "property-list" ? "active" : ""}
              >
                <Text>Listings</Text>
              </Link>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
