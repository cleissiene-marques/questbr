import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";
import {
  WhatsAppIcon,
  CheckIcon,
  BroadcastIcon,
  ClapperboardIcon,
  LayersIcon,
  TvIcon,
  BoxIcon,
  AndroidTvIcon,
  FlameIcon,
  SmartphoneIcon,
  LaptopIcon,
} from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "O que é IPTV? Guia Completo: Como Funciona, Legalidade e Preços",
  description:
    "Guia completo sobre IPTV: o que é, como funciona a transmissão, diferença para TV a cabo e streaming, aparelhos compatíveis, velocidade de internet, legalidade, problemas comuns e como escolher um serviço confiável.",
  alternates: { canonical: "/iptv/" },
  openGraph: {
    url: "/iptv/",
    title: "O que é IPTV? Guia Completo: Como Funciona, Legalidade e Preços | Questbr IPTV",
    description:
      "Guia completo sobre IPTV: o que é, como funciona a transmissão, diferença para TV a cabo e streaming, aparelhos compatíveis, velocidade de internet, legalidade e como escolher um serviço confiável.",
  },
  twitter: {
    title: "O que é IPTV? Guia Completo: Como Funciona, Legalidade e Preços | Questbr IPTV",
    description:
      "Guia completo sobre IPTV: o que é, como funciona, aparelhos compatíveis, velocidade necessária, legalidade e como escolher um serviço confiável.",
  },
};

const iptvFaqs = [
  {
    pergunta: "O que significa a sigla IPTV?",
    resposta:
      "IPTV significa Internet Protocol Television, ou seja, televisão transmitida usando o protocolo de internet. Em vez do sinal chegar por antena, parabólica ou cabo coaxial, o conteúdo viaja pela sua conexão de internet, do mesmo jeito que um vídeo do YouTube ou um episódio na Netflix.",
  },
  {
    pergunta: "IPTV precisa de antena ou parabólica?",
    resposta:
      "Não. Como a transmissão acontece pela internet, não existe necessidade de antena, parabólica, cabo coaxial ou qualquer instalação física externa. Basta ter internet e um aplicativo (player) instalado no aparelho.",
  },
  {
    pergunta: "IPTV funciona sem internet?",
    resposta:
      "Não. IPTV depende de uma conexão de internet ativa e razoavelmente estável para transmitir os canais e o conteúdo sob demanda. Sem internet, o aplicativo não consegue carregar a programação.",
  },
  {
    pergunta: "Quantos dados (GB) o IPTV consome?",
    resposta:
      "O consumo varia com a qualidade assistida: em HD, o consumo fica em torno de 1 a 1,5 GB por hora; em Full HD, entre 2 e 3 GB por hora; em 4K, pode passar de 7 GB por hora. Para uso doméstico com internet fixa isso raramente é um problema — o cuidado maior vale para quem assiste pelo plano de dados do celular.",
  },
  {
    pergunta: "Posso assistir IPTV fora de casa, viajando ou usando dados móveis?",
    resposta:
      "Sim, desde que o aparelho tenha internet — Wi-Fi ou dados móveis. O acesso não fica travado a um endereço, então funciona em outra cidade, em outro país ou usando a internet do hotel, por exemplo.",
  },
  {
    pergunta: "Qual a diferença entre lista IPTV e aplicativo IPTV?",
    resposta: (
      <>
        O aplicativo (player) é o programa instalado no aparelho, responsável por reproduzir o conteúdo. A lista IPTV é o catálogo de canais, filmes e séries que esse aplicativo carrega para exibir. Entenda em detalhe{" "}
        <Link href="/lista-iptv/" style={{ color: "var(--accent)" }}>
          o que é uma lista IPTV e como escolher uma confiável
        </Link>
        .
      </>
    ),
    respostaTexto:
      "O aplicativo (player) é o programa instalado no aparelho, responsável por reproduzir o conteúdo. A lista IPTV é o catálogo de canais, filmes e séries que esse aplicativo carrega para exibir.",
  },
  {
    pergunta: "Preciso de um aparelho especial para assistir IPTV?",
    resposta:
      "Não. Você pode usar a Smart TV, o celular, o notebook ou aparelhos auxiliares baratos como TV Box e Fire TV Stick para transformar qualquer televisão em uma TV compatível. Não é necessário comprar equipamento caro.",
  },
  {
    pergunta: "O que é M3U em IPTV?",
    resposta: (
      <>
        M3U é o formato de arquivo que organiza os links de transmissão dentro de uma lista IPTV. Alguns players pedem esse link diretamente; outros, como os que a Questbr indica, já entregam o acesso configurado, sem exigir que você mexa em links manualmente. Saiba mais na nossa{" "}
        <Link href="/lista-iptv/" style={{ color: "var(--accent)" }}>
          página sobre lista IPTV
        </Link>
        .
      </>
    ),
    respostaTexto:
      "M3U é o formato de arquivo que organiza os links de transmissão dentro de uma lista IPTV. Alguns players pedem esse link diretamente; outros já entregam o acesso configurado.",
  },
  {
    pergunta: "IPTV trava mais durante jogos e eventos ao vivo?",
    resposta: (
      <>
        Pode travar em serviços sem infraestrutura preparada para picos de audiência, já que o horário de jogo concentra muito mais gente assistindo ao mesmo tempo. Detalhamos as causas mais comuns e como evitar no post{" "}
        <Link href="/blog/iptv-travando-causas-e-solucoes/" style={{ color: "var(--accent)" }}>
          IPTV travando: causas e soluções
        </Link>
        .
      </>
    ),
    respostaTexto:
      "Pode travar em serviços sem infraestrutura preparada para picos de audiência, já que o horário de jogo concentra muito mais gente assistindo ao mesmo tempo.",
  },
  {
    pergunta: "IPTV é legal?",
    resposta:
      "A tecnologia IPTV em si é legal — é a mesma forma de entrega usada por Globoplay, Netflix e outros serviços de streaming reconhecidos. O que determina a legalidade é a origem e a licença do conteúdo transmitido, por isso vale avaliar a transparência de qualquer serviço antes de contratar.",
  },
  {
    pergunta: "Posso testar antes de contratar?",
    resposta:
      "Sim. A Questbr libera um teste grátis, sem pedir cartão de crédito, para você avaliar estabilidade e qualidade de imagem na sua própria casa antes de decidir.",
  },
  {
    pergunta: "Como funciona o cancelamento ou a troca de plano?",
    resposta:
      "Não existe fidelidade obrigatória em nenhum plano. Você contrata pelo período escolhido e decide livremente se renova ao final. Trocar de plano ou de aparelho também é simples — basta avisar o suporte pelo WhatsApp.",
  },
];

export default function IptvPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: iptvFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: "respostaTexto" in f ? f.respostaTexto : (f.resposta as string) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">IPTV explicado</div>
          <h1 className="hero-title" id="hero-heading">O que é IPTV e como funciona na prática</h1>
          <p className="hero-desc">
            IPTV (Internet Protocol Television) é a transmissão de canais, filmes e séries pela internet, em vez de antena ou cabo tradicional. Neste guia completo você entende como a tecnologia funciona, quanto de internet precisa, se é legal, os problemas mais comuns e como escolher um serviço de IPTV confiável.
          </p>
          <div className="page-hero-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Solicitar Teste Grátis
            </a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>

      {/* ===== CONCEITO ===== */}
      <section className="section" aria-labelledby="conceito-heading">
        <div className="container">
          <div className="label">Conceito</div>
          <h2 className="section-heading" id="conceito-heading" style={{ marginTop: "16px" }}>Da antena ao aplicativo: como a transmissão chega até você</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Na TV tradicional, o sinal chega por antena, parabólica ou cabo físico até um decodificador. No IPTV, o mesmo tipo de conteúdo — canais ao vivo, filmes, séries — é entregue através da sua conexão de internet, exatamente como qualquer outro serviço de streaming que você já usa no dia a dia.</p>
            <p>O termo existe desde os anos 1990, mas só se popularizou no Brasil na última década, junto com a expansão da internet de banda larga e fibra óptica. Tecnicamente, o conteúdo fica hospedado em servidores e é enviado sob demanda para o seu aparelho em pacotes de dados, em vez de ser transmitido em broadcast contínuo como a TV aberta.</p>
            <p>Isso significa que não existe instalação de cabo nem equipamento específico obrigatório: o acesso acontece por um aplicativo (player), instalado no aparelho que você já tem em casa — Smart TV, TV Box, celular, notebook ou Fire TV Stick, por exemplo. Esse aplicativo carrega uma lista de canais e conteúdos, o que o mercado costuma chamar de{" "}
              <Link href="/lista-iptv/" style={{ color: "var(--accent)" }}>lista IPTV</Link>.
            </p>
            <p>A qualidade da imagem depende de dois fatores principais: a estabilidade da infraestrutura que entrega o conteúdo (servidores, balanceamento de carga, monitoramento) e a velocidade real da sua internet no momento em que você assiste.</p>
          </div>
        </div>
      </section>

      {/* ===== MODELOS DE CONTEÚDO ===== */}
      <section className="section content-bg" aria-labelledby="modelos-heading">
        <div className="container">
          <div className="label">Tipos de conteúdo</div>
          <h2 className="section-heading" id="modelos-heading" style={{ marginTop: "16px" }}>Os 3 modelos de transmissão dentro do IPTV</h2>
          <p className="section-subtext">
            Quando falamos em IPTV, na prática estamos falando de três formas diferentes de entregar conteúdo pela internet, geralmente reunidas no mesmo aplicativo.
          </p>

          <div className="categories-grid">
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><BroadcastIcon width={22} height={22} /></span>
              <div className="cat-badge">AO VIVO</div>
              <h3>Live IPTV (canais ao vivo)</h3>
              <p>Transmissão contínua de canais abertos e fechados em tempo real, com grade de programação — o mais parecido com a TV tradicional, só que entregue pela internet.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><ClapperboardIcon width={22} height={22} /></span>
              <div className="cat-badge">VOD</div>
              <h3>Vídeo sob demanda (VOD)</h3>
              <p>Filmes e séries disponíveis para assistir a qualquer momento, pausar e continuar depois — a mesma lógica de um catálogo de streaming tradicional.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><LayersIcon width={22} height={22} /></span>
              <div className="cat-badge">CATCH-UP</div>
              <h3>Catch-up TV (TV de volta no tempo)</h3>
              <p>Permite reassistir um programa que já foi ao ar horas ou dias atrás, sem precisar ter gravado nada — útil para quem perdeu um capítulo ou um jogo.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== COMPARATIVO ===== */}
      <section className="section how-bg" aria-labelledby="compare-heading">
        <div className="container">
          <div className="label">Comparativo</div>
          <h2 className="section-heading" id="compare-heading" style={{ marginTop: "16px" }}>IPTV, TV a cabo e streaming tradicional</h2>
          <p className="section-subtext">Cada formato tem uma lógica diferente de entrega e de custo. Veja onde o IPTV se encaixa.</p>

          <div className="compare-grid">
            <article className="card compare-card is-featured animate-on-scroll">
              <h3>IPTV</h3>
              <ul>
                <li>✓ Canais ao vivo, filmes e séries em um único aplicativo</li>
                <li>✓ Funciona em Smart TV, TV Box, celular e PC</li>
                <li>✓ Sem instalação de cabo ou antena</li>
                <li>✓ Planos mensais sem fidelidade</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>TV a cabo</h3>
              <ul>
                <li>• Depende de instalação física e visita técnica</li>
                <li>• Pacotes fechados, difíceis de personalizar</li>
                <li>• Contratos com fidelidade comuns</li>
                <li>• Sinal restrito ao endereço instalado</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>Streaming tradicional</h3>
              <ul>
                <li>• Um aplicativo por serviço (várias assinaturas)</li>
                <li>• Catálogo próprio, sem TV ao vivo na maioria dos casos</li>
                <li>• Boa parte não tem canais de TV aberta</li>
                <li>• Custo soma quando você assina vários ao mesmo tempo</li>
              </ul>
            </article>
          </div>

          <p className="compat-note" style={{ maxWidth: "760px" }}>
            E a TV aberta digital? Continua gratuita e sem mensalidade, mas limitada aos canais disponíveis na sua região e sem filmes, séries ou catálogo sob demanda — o IPTV entra justamente para cobrir essa lacuna.
          </p>
        </div>
      </section>

      {/* ===== POR QUE CRESCEU ===== */}
      <section className="section" aria-labelledby="crescimento-heading">
        <div className="container">
          <div className="label">Contexto</div>
          <h2 className="section-heading" id="crescimento-heading" style={{ marginTop: "16px" }}>Por que o IPTV cresceu tanto no Brasil</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Nos últimos anos, o preço dos pacotes de TV por assinatura tradicional subiu bastante, enquanto os pacotes de canais ficaram cada vez mais engessados — você paga por dezenas de canais que nunca assiste para ter acesso aos poucos que realmente interessam.</p>
            <p>Ao mesmo tempo, a internet de banda larga e fibra óptica se popularizou em praticamente todo o país, com planos mais rápidos e baratos do que há dez anos. Isso criou a infraestrutura ideal para que a transmissão de vídeo pela internet — a base do IPTV — se tornasse viável para qualquer casa, e não só para quem tem conexões corporativas.</p>
            <p>Some a isso o cansaço de assinar um serviço de streaming diferente para cada tipo de conteúdo. Um único aplicativo de IPTV reúne canais ao vivo, filmes, séries e esportes, o que reduz o número de assinaturas separadas e simplifica a vida de quem só quer sentar e assistir.</p>
            <p>Por fim, a flexibilidade pesa bastante: planos mensais sem fidelidade fazem o IPTV soar mais justo para o consumidor do que um contrato de TV a cabo de 12 ou 24 meses com multa por cancelamento antecipado.</p>
          </div>
        </div>
      </section>

      {/* ===== APARELHOS ===== */}
      <section className="section content-bg" aria-labelledby="aparelhos-heading">
        <div className="container">
          <div className="label">Como assistir</div>
          <h2 className="section-heading" id="aparelhos-heading" style={{ marginTop: "16px" }}>Aparelhos e aplicativos compatíveis com IPTV</h2>
          <p className="section-subtext">
            Não é preciso comprar nada caro: o IPTV roda no aparelho que você provavelmente já tem em casa. Veja como configurar a{" "}
            <Link href="/blog/como-configurar-iptv-na-smart-tv/" style={{ color: "var(--accent)" }}>Smart TV passo a passo</Link>
            {" "}ou{" "}
            <Link href="/blog/tv-box-ou-fire-tv-stick-qual-escolher/" style={{ color: "var(--accent)" }}>escolher entre TV Box e Fire TV Stick</Link>.
          </p>

          <div className="compat-grid">
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><TvIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Smart TV</strong>
                <span>Samsung, LG, TCL, Philco e outras marcas</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><BoxIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>TV Box</strong>
                <span>Transforma qualquer TV antiga em compatível</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><AndroidTvIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Android TV</strong>
                <span>TVs e receptores com Google Play</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><FlameIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Fire TV Stick</strong>
                <span>Lite ao 4K Max, todos os modelos</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><SmartphoneIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Celular e tablet</strong>
                <span>Android e iOS, com Wi-Fi ou dados</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><LaptopIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Notebook e PC</strong>
                <span>Windows, macOS e Linux via player</span>
              </div>
            </div>
          </div>
          <p className="compat-note">
            Em qualquer um desses aparelhos, você instala um aplicativo (player) que recebe o acesso configurado pela nossa equipe — sem precisar entender de tecnologia.{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Confirme o seu aparelho no WhatsApp</a>.
          </p>
        </div>
      </section>

      {/* ===== VELOCIDADE ===== */}
      <section className="section" aria-labelledby="speed-heading">
        <div className="container">
          <div className="label">Internet necessária</div>
          <h2 className="section-heading" id="speed-heading" style={{ marginTop: "16px" }}>Quanto de internet você precisa</h2>
          <p className="section-subtext">
            A referência abaixo considera velocidade real de conexão, não apenas o plano contratado com a operadora. Veja também a diferença entre{" "}
            <Link href="/blog/wifi-ou-cabo-o-que-muda-na-estabilidade/" style={{ color: "var(--accent)" }}>Wi-Fi e cabo na estabilidade</Link>
            {" "}e{" "}
            <Link href="/blog/quanto-de-internet-voce-precisa-para-4k/" style={{ color: "var(--accent)" }}>quanto de internet o 4K exige</Link>.
          </p>

          <div
            className="stats-grid"
            style={{ marginTop: "48px", background: "var(--bg-card)", border: "1px solid var(--brd)", borderRadius: "var(--r-lg)", padding: "32px 12px" }}
          >
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">15 Mbps</div>
              <div className="stat-label">Recomendado para HD</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">25 Mbps</div>
              <div className="stat-label">Recomendado para Full HD</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">45 Mbps</div>
              <div className="stat-label">Recomendado para 4K</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">Wi-Fi ou cabo</div>
              <div className="stat-label">Ambos funcionam bem se a conexão for estável</div>
            </div>
          </div>

          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Velocidade contratada e velocidade real nem sempre são a mesma coisa — roteador distante, muitos aparelhos conectados ao mesmo tempo ou Wi-Fi antigo derrubam a velocidade que realmente chega ao seu aparelho. Sempre que possível, prefira conectar a Smart TV ou o TV Box por cabo de rede, ou posicione o roteador o mais próximo possível do aparelho.</p>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMAS COMUNS ===== */}
      <section className="section how-bg" aria-labelledby="problemas-heading">
        <div className="container">
          <div className="label">Problemas comuns</div>
          <h2 className="section-heading" id="problemas-heading" style={{ marginTop: "16px" }}>Por que o IPTV trava — e como resolver</h2>
          <p className="section-subtext">
            A maioria dos problemas de quem assiste IPTV se repete entre os serviços do mercado. Veja o que costuma causar cada um e como evitar. Para um guia mais completo, veja{" "}
            <Link href="/blog/iptv-travando-causas-e-solucoes/" style={{ color: "var(--accent)" }}>IPTV travando: causas e soluções</Link>.
          </p>

          <div className="benefits-grid">
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Travamento em horário de pico</h3>
              <p>Acontece quando o servidor não foi dimensionado para muita gente assistindo ao mesmo tempo — comum em jogos e estreias. A solução está na infraestrutura do provedor, não no seu aparelho.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
              </div>
              <h3>Tela preta ou buffering constante</h3>
              <p>Costuma vir de internet instável no momento da transmissão. Testar em outro Wi-Fi ou reiniciar o roteador já resolve boa parte dos casos; se persistir, o problema é do servidor.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
              </div>
              <h3>Aplicativo fecha sozinho ou trava ao abrir</h3>
              <p>Geralmente é cache acumulado ou uma versão desatualizada do player. Limpar o cache do aplicativo e verificar atualizações costuma resolver rapidamente.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l22 22" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.58 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><path d="M12 20h.01" /></svg>
              </div>
              <h3>Canal ou conteúdo fora do ar</h3>
              <p>Sinal de que o catálogo não está sendo mantido com regularidade. Um bom provedor atualiza e revisa os canais constantemente para evitar links quebrados.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <h3>Erro de login ou ativação</h3>
              <p>Costuma ser dado de acesso digitado errado ou aplicativo desatualizado. Confirme os dados com o suporte antes de tentar reinstalar tudo do zero.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
              </div>
              <h3>Lentidão só em um aparelho específico</h3>
              <p>Se outros aparelhos na mesma casa funcionam bem, o problema costuma ser o player instalado ou o hardware daquele aparelho — trocar de player geralmente resolve.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== LEGALIDADE ===== */}
      <section className="section" aria-labelledby="legal-heading">
        <div className="container">
          <div className="label">Legalidade</div>
          <h2 className="section-heading" id="legal-heading" style={{ marginTop: "16px" }}>IPTV é legal? O que saber antes de contratar</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Essa é uma das dúvidas mais comuns de quem pesquisa sobre IPTV pela primeira vez. A resposta curta: a tecnologia IPTV em si é totalmente legal — é a mesma forma de entrega usada por serviços reconhecidos como Globoplay, Netflix e Amazon Prime Video, que também transmitem vídeo pela internet usando o protocolo IP.</p>
            <p>O que determina a legalidade de um serviço específico é a origem e o licenciamento do conteúdo transmitido, não o protocolo de transmissão. Por isso, a orientação de qualquer especialista do setor é a mesma: avalie a transparência do provedor antes de contratar, em vez de julgar pela tecnologia usada.</p>
            <p>Na prática, isso significa priorizar serviços que sejam claros sobre o que oferecem, disponibilizem teste antes da cobrança, tenham suporte humano real para resolver problemas e não escondam informações sobre preço ou condições de contratação. Esses sinais de transparência dizem muito mais sobre a seriedade de um provedor do que qualquer promessa isolada.</p>
            <p>Este conteúdo tem caráter informativo e não substitui orientação jurídica. Se você tiver dúvidas específicas sobre a sua situação, vale consultar um profissional da área.</p>
          </div>
        </div>
      </section>

      {/* ===== CHECKLIST ===== */}
      <section className="section how-bg" aria-labelledby="checklist-heading">
        <div className="container">
          <div className="label">Checklist</div>
          <h2 className="section-heading" id="checklist-heading" style={{ marginTop: "16px" }}>Como escolher um serviço de IPTV confiável</h2>
          <p className="section-subtext">
            Antes de assinar qualquer serviço, esses pontos ajudam a separar um IPTV sério de um que vai travar ou desaparecer em poucas semanas. Veja também o{" "}
            <Link href="/blog/como-escolher-o-melhor-iptv/" style={{ color: "var(--accent)" }}>guia completo de como escolher o melhor IPTV</Link>.
          </p>

          <div
            style={{ marginTop: "48px", background: "var(--bg-card)", border: "1px solid var(--brd)", borderRadius: "var(--r-lg)", padding: "32px 28px", maxWidth: "720px", marginInline: "auto", display: "grid", gap: "16px" }}
          >
            {[
              "Oferece teste grátis antes de qualquer pagamento, sem pedir cartão de crédito.",
              "Tem suporte humano disponível para resolver problemas de instalação e travamento.",
              "Mantém o catálogo atualizado, sem canais fora do ar por longos períodos.",
              "É transparente sobre preço, sem taxa escondida e sem fidelidade obrigatória.",
              "Explica com clareza a compatibilidade com o seu aparelho antes da contratação.",
              "Tem avaliações reais de assinantes que usam o serviço no dia a dia, não só no primeiro mês.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", marginTop: "4px", flexShrink: 0 }}>
                  <CheckIcon width={16} height={16} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Perguntas frequentes sobre IPTV
            </h2>
            <p className="section-subtext" style={{ marginInline: "auto" }}>
              Dúvidas gerais sobre a tecnologia. Para perguntas específicas sobre planos e suporte da Questbr, veja nossa{" "}
              <Link href="/faq/" style={{ color: "var(--accent)" }}>página de FAQ completa</Link>.
            </p>
          </div>

          <FaqAccordion items={iptvFaqs} />

          <p className="faq-footer">
            Não encontrou o que precisava?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a> — respondemos todos os dias.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Quer ver funcionando antes de decidir?</h2>
          <p className="section-subtext">Peça o teste grátis, instale em minutos e avalie a qualidade na sua própria casa, sem compromisso.</p>
          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">Solicitar teste no WhatsApp</a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
