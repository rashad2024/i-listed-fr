"use client";

import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import {
  registerInitiate,
  forgotPasswordInitiate,
  registerVerify,
  forgotPasswordVerify,
} from "@/features/auth/redux/Auth/authThunks";

import { Flex, TextField, Text, Strong, Spinner } from "@radix-ui/themes";

import ButtonInput from "../../components/ui/common/Button";

export default function OtpInput({
  registerEmail,
  setOtp,
  isForgotPassword,
}: {
  registerEmail: string;
  setOtp: any;
  isForgotPassword?: boolean;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );

  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [invalidOtp, setInvalidOtp] = useState("");

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return; // Only allow digits

    e.target.value = value.slice(-1); // Allow only 1 character

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
    setInvalidOtp("");
  };

  const onSubmit = async () => {
    // Handle form submission here
    const otp = inputsRef.current.map((input) => input?.value).join("");
    console.log(otp);

    setInvalidOtp("");

    if (isForgotPassword) {
      await dispatch(forgotPasswordVerify({ email: registerEmail, code: otp }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          if (data.success) {
            setInvalidOtp("");
            setOtp(otp);
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            setInvalidOtp(err.messages.join("."));
          });
        });
      return;
    } else {
      await dispatch(registerVerify({ email: registerEmail, code: otp }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          if (data.success) {
            setInvalidOtp("");
            setOtp(otp);
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            setInvalidOtp(err.messages.join("."));
          });
        });
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    setTimeLeft(30);
    setCanResend(false);
    setInvalidOtp("");
    inputsRef.current.map((input: any) => {
      input.value = "";
    });
    // You can also trigger your resend API here
    console.log("Form submitted:", data);
    // handleSubmit((data) => {
    //   console.log("Form submitted:", data);
    // });

    if (isForgotPassword) {
      await dispatch(forgotPasswordInitiate({ email: registerEmail }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          // if (data.success) setRegisterEmail(email);
        })
        .catch((err) => {
          console.error("Registration error:", err);
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            setInvalidOtp(err.messages.join("."));
          });
        });
    } else {
      await dispatch(registerInitiate({ email: registerEmail, role: "ADMIN" }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          // if (data.success) setRegisterEmail(email);
        })
        .catch((err) => {
          console.error("Registration error:", err);
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            setInvalidOtp(err.messages.join("."));
          });
        });
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // clear timer on unmount
  }, [timeLeft]);

  return (
    <div className="otp-validate-form">
      <h2>Check your inbox</h2>
      <p>
        {isForgotPassword ? (
          <Text>
            {" "}
            Enter the 6-digit code we sent to
            <Strong> {registerEmail} </Strong>
            to finish creating your new password.
          </Text>
        ) : (
          <Text>
            {" "}
            Enter the 6-digit code we sent to
            <Strong> {registerEmail} </Strong>
            to finish your sign up.{" "}
          </Text>
        )}
      </p>
      <Strong>6-digit code</Strong>
      <Flex gap="3">
        {[...Array(6)].map((_, index) => (
          <TextField.Root
            key={index}
            ref={(el: any) => (inputsRef.current[index] = el)}
            maxLength={1}
            size="3"
            style={{
              marginTop: "8px",
              textAlign: "center",
              fontSize: "24px",
              borderRadius: "12px",
            }}
            onChange={(e: any) => handleChange(index, e)}
            onKeyDown={(e: any) => handleKeyDown(index, e)}
          />
        ))}
      </Flex>
      {invalidOtp && (
        <Flex gap="3" justify={"between"}>
          <p className="text-red form-error">{invalidOtp}</p>
          <ButtonInput
            gap="3"
            direction="column"
            onClick={handleResend}
            disabled={!!loading}
            className="btn-link link-blue send-again-link"
          >
            <span>Send again</span>
          </ButtonInput>
        </Flex>
      )}

      <ButtonInput
        type="submit"
        gap="3"
        direction="column"
        onClick={onSubmit}
        disabled={!!loading}
        className="btn-primary"
      >
        <span>{loading ? <Spinner size="2" /> : "Verify OTP"}</span>
      </ButtonInput>

      <Text className="otp-footer">
        {" "}
        {!canResend ? (
          <Text>Didn’t receive the code? Resend code in {timeLeft}s</Text>
        ) : (
          <Text>
            Didn’t receive the code?
            <ButtonInput
              gap="3"
              direction="row"
              onClick={handleResend}
              disabled={!!loading}
              className="btn-link"
              styles={{ marginLeft: "4px" }}
            >
              <span>Resend OTP</span>
            </ButtonInput>
          </Text>
        )}
      </Text>
    </div>
  );
}
