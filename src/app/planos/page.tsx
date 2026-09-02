import type { Metadata } from "next";
import { whatsappLink, planMsg } from "@/lib/data";
import { CheckIcon } from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Planos IPTV a partir de R$ 35/mês",
  description:
    "Conheça os planos IPTV da Ceteo: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  alternates: { canonical: "/planos/" },
  openGraph: {
    url: "/planos/",
    title: "Planos IPTV a partir de R$ 35/mês | Ceteo IPTV",
    description:
      "Conheça os planos IPTV da Ceteo: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  },
  twitter: {
    title: "Planos IPTV a partir de R$ 35/mês | Ceteo IPTV",
    description:
      "Conheça os planos IPTV da Ceteo: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  },
};

const payFaqs = [
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta: "Aceitamos Pix, cartão de crédito e boleto bancário. A ativação ocorre em poucos minutos após a confirmação do pagamento.",
  },
  {
    pergunta: "Posso trocar de plano depois de contratar?",
    resposta:
      "Sim. Você pode migrar para um plano mais longo a qualquer momento, aproveitando o tempo já pago no plano atual. É só falar com o suporte no WhatsApp.",
  },
  {
    pergunta: "O que acontece quando o plano vence?",
    resposta: "O acesso é interrompido até a renovação. Não há cobrança automática: você decide se e quando renovar, sem multa por não continuar.",
  },
];

export default function PlanosPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Planos</div>
          <h1 className="hero-title" id="hero-heading">Planos IPTV para todo tipo de assinante</h1>
          <p className="hero-desc">
            Todos os planos incluem o mesmo acesso completo a canais, filmes e séries. A diferença está no tempo de contratação — e na economia que você faz escolhendo períodos maiores. Sem fidelidade em nenhum deles.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="plans-heading">
        <div className="container">
          <div className="plans-grid">
            <article className="plan-card">
              <div className="plan-name">Mensal</div>
              <div className="plan-desc">Ideal para conhecer o serviço sem compromisso longo</div>
              <div className="plan-price">
                <span className="plan-currency">R$</span>
                <span className="plan-amount">35</span>
                <span className="plan-period">/mês</span>
              </div>
              <div className="plan-equiv">sem fidelidade · pague e use</div>
              <ul className="plan-features">
                <li className="plan-feat">Acesso completo a canais, filmes e séries</li>
                <li className="plan-feat">HD e Full HD incluídos</li>
                <li className="plan-feat">Suporte no WhatsApp 7 dias</li>
                <li className="plan-feat">Instalação acompanhada</li>
                <li className="plan-feat">Sem fidelidade</li>
                <li className="plan-feat">Ativação em minutos</li>
              </ul>
              <a href={whatsappLink(planMsg("Mensal"))} className="btn plan-cta plan-cta-default" target="_blank" rel="noopener">Contratar Mensal</a>
            </article>

            <article className="plan-card">
              <div className="plan-name">Trimestral</div>
              <div className="plan-desc">Três meses com economia de R$ 15 no período</div>
              <div className="plan-price">
                <span className="plan-currency">R$</span>
                <span className="plan-amount">90</span>
              </div>
              <div className="plan-equiv">Equivale a R$ 30 por mês · sem fidelidade</div>
              <ul className="plan-features">
                <li className="plan-feat">Acesso completo a canais, filmes e séries</li>
                <li className="plan-feat">HD, Full HD e 4K quando disponível</li>
                <li className="plan-feat">Suporte no WhatsApp 7 dias</li>
                <li className="plan-feat">Instalação acompanhada</li>
                <li className="plan-feat">Troca de dispositivo sem custo</li>
                <li className="plan-feat">Sem fidelidade</li>
              </ul>
              <a href={whatsappLink(planMsg("Trimestral"))} className="btn plan-cta plan-cta-default" target="_blank" rel="noopener">Contratar Trimestral</a>
            </article>

            <article className="plan-card plan-featured">
              <div className="plan-badge">Mais escolhido</div>
              <div className="plan-name">Semestral</div>
              <div className="plan-desc">Seis meses de estabilidade com o melhor custo-benefício</div>
              <div className="plan-price">
                <span className="plan-currency">R$</span>
                <span className="plan-amount">170</span>
              </div>
              <div className="plan-equiv">Equivale a cerca de R$ 28 por mês · sem fidelidade</div>
              <ul className="plan-features">
                <li className="plan-feat">Seis meses de acesso completo, sem reajuste</li>
                <li className="plan-feat">HD, Full HD e 4K quando disponível</li>
                <li className="plan-feat">Suporte prioritário e instalação acompanhada</li>
                <li className="plan-feat">Ajuste fino de qualidade para sua internet</li>
                <li className="plan-feat">Catálogo atualizado com lançamentos</li>
                <li className="plan-feat">Troca de dispositivo sem custo adicional</li>
              </ul>
              <a href={whatsappLink(planMsg("Semestral"))} className="btn plan-cta plan-cta-feat" target="_blank" rel="noopener">Contratar Semestral</a>
            </article>

            <article className="plan-card">
              <div className="plan-name">Anual</div>
              <div className="plan-desc">Doze meses pelo menor valor mensal do site</div>
              <div className="plan-price">
                <span className="plan-currency">R$</span>
                <span className="plan-amount">300</span>
              </div>
              <div className="plan-equiv">Equivale a R$ 25 por mês · sem fidelidade</div>
              <ul className="plan-features">
                <li className="plan-feat">Um ano de acesso completo garantido</li>
                <li className="plan-feat">HD, Full HD e 4K quando disponível</li>
                <li className="plan-feat">Suporte prioritário 7 dias por semana</li>
                <li className="plan-feat">Troca de dispositivo sem custo</li>
                <li className="plan-feat">Menor custo mensal do catálogo</li>
                <li className="plan-feat">Sem fidelidade obrigatória ao renovar</li>
              </ul>
              <a href={whatsappLink(planMsg("Anual"))} className="btn plan-cta plan-cta-default" target="_blank" rel="noopener">Contratar Anual</a>
            </article>
          </div>

          <div className="plans-footer">
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Pix, cartão ou boleto</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Ativação em minutos</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Sem fidelidade</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Suporte 7 dias por semana</span>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="pay-faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">Dúvidas</div>
            <h2 className="section-heading" id="pay-faq-heading" style={{ marginTop: "16px" }}>Perguntas sobre pagamento e planos</h2>
          </div>

          <FaqAccordion items={payFaqs} />

          <p className="faq-footer">
            Ainda com dúvida sobre qual plano escolher? <a href={whatsappLink()} target="_blank" rel="noopener">Fale com a gente no WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
