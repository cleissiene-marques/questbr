"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const CHROMELESS_ROUTES = ["/links", "/links/"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (CHROMELESS_ROUTES.includes(pathname)) {
    return <main id="conteudo">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
