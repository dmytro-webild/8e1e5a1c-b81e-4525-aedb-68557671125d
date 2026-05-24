import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: '2N Imports | O Shopping da Noroeste',
  description: 'Alto padrão em streetwear importado. Marcas originais como Tommy, Boss e Mizuno com envio para todo o Brasil. Confira nosso catálogo!',
  openGraph: {
    "title": "2N Imports | O Shopping da Noroeste",
    "description": "Alto padrão em streetwear importado.",
    "siteName": "2N Imports"
  },
};










const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
