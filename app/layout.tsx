import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "SylvaGreen Capital — Le capital-investissement au service de la filière bois française",
  description:
    "Fonds professionnel dédié à la première transformation du bois : financement des scieries et usines de granulés, placement pour les investisseurs, piloté par des industriels de la filière.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
