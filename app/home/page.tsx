"use client";

import React from "react";
import AuthGuard from "@/components/ui/auth/authGuard";

import AllProperties from "@/app/property/all-properties";

import "@/styles/pages/home.scss";

export default function HomePage({ pageType }: any) {
  return (
    <AuthGuard>
      <main>
        <AllProperties />
      </main>
    </AuthGuard>
  );
}
