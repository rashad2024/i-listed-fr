// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { login } from "@/features/redux/Auth/authThunks";

import { Text, Link, Flex, Checkbox, Spinner } from "@radix-ui/themes";

import InputField from "../../components/ui/common/Input";
import ButtonInput from "../../components/ui/common/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/utils/validation/formSchema";
import { z } from "zod";

import "../../styles/pages/login.scss";

type FormData = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordIconState, setPasswordIconState] = useState("EyeNoneIcon");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const handleChange = (e: any) => {
    const key = e.target.id;

    if (key === "email") {
      setEmail(e?.target?.value);
      setValue("email", e.target.value, { shouldValidate: true });
      setEmailError("");
    } else {
      setPassword(e?.target?.value);
      setValue("password", e.target.value, { shouldValidate: true });
      setPasswordError("");
    }
  };

  const onSubmit = async (data: FormData) => {
    const userData = { email, password, rememberMe };
    await dispatch(login(userData))
      .unwrap()
      .then((data) => {
        // Do something after store is updated
        if (data.success) {
          router.push("/add-property"); // Redirect to /property-list
        }
      })
      .catch((err) => {
        const { errors } = JSON.parse(err);

        errors.map((err: any) => {
          // if (!Object.keys(formErrors).length) {
          setError(err.field, {
            type: "manual",
            message: err.messages.join("."),
          });
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="login-page">
        <h2>Welcome to admin</h2>
        <Flex direction={"column"} gap={"3"} mb={"5"}>
          <InputField
            id="email"
            gap={"2"}
            label="Email"
            type={"email"}
            value={email}
            placeholder={"Email"}
            errors={emailError ? { message: emailError } : errors.email}
            {...register("email")}
            onChange={handleChange}
            radius="12px"
          />
          <InputField
            id="password"
            gap={"2"}
            label="Password"
            type={passwordIconState === "EyeNoneIcon" ? "password" : "text"}
            value={password}
            placeholder={"Password"}
            errors={
              passwordError ? { message: passwordError } : errors.password
            }
            {...register("password")}
            onChange={handleChange}
            iconName={passwordIconState}
            iconPosition="right"
            iconClick={setPasswordIconState}
            radius="12px"
          />

          <Flex gap="3" align={"center"} justify={"between"} mt={"-2"}>
            <Text as="label" size="2">
              <Flex as="span" gap="2">
                <Checkbox
                  size="2"
                  onClick={(e) => {
                    setRememberMe(!rememberMe);
                  }}
                />{" "}
                Remember me
              </Flex>
            </Text>
            <ButtonInput
              type="button"
              gap="3"
              direction="column"
              onClick={() => router.push("/forgot-password")}
              disabled={false}
              className="btn-link link-blue forgot-password-link"
            >
              <span>Forgot password?</span>
            </ButtonInput>
          </Flex>

          <ButtonInput
            type="submit"
            gap="3"
            direction="column"
            onClick={() => onSubmit}
            disabled={errors.email || errors.password || loading ? true : false}
            className="btn-primary"
          >
            <span>{loading ? <Spinner size="2" /> : "Sign in"}</span>
          </ButtonInput>
        </Flex>

        <hr />

        <Text className="login-footer">
          {" "}
          Don’t have an account? <Link href="/signup"> Sign up</Link> here
        </Text>
      </div>
    </form>
  );
}
