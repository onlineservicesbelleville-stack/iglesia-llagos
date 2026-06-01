import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Iglesia Virgen del Carmen y San José de Llagos",
    template: "%s | Iglesia de Llagos",
  },
  description:
    "Sitio oficial de la Iglesia Virgen del Carmen y San José de Llagos. Fe, tradición, fiestas patronales, horarios de misa, galería y comunidad católica de Llagos, Chimborazo, Ecuador.",
  keywords:
    "Iglesia Llagos, Virgen del Carmen Llagos, San José de Llagos, fiestas patronales Llagos, Chunchi, Chimborazo, Ecuador",
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "Iglesia Virgen del Carmen y San José de Llagos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
