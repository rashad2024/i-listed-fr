// app/login/page.tsx
"use client";

import { useState } from "react";

import LoginForm from "./loginForm";
import RegisterForm from "../signup/registerForm";

import "../../styles/pages/login.scss";

export default function LoginPage({ setRegisterEmail }: any) {
  return (
    <div className="login-page-container">
      <LoginForm />
    </div>
  );
}
