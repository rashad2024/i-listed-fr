"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import PropertyForm from "./property-form";

import "../../styles/pages/property.scss";

export default function AddProperty(property?: any, previewProperty?: any) {
  return (
    <main>
      <Sidebar pageType={previewProperty ? "property" : "add-property"} />
      <div className="right-container">
        <Header />
        <PropertyForm property={property} previewProperty={previewProperty} />
      </div>
    </main>
  );
}
