"use client";

import { usePathname } from "next/navigation";

const CHROMELESS_ROUTES = ["/links", "/links/"];

export default function SiteChrome({
  children,
  header,
  footer,
  whatsapp,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  whatsapp: React.ReactNode;
}) {
  const pathname = usePathname();

  if (CHROMELESS_ROUTES.includes(pathname)) {
    return <main id="conteudo">{children}</main>;
  }

  return (
    <>
      {header}
      <main id="conteudo">{children}</main>
      {footer}
      {whatsapp}
    </>
  );
}
