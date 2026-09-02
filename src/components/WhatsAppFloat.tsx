import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a href={whatsappLink(TESTE_GRATIS_MSG)} className="wpp-float" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <WhatsAppIcon width={28} height={28} />
      <span className="wpp-float-tooltip">Teste grátis</span>
    </a>
  );
}
