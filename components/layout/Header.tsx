// components/layout/Header.tsx
"use client";

import React, { useState } from "react";
import { Avatar, Flex, Text } from "@radix-ui/themes";

import InputField from "../ui/common/Input";
import SelectField from "../ui/common/Select";
import Icon from "../ui/common/Icon";
import CustomToast from "../ui/common/Toast";

import "../../styles/components/_header.scss";

export default function Header() {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("usd");
  const [showToaster, setShowToaster] = useState("");

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
          onChange={(e) => setShowToaster("Search")}
          placeholder="Search here"
          iconName="MagnifyingGlassIcon"
          iconPosition="right"
          iconClick=""
          radius="12px"
        />
      </div>

      {/* Icon buttons + selectors + user */}
      <div className="header-profile-notification-container">
        <Text as="span" onClick={() => setShowToaster("Messages")}>
          {" "}
          <Icon name="ChatBubbleIcon" />{" "}
        </Text>
        <Text as="span" onClick={() => setShowToaster("Notifications")}>
          <Icon name="BellIcon" />
        </Text>

        {/* Language Selector */}
        <div className="currency-language-selector">
          <SelectField
            gap={"3"}
            label=""
            optionList={[
              { name: "EN", id: "en" },
              { name: "FR", id: "fr" },
            ]}
            onChange={(value: string) => setLanguage(value)}
            value={language}
            position="popper"
          />

          {/* Currency Selector */}
          <SelectField
            gap={"3"}
            label=""
            optionList={[
              { name: "USD", id: "usd" },
              { name: "EUR", id: "eur" },
            ]}
            onChange={(value: string) => setCurrency(value)}
            value={currency}
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
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
        </Flex>
      </div>
      {showToaster && (
        <CustomToast
          onClose={() => setShowToaster("")}
          headerMessage={`${showToaster} coming soon!`}
          bodyMessage="This feature is currently under development and will be available
              in an upcoming update. Stay tuned!"
        />
      )}
    </header>
  );
}
