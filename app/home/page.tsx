"use client";

import React from "react";
import AuthGuard from "@/components/ui/auth/authGuard";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import "@/styles/pages/home.scss";

export default function HeaderPage({ pageType }: any) {
  return (
    <AuthGuard>
      <main>{/* <Header /> */}</main>
    </AuthGuard>
  );
}
