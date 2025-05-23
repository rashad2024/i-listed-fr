// app/login/page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, SetStateAction } from "react";

import { AppDispatch, RootState } from "@/store";
import {
  registerInitiate,
  forgotPasswordInitiate,
} from "@/features/redux/Auth/authThunks";
import { getRoles } from "@/utils/helpers/user";

import { Text, Link, Spinner } from "@radix-ui/themes";

import InputField from "@/components/ui/common/Input";
import SelectField from "@/components/ui/common/Select";
import ButtonInput from "@/components/ui/common/Button";
import CustomToast from "@/components/ui/common/Toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/utils/validation/formSchema";

import { z } from "zod";

import "../../styles/pages/signup.scss";

type FormData = z.infer<typeof registerFormSchema>;

export default function RegisterForm({
  setRegisterEmail,
  setUserRole,
  isForgotPassword,
}: {
  setRegisterEmail: any;
  isForgotPassword?: boolean;
  setUserRole?: any;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [optionList, setOptionList] = useState<SetStateAction<any>>([]);
  const [showToast, setShowToast] = useState("");
  let {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors: formErrors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const handleChange = (e: any) => {
    const key = e?.target?.id;

    if (key === "email") {
      setEmail(e?.target?.value);
      setValue("email", e.target.value, { shouldValidate: true });
    } else {
      setRole(e);
      if (e !== "ADMIN") {
        const roleName =
          optionList.find((option: any) => option.id === e)?.name || role;
        setShowToast(roleName);
        return;
      }
      setValue("role", e, { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    if (isForgotPassword) {
      await dispatch(forgotPasswordInitiate({ email }))
        .unwrap()
        .then((data) => {
          // Do something after store is updated
          if (data.success) {
            setRegisterEmail(email);
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
          const { errors } = JSON.parse(err);

          errors.map((err: any) => {
            // if (!Object.keys(formErrors).length) {
            setError(err.field, {
              type: "manual",
              message: err.messages.join("."),
            });
          });
        });
    } else {
      await dispatch(registerInitiate({ email, role }))
        .unwrap()
        .then((data) => {
          // Do something after store is updated
          if (data.success) {
            setUserRole(role);
            setRegisterEmail(email);
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
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const roleInfo = await getRoles();

        console.log(roleInfo);
        setOptionList(roleInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="signup-page">
        <h2>{!isForgotPassword ? "Get started with" : "Forgot password!"}</h2>

        {!isForgotPassword && (
          <SelectField
            id={"role"}
            gap={"2"}
            label="Account type"
            placeholder="Please select an account type"
            optionList={optionList}
            onChange={(e: any) => handleChange(e)}
            value={role}
            errors={formErrors.role}
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
          errors={formErrors.email}
          {...register("email")}
          onChange={handleChange}
          radius="12px"
        />

        <ButtonInput
          type="submit"
          gap="3"
          direction="column"
          onClick={() => onSubmit(data)}
          disabled={formErrors.email || loading ? true : false}
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
      {showToast && (
        <CustomToast
          onClose={() => setShowToast("")}
          headerMessage={`${showToast} signup is coming soon!`}
          bodyMessage="Other role signup is currently under development and will be available
                    in an upcoming update. Stay tuned!"
        />
      )}
    </form>
  );
}
