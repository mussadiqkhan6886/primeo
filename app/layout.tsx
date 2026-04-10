import type { Metadata } from "next";
import "./globals.css";
import { arimo } from "@/libs/fonts";
import SmoothScroll from "@/components/user/ScrollSmooth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arimo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <SmoothScroll> */}
          {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
