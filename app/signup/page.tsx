"use client";

import { useState } from "react";

import RegisterForm from "./registerForm";
import OtpInput from "./otpValidate";
import SetPassword from "./setPassword";

import Icon from "@/components/ui/common/Icon";

import "../../styles/pages/signup.scss";

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <div className="signup-page-container">
      <h1 className="page-logo">iListed</h1>
      <Icon name="CustomLogoIcon" />

      {!registerEmail && (
        <RegisterForm
          setRegisterEmail={setRegisterEmail}
          setUserRole={setUserRole}
        />
      )}
      {registerEmail && !otp && (
        <OtpInput registerEmail={registerEmail} setOtp={setOtp} />
      )}
      {registerEmail && otp && (
        <SetPassword
          registerEmail={registerEmail}
          otp={otp}
          userRole={userRole}
        />
      )}
    </div>
  );
}
