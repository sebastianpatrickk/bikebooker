import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Bikebooker",
  description: "Book a bike all around the world for your next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans,
          GeistMono,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container relative my-12 flex max-w-4xl flex-col px-6 sm:my-16">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
