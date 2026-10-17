import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SylvaGreen Capital — Le capital-investissement au service de la filière bois française",
  description:
    "Fonds professionnel vert dédié à la première transformation du bois : scieries, connexes, granulation, biomasse. 12 % de rendement brut annuel minimum visé.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
