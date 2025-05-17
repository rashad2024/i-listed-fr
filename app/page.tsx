"use client";

import AuthGuard from "@/components/ui/auth/authGuard";
import HomePage from "./home/page";

export default function Home() {
  return (
    <AuthGuard>
      <HomePage />
    </AuthGuard>
  );
}
