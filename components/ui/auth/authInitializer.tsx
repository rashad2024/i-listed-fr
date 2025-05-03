"use client";

import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "@/features/auth/redux/Auth/authSlice";

interface Props {
  children: ReactNode;
}

export function AuthInitializer({ children }: Props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }

    setLoading(false);
  }, []);

  if (loading) return null; // or show a spinner

  return <>{children}</>;
}
