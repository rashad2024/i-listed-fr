// components/layout/Header.tsx
"use client";

import * as React from "react";
import { Avatar } from "@radix-ui/react-avatar";

import InputField from "../ui/common/Input";
import SelectField from "../ui/common/Select";
import Icon from "../ui/common/Icon";

import Image from "next/image";

import "../../styles/components/_header.scss";

export default function Header() {
  return (
    <header className="header-container">
      {/* Search Input */}
      <div className="search-input">
        <InputField
          id="search"
          gap="2"
          label=""
          value=""
          type="text"
          onChange={(e) => console.log(e)}
          placeholder="Search here"
          iconName="MagnifyingGlassIcon"
          iconPosition="right"
          iconClick=""
          radius="12px"
        />
      </div>

      {/* Icon buttons + selectors + user */}
      <div className="header-profile-notification-container">
        <Icon name="ChatBubbleIcon" />
        <Icon name="BellIcon" />

        {/* Language Selector */}
        <div className="currency-language-selector">
          <SelectField
            gap={"3"}
            label=""
            optionList={[
              { label: "EN", value: "en" },
              { label: "FR", value: "fr" },
            ]}
            onChange={() => {}}
            value={"EN"}
            position="popper"
          />

          {/* Currency Selector */}
          <SelectField
            gap={"3"}
            label=""
            optionList={[
              { label: "USD", value: "usd" },
              { label: "EUR", value: "eur" },
            ]}
            onChange={() => {}}
            value={"USD"}
            position="popper"
          />
        </div>

        {/* User Profile */}
        <div className="profile-section">
          <div className="text-sm">
            <div className="font-medium">Henry Jr.</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
          <span className="w-2 h-2 bg-green-500 rounded-full ml-1"></span>
        </div>
        <Avatar>
          <Image
            src="/avatar.jpg"
            width={32}
            height={32}
            className="rounded-full"
            alt="Profile"
          />
        </Avatar>
      </div>
    </header>
  );
}
