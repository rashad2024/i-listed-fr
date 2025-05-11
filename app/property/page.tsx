"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import AllProperties from "./all-properties";

import "../../styles/pages/property.scss";

export default function PropertyList() {
  return (
    <main>
      <Sidebar pageType={"property-list"} />
      <div className="right-container">
        <Header />
        <AllProperties />
      </div>
    </main>
  );
}
