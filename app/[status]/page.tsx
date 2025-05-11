"use client";

import { useParams, useSearchParams } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import AllProperties from "@/app/property/all-properties";

import "@/styles/pages/property.scss";

export default function PropertyDrafts() {
  const params = useParams();
  const { status } = params;
  return <AllProperties status={status} />;
}
