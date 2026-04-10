import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import SmoothScroll from "../../components/user/ScrollSmooth";

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
      <SmoothScroll>
        <Header />
            {children}
        <Footer />
      </SmoothScroll>
    </>
  );
}
