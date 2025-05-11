// app/login/page.tsx
"use client";

import Icon from "@/components/ui/common/Icon";

import LoginForm from "./loginForm";

import TableWithPagination from "@/app/property/all-properties";

import "../../styles/pages/login.scss";

export default function LoginPage({ setRegisterEmail }: any) {
  return (
    <div className="login-page-container">
      <h1 className="page-logo">iListed</h1>
      <Icon name="CustomLogoIcon" />
      <LoginForm />
      {/* <TableWithPagination /> */}
    </div>
  );
}
