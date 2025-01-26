import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "next-themes";
import ThemeComponent from "@/components/ThemeComponent";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900", "500"],
});

export const metadata: Metadata = {
  title: "Brian Blog",
  description: "This is a full Stack Application",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider>
          <ThemeComponent>
            <Header />
            {children}
          </ThemeComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
