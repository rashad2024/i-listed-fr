"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import PropertyForm from "./property-form";

import "../../styles/pages/add-property.scss";

export default function AddProperty() {
  return (
    <main>
      <Sidebar pageType={"property"} />
      <div className="right-container">
        <Header />
        <PropertyForm />
      </div>
    </main>
  );
}
