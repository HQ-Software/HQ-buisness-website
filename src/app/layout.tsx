// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import { ThemeProvider } from "@/components/theme-provider"; // Optional

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uvoyage - Stop Planning. Start Traveling.",
  description: "Your AI travel brain for hyper-personalized trip planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Defaulting to dark theme via class */}
      <body className={cn(inter.className, "bg-black text-white dark")}>
        {/* Optional ThemeProvider if you implement a toggle */}
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
