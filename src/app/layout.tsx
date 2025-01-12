import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import ParticleBackground from "@/components/sub/ParticleBackground";

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Iain Black | Full Stack Developer",
  description: "Iain Black's portfolio page"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} overflow-x-hidden`}>
        <ParticleBackground />
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
