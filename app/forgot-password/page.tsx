"use client";

import { useState } from "react";

import RegisterForm from "../signup/registerForm";
import OtpInput from "../signup/otpValidate";
import SetPassword from "../signup/setPassword";

import "../../styles/pages/signup.scss";

export default function ForgotPasswordPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <div className="signup-page-container">
      {!registerEmail && (
        <RegisterForm
          setRegisterEmail={setRegisterEmail}
          isForgotPassword={true}
        />
      )}
      {registerEmail && !otp && (
        <OtpInput
          registerEmail={registerEmail}
          setOtp={setOtp}
          isForgotPassword={true}
        />
      )}
      {registerEmail && otp && (
        <SetPassword
          registerEmail={registerEmail}
          otp={otp}
          isForgotPassword={true}
        />
      )}
    </div>
  );
}
