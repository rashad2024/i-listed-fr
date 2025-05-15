"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { registerUser, resetPassword } from "@/features/redux/Auth/authThunks";

import { Flex, Text, Spinner } from "@radix-ui/themes";

import ButtonInput from "../../components/ui/common/Button";
import InputField from "@/components/ui/common/Input";
import Icon from "@/components/ui/common/Icon";

export default function SetPassword({
  registerEmail,
  otp,
  isForgotPassword,
  userRole,
}: {
  registerEmail: string;
  otp: string;
  isForgotPassword?: boolean;
  userRole?: any;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIconState, setPasswordIconState] = useState("EyeNoneIcon");
  const [confirmPasswordIconState, setConfirmPasswordIconState] =
    useState("EyeNoneIcon");

  const [characterCheck, setCharacterCheck] = useState(false);
  const [specialCharacterCheck, setSpecialCharacterCheck] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [showValidation, setShowValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "the password entered doesn't match"
  );

  const onSubmit = async () => {
    // Handle form submission here
    // if (!showValidation) {
    //   setPasswordMatched(false);
    //   setErrorMessage(
    //     "Password must have 8 or more characters and at least 1 number or special character"
    //   );
    //   return;
    // }
    if (password !== confirmPassword) {
      setPasswordMatched(false);
      return;
    }

    if (isForgotPassword) {
      await dispatch(
        resetPassword({ email: registerEmail, code: otp, password })
      )
        .unwrap()
        .then((data) => {
          // Do something after store is updated
          if (data.success) {
            setPasswordMatched(true);
            router.push("/login"); // Redirect to /property-list
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    } else {
      await dispatch(
        registerUser({
          email: registerEmail,
          code: otp,
          password,
          role: userRole,
        })
      )
        .unwrap()
        .then((data) => {
          // Do something after store is updated
          if (data.success) {
            setPasswordMatched(true);

            router.push("/add-property"); // Redirect to /property-list
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    }
  };

  const checkNumberOfCharacters = (password: string) =>
    !!(password.length >= 8);
  const checkSpecialCharacters = (password: string) =>
    !!/[!@#$%^&*(),.?":{}|<>0-9]/.test(password);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.id === "password") {
      console.log("e.target.value: ", e.target.value);
      setPassword(e.target.value);
      // setShowValidation(true);

      if (
        !checkSpecialCharacters(e.target.value) ||
        !checkNumberOfCharacters(e.target.value)
      ) {
        setShowValidation(true);
      } else {
        setShowValidation(false);
      }

      setCharacterCheck(checkNumberOfCharacters(e.target.value));
      setSpecialCharacterCheck(checkSpecialCharacters(e.target.value));
      // setPasswordMatched(true);
    } else if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);

      setPasswordMatched(true);
    }

    console.log("e.target.value: ", e.target.value);

    // setShowValidation(false);
  };

  return (
    <div className="set-password-form">
      <h2>{isForgotPassword ? "Set new password" : "Set your password"}</h2>

      <InputField
        id="password"
        gap={"2"}
        label="Password"
        type={passwordIconState === "EyeNoneIcon" ? "password" : "text"}
        value={password}
        placeholder={"Password"}
        // errors={errors.email}
        onChange={handleChange}
        iconName={passwordIconState}
        iconPosition="right"
        iconClick={setPasswordIconState}
        radius="12px"
      />

      {showValidation ? (
        <Flex direction="column" justify="center">
          <Text size="2" mb="1">
            Your Password must have
          </Text>
          <Flex gap="1" align="center">
            {" "}
            <Icon
              name={characterCheck ? "CheckCircledIcon" : "CircleIcon"}
              size={16}
              color={characterCheck ? "green" : "currentColor"}
            />{" "}
            <Text size="2" color={characterCheck ? "green" : undefined}>
              8 or more characters
            </Text>
          </Flex>
          <Flex gap="1" align="center">
            {" "}
            <Icon
              name={specialCharacterCheck ? "CheckCircledIcon" : "CircleIcon"}
              size={16}
              color={specialCharacterCheck ? "green" : "currentColor"}
            />
            <Text size="2" color={specialCharacterCheck ? "green" : undefined}>
              At least 1 number or special character
            </Text>
          </Flex>
        </Flex>
      ) : (
        ""
      )}
      <InputField
        id="confirmPassword"
        gap={"2"}
        label="Confirm Password"
        type={confirmPasswordIconState === "EyeNoneIcon" ? "password" : "text"}
        value={confirmPassword}
        placeholder={"Confirm Password"}
        // errors={errors.email}
        onChange={handleChange}
        iconName={confirmPasswordIconState}
        iconPosition="right"
        iconClick={setConfirmPasswordIconState}
        radius="12px"
      />
      {!passwordMatched && (
        <Flex gap="3" justify={"between"}>
          <p className="text-red form-error">{errorMessage}</p>
        </Flex>
      )}

      <ButtonInput
        gap="3"
        direction="column"
        onClick={onSubmit}
        disabled={!passwordMatched || loading ? true : false}
        className="btn-primary"
      >
        <span>{loading ? <Spinner size="2" /> : "Set Password"}</span>
      </ButtonInput>
    </div>
  );
}
