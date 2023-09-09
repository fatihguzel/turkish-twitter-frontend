"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import DefaultLayout from "@/views/Layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <DefaultLayout>{children}</DefaultLayout>
        </body>
      </html>
    </Provider>
  );
}
