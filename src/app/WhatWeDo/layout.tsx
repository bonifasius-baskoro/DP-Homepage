import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import ReactQueryProvider from "@/utils/providers/QueryProvider";
import Footer from "@/components/shared/Footer";

const plusjkt = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/icon50.ico',
  },
  title: "drovide pivide",
  description: "AI frontier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${plusjkt.className} antialiased`}>{children}</body>
        <Footer/>
      </ReactQueryProvider>
    </html>
  );
}
