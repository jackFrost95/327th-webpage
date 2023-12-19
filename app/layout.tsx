import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import "/styles/brightmode.css"

export const metadata: Metadata = {
  title: "327th",
  icons: { icon: "/static/327th.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <body className="flex flex-col w-full h-full">
        <Header />
        {children}
      </body>
  );
}
