// app/login/page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { AppDispatch, RootState } from "@/store";
import {
  registerInitiate,
  forgotPasswordInitiate,
} from "@/features/auth/redux/Auth/authThunks";
import { getRoles } from "@/utils/helpers/user";

import { Text, Link, Spinner } from "@radix-ui/themes";

import InputField from "@/components/ui/common/Input";
import SelectField from "@/components/ui/common/Select";
import ButtonInput from "@/components/ui/common/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/utils/validation/formSchema";
import { z } from "zod";

import "../../styles/pages/signup.scss";

type FormData = z.infer<typeof registerFormSchema>;

export default function RegisterForm({
  setRegisterEmail,
  isForgotPassword,
}: {
  setRegisterEmail: any;
  isForgotPassword?: boolean;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [optionList] = useState(getRoles());
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const handleChange = (e: any) => {
    const key = e.target.id;

    if (key === "email") {
      setEmail(e?.target?.value);
      setValue("email", e.target.value, { shouldValidate: true });
    } else {
      setRole(e?.target?.value);
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // handleSubmit((data) => {
    //   console.log("Form submitted:", data);
    // });

    if (isForgotPassword) {
      await dispatch(forgotPasswordInitiate({ email }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          if (data.success) setRegisterEmail(email);
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    } else {
      await dispatch(registerInitiate({ email, role }))
        .unwrap()
        .then((data) => {
          console.log("Success:", data);
          // Do something after store is updated
          if (data.success) setRegisterEmail(email);
        })
        .catch((err) => {
          console.error("Registration error:", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="signup-page">
        <h2>{!isForgotPassword ? "Get started with" : "Forgot password!"}</h2>

        {!isForgotPassword && (
          <SelectField
            id={"accountType"}
            gap={"2"}
            label="Account type"
            optionList={[{ label: "Admin", value: "Admin" }]}
            onChange={handleChange}
            value={"Admin"}
            position="popper"
          />
        )}

        <InputField
          id="email"
          gap={"2"}
          label="Email"
          type={"email"}
          value={email}
          placeholder={"Email"}
          errors={errors.email}
          {...register("email")}
          onChange={handleChange}
          radius="12px"
        />

        <ButtonInput
          type="submit"
          gap="3"
          direction="column"
          onClick={() => onSubmit}
          disabled={errors.email || loading ? true : false}
          className="btn-primary"
        >
          <span>{loading ? <Spinner size="2" /> : "Continue with email"}</span>
        </ButtonInput>

        {!isForgotPassword && (
          <>
            <hr />
            <Text className="signup-footer">
              Already have an account? <Link href="/login"> Sign in</Link> here
            </Text>{" "}
          </>
        )}
      </div>
    </form>
  );
}
