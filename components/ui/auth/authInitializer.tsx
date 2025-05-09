"use client";

import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "@/features/redux/Auth/authSlice";
import { setupAxiosInterceptors } from "@/utils/setupAxiosInterceptors";
import { RootState } from "@/store";

interface Props {
  children: ReactNode;
}

export function AuthInitializer({ children }: Props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const data = useSelector((state: RootState) => state.auth.data);

  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    setupAxiosInterceptors(() => data?.token);

    // setLoading(false);
  }, [data]);

  if (loading) return null; // or show a spinner

  return <>{children}</>;
}
