"use client";

import AuthGuard from "@/components/ui/auth/authGuard";
import HomePage from "./home/page";

import "../styles/globals.scss";
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/components/_skeleton.scss";
import "@/styles/pages/home.scss";
export default function Home() {
  return (
    <AuthGuard>
      <HomePage />
    </AuthGuard>
  );
}
