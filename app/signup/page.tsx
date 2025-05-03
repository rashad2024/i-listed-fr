"use client";

import { useState } from "react";

import RegisterForm from "./registerForm";
import OtpInput from "./otpValidate";
import SetPassword from "./setPassword";

import "../../styles/pages/signup.scss";

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <div className="signup-page-container">
      {!registerEmail && <RegisterForm setRegisterEmail={setRegisterEmail} />}
      {registerEmail && !otp && (
        <OtpInput registerEmail={registerEmail} setOtp={setOtp} />
      )}
      {registerEmail && otp && (
        <SetPassword registerEmail={registerEmail} otp={otp} />
      )}
    </div>
  );
}
