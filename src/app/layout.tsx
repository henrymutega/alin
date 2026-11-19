import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/main.css";
import "./globals.css";

import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "AlinPay | Financial Trust, Freedom for All",
  description:
    "Manage payments, finances and business operations with AlinPay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}