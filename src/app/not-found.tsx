import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import { WhatsAppIcon, HelpCircleIcon } from "@/components/Icons";
import PlansGrid from "@/components/PlansGrid";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="notfound-heading">
        <div className="container">
          <div className="label">
            <HelpCircleIcon width={14} height={14} />
            Erro 404
          </div>
          <h1 className="hero-title" id="notfound-heading">Essa página não existe (ou mudou de endereço)</h1>
          <p className="hero-desc">
            O link pode estar quebrado ou a página pode ter sido movida. Volte para o início ou aproveite para conhecer nossos planos.
          </p>
          <div className="page-hero-actions">
            <Link href="/" className="btn btn-primary">Voltar para a página inicial</Link>
            <a href={whatsappLink()} className="btn btn-outline" target="_blank" rel="noopener">
              <WhatsAppIcon width={18} height={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="notfound-plans-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">Planos</div>
            <h2 className="section-heading" id="notfound-plans-heading" style={{ marginTop: "16px" }}>
              Já que você está por aqui, que tal contratar?
            </h2>
            <p className="section-subtext" style={{ marginInline: "auto" }}>
              Acesso completo a canais, filmes e séries em HD, Full HD e 4K, sem fidelidade.
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <PlansGrid />
          </div>
        </div>
      </section>
    </>
  );
}
