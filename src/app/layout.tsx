import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./Footer";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BandProject",
  description: "Data Analytics helping local bands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="h-full flex flex-col">
          <Navbar />
          <div>{children}</div>
        </body>
        <Footer />
      </Providers>
    </html>
  );
}
