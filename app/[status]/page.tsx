"use client";

import { useParams, useSearchParams } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import AllProperties from "@/app/property/all-properties";

import "@/styles/pages/property.scss";

export default function PropertyDrafts() {
  const params = useParams();
  const { status } = params;
  return (
    <main>
      <Sidebar pageType={"drafts"} />
      <div className="right-container">
        <Header />
        <AllProperties status={status} />
      </div>
    </main>
  );
}
