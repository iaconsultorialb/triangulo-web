import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Triángulo de Open Door | Desarrollo urbano-natural en Luján",
  description:
    "Masterplan de uso mixto en Open Door, Luján. Lotes desde 450 m², townhouses, condominios y centro comercial. Naturaleza, vivienda y servicios en 17 hectáreas.",
  keywords: [
    "El Triángulo Open Door",
    "lotes Open Door",
    "desarrollo inmobiliario Luján",
    "barrio abierto Open Door",
    "centro comercial Open Door",
    "masterplan urbano-natural",
  ],
  openGraph: {
    title: "El Triángulo de Open Door",
    description:
      "Un desarrollo urbano-natural de uso mixto en Open Door, Luján. Vivienda, servicios y espacios verdes en un mismo masterplan.",
    type: "website",
    locale: "es_AR",
    url: "https://www.eltriangulodeopendoor.com",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
