
// @ts-nocheck
// @use-client

"use client";


import { Inter } from "next/font/google";
import "./globals.css";

import { AnimatePresence } from "framer-motion";

import { Helmet } from 'react-helmet';


import { metadata } from "@/components/Metadata";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <body className={inter.className}>

        <AnimatePresence>
            {children}
        </AnimatePresence>
        
      </body>
    </html>
  );
}
