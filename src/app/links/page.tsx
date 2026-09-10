import type { Metadata } from "next";
import { whatsappLink, TESTE_GRATIS_MSG, SITE_URL } from "@/lib/data";
import { WhatsAppIcon, LogoMarkIcon, LayersIcon, HelpCircleIcon, LinkIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Links — Questbr IPTV",
  description: "Todos os links da Questbr IPTV em um só lugar: teste grátis, planos, WhatsApp e FAQ.",
  alternates: { canonical: "/links/" },
  robots: { index: false, follow: true },
};

type LinkItem = {
  href: string;
  label: string;
  sub: string;
  icon: typeof WhatsAppIcon;
  variant?: "is-primary" | "is-whatsapp";
};

const links: LinkItem[] = [
  {
    href: whatsappLink(TESTE_GRATIS_MSG),
    label: "Teste Grátis",
    sub: "Peça agora pelo WhatsApp",
    icon: WhatsAppIcon,
    variant: "is-primary",
  },
  {
    href: "/planos/",
    label: "Ver Planos e Preços",
    sub: "Escolha o pacote ideal",
    icon: LayersIcon,
  },
  {
    href: whatsappLink(),
    label: "Falar no WhatsApp",
    sub: "Tire suas dúvidas com um atendente",
    icon: WhatsAppIcon,
    variant: "is-whatsapp",
  },
  {
    href: "/faq/",
    label: "Perguntas Frequentes",
    sub: "Instalação, telas, pagamento e mais",
    icon: HelpCircleIcon,
  },
  {
    href: "/",
    label: "Acesse Nosso Site",
    sub: SITE_URL.replace("https://", ""),
    icon: LinkIcon,
  },
];

export default function LinksPage() {
  return (
    <div className="links-page">
      <div className="links-page-inner">
        <div className="logo">
          <div className="logo-mark" aria-hidden="true">
            <LogoMarkIcon width={20} height={20} />
          </div>
          <span className="logo-name">
            Questbr <span>IPTV</span>
          </span>
        </div>

        <p className="tagline">+18 mil canais e VOD em Full HD/4K, em qualquer tela.</p>
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          Atendimento humano no WhatsApp todos os dias
        </span>

        <nav className="links-list" aria-label="Links da Questbr IPTV">
          {links.map(({ href, label, sub, icon: Icon, variant }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                className={`link-card${variant ? ` ${variant}` : ""}`}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="link-card-icon">
                  <Icon width={21} height={21} />
                </span>
                <span className="link-card-text">
                  {label}
                  <span className="link-card-sub">{sub}</span>
                </span>
                <ArrowRightIcon className="link-card-arrow" width={18} height={18} />
              </a>
            );
          })}
        </nav>

        <div className="links-page-footer">
          <p>
            © {new Date().getFullYear()} <a href="/">Questbr IPTV</a>
          </p>
        </div>
      </div>
    </div>
  );
}
