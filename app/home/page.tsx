"use client";

import React from "react";

import AllProperties from "@/app/property/all-properties";

import "@/styles/pages/home.scss";

export default function HomePage({ pageType }: any) {
  return (
    <main>
      <AllProperties />
    </main>
  );
}
