"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
// import styles from "./Sidebar.module.scss";

const Sidebar = ({ pageType }: any) => {
  return (
    <div>
      {pageType}
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>
              Dashboard
              <ChevronDownIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <a href="/dashboard/overview">Overview</a>
            <a href="/dashboard/stats">Stats</a>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>
              Settings
              <ChevronDownIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <a href="/settings/profile">Profile</a>
            <a href="/settings/security">Security</a>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default Sidebar;
