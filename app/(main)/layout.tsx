import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primeo | 8 layers architecture",
  description: "Design demo website for Primeo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
        {children}
    <Footer />
    </>
  );
}
