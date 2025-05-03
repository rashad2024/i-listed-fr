"use client";

import React from "react";
import AuthGuard from "@/components/ui/auth/authGuard";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import "@/styles/pages/home.scss";

export default function HeaderPage({
  pageType,
}: {
  pageType: string | undefined;
}) {
  return (
    <AuthGuard>
      <main>
        <Header />
        <Sidebar pageType={pageType} />
      </main>
    </AuthGuard>
  );
}
