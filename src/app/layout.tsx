import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "~/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://google.com"),
  title: "Dreamagination UNY",
  description:
    "Divisi Robotika UNY yang fokus kepada riset tentang wahana UAV (Unmanned Aerial Vehicle) atau pesawat tanpa awak.",
  openGraph: {
    locale: "id_ID",
    type: "website",
    title: "Dreamagination UNY",
    description: "Dreamagination UNY 'FLY YOUR DREAM'",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
