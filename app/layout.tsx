import UserContext from "@/context/user/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResultContext from "@/context/user/ResultContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOK DIGITIZATION  APP",
  description: "Digitization of story book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="">
        <UserContext>
          <ResultContext>{children}</ResultContext>
        </UserContext>
      </body>
    </html>
  );
}
