"use client";

import { Text, Link } from "@radix-ui/themes";

import Icon from "../ui/common/Icon";

import "../../styles/components/_sidebar.scss";

export default function Sidebar({ pageType }: { pageType?: string }) {
  console.log(pageType);
  return (
    <div className="sidebar">
      <div className="logo">iListed</div>
      <hr />
      <div className="menu">
        <Link href="/dashboard">
          <Icon name="DashboardIcon" size={16} />
          <Text>Dashboard</Text>
        </Link>
      </div>
      <div className="menu">
        <Link
          href="/add-property"
          className={pageType === "property" ? "active" : ""}
        >
          <Icon name="HomeIcon" size={16} />
          <Text>Properties</Text>
        </Link>
      </div>
    </div>
  );
}
