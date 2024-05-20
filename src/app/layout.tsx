"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import WatsonChat from "./components/WatsonChat";
import VLibras from 'vlibras-nextjs';

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <WatsonChat />
        <VLibras forceOnload />
      </body>
    </html>
  );
}
