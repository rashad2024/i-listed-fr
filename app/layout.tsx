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

  if (pathname.match(/\/dashboard$/gi)) pageType = "dashboard";
  else if (pathname.match(/\/drafts($|\/[0-9])/gi)) pageType = "drafts";
  else if (pathname.match(/\/add-property$/gi)) pageType = "add-property";
  else if (pathname.match(/\/property($|\/[0-9])/gi)) pageType = "property";
  else if (pathname.match(/\/login$/gi)) pageType = "/login";
  else if (pathname.match(/\/signup$/gi)) pageType = "/signup";
  else if (pathname.match(/(\/$|\/home)/gi)) pageType = "/signup";
  else if (pathname.match(/\/forgot-password$/gi))
    pageType = "/forgot-password";
  else pageType = "";

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
                    {!isPublic && pageType ? (
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
