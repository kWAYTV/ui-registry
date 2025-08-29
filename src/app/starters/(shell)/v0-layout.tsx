import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { BrandHeader } from "@/components/core/brand-header";
import { BrandSidebar } from "@/components/core/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "@/app/globals.css";
import "@/app/tokens.css";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <body>
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className='mt-16 flex w-full justify-center'>
            <div className='container'>{children}</div>
          </main>
          <Toaster richColors />
        </SidebarProvider>
      </body>
    </html>
  );
}
