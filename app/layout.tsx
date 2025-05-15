// app/layout.tsx
"use client";

import { usePathname } from "next/navigation";

import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
// import Script from "next/script";

import { AuthInitializer } from "@/components/ui/auth/authInitializer";
import AuthGuard from "@/components/ui/auth/authGuard";

import Skeleton from "@/components/ui/common/Skeleton";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";

import "../styles/globals.scss";
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/components/_skeleton.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const metadata = {
  title: "Your App",
  description: "Your description here",
};

const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let pageType = "";

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/home"))
    pageType = "dashboard";
  else if (pathname.startsWith("/drafts")) pageType = "drafts";
  else if (pathname.startsWith("/add-property")) pageType = "add-property";
  else if (pathname.startsWith("/property")) pageType = "property";
  else if (pathname.startsWith("/create-property")) pageType = "add-property";
  else if (pathname.startsWith("/login")) pageType = "/login";
  else if (pathname.startsWith("/signup")) pageType = "/signup";
  else if (pathname.startsWith("/forgot-password"))
    pageType = "/forgot-password";
  else pageType = "property";

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* {process.env.NODE_ENV === "development" && (
          <Script
            src="https://cdn.jsdelivr.net/npm/eruda"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            id="init-eruda"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                eruda.init();
              `,
            }}
          />
        )} */}
      </head>

      <body cz-shortcut-listen="true" className="font-sans">
        <Provider store={store}>
          <PersistGate loading={<Skeleton />} persistor={persistor}>
            <AuthInitializer>
              <AuthGuard>
                <Theme>
                  <main>
                    {!isPublic ? (
                      <>
                        <Sidebar pageType={pageType} />
                        <div className="right-container">
                          <Header />
                          {children}
                        </div>
                      </>
                    ) : (
                      children
                    )}
                  </main>
                </Theme>
              </AuthGuard>
            </AuthInitializer>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
