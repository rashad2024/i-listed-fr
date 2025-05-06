// app/layout.tsx
"use client";

import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";

import { AuthInitializer } from "@/components/ui/auth/authInitializer";
import AuthGuard from "@/components/ui/auth/authGuard";

import Skeleton from "@/components/ui/common/Skeleton";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";

import "../styles/globals.scss";
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/components/_skeleton.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body cz-shortcut-listen="true" className="font-sans">
        <Provider store={store}>
          <PersistGate loading={<Skeleton />} persistor={persistor}>
            <AuthInitializer>
              <AuthGuard>
                <Theme>{children}</Theme>
              </AuthGuard>
            </AuthInitializer>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
