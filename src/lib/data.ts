export const SITE_URL = "https://questbr.com.br";
export const SITE_NAME = "Ceteo IPTV";
export const WHATSAPP_NUMBER = "5589981175065";
export const CONTACT_EMAIL = "contato@questbr.com.br";
export const GA_MEASUREMENT_ID = "G-G4D63CWSC7";

export const TESTE_GRATIS_MSG = "Olá! Quero solicitar o teste grátis da Ceteo IPTV.";

export function planMsg(plano: string): string {
  return `Olá! Quero contratar o plano ${plano} da Ceteo IPTV.`;
}

export function whatsappLink(mensagem?: string): string {
  if (!mensagem) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}
