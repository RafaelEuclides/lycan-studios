import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "@/styles/globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lycan Studios",
  description: "A digital design studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}
