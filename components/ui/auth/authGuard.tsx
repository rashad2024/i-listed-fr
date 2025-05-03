"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store";

const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.data);

  useEffect(() => {
    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!user && !isPublic) {
      // Not authenticated and trying to access private route
      router.replace("/login");
    }

    if (user && isPublic) {
      // Already logged in and trying to visit public route
      router.replace("/");
    }
  }, [user, pathname, router]);

  return <>{children}</>;
}
