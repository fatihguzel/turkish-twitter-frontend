// import { store } from "@/redux/store/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
// import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turkish Twitter",
  description: "Turkist Twitter is a Twitter clone for Turkish people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Provider store={store}>
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={`${metadata.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
    // </Provider>
  );
}
