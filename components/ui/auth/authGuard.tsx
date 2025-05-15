"use client";
import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store";

import Skeleton from "../common/Skeleton";

const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.data);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!user?.token && !isPublic) {
      // Not authenticated and trying to access private route
      router.push("/login");
    } else if (user && isPublic) {
      // Already logged in and trying to visit public route
      router.push("/");
    } else {
      setChecking(false);
    }
  }, [user, pathname, router]);

  if (checking) return <Skeleton />;

  return <>{children}</>;
}
