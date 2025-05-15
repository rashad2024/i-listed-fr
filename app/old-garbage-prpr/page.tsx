"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import PropertyForm from "./property-form";

import "../../styles/pages/property.scss";

export default function AddProperty(property?: any, previewProperty?: any) {
  return <PropertyForm property={property} previewProperty={previewProperty} />;
}
