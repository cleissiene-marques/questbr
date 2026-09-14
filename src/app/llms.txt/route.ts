import { SITE_URL, SITE_NAME } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const postsList = blogPosts
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}/): ${post.description}`)
    .join("\n");

  const content = `# ${SITE_NAME}

> ${SITE_NAME} é um serviço de streaming IPTV com canais ao vivo, filmes, séries e esportes em HD, Full HD e 4K, teste grátis, suporte humano via WhatsApp todos os dias e planos sem fidelidade a partir de R$ 25/mês.

## Páginas principais

- [Início](${SITE_URL}/): Apresentação do serviço, planos, benefícios, depoimentos de assinantes e perguntas frequentes.
- [O que é IPTV](${SITE_URL}/iptv/): Guia completo sobre a tecnologia IPTV — como funciona, comparação com TV a cabo e streaming, aparelhos compatíveis, velocidade de internet necessária, legalidade e como escolher um serviço confiável.
- [Lista IPTV](${SITE_URL}/lista-iptv/): O que é uma lista IPTV e como diferenciar uma lista confiável de uma pirata ou instável.
- [Planos e preços](${SITE_URL}/planos/): Planos mensal, trimestral, semestral e anual, sem fidelidade.
- [Teste grátis](${SITE_URL}/teste-gratis/): Como solicitar o teste gratuito antes de contratar.
- [Perguntas frequentes](${SITE_URL}/faq/): Dúvidas sobre teste, pagamento, aparelhos compatíveis e suporte.
- [Quem somos](${SITE_URL}/quem-somos/): Sobre a Questbr IPTV.
- [Contato](${SITE_URL}/contato/): Canais de contato e suporte.

## Blog

${postsList}

## Legal

- [Política de Privacidade](${SITE_URL}/politica-de-privacidade/): Como os dados de assinantes são coletados e usados.
- [Termos de Uso](${SITE_URL}/termos-de-uso/): Condições de uso do serviço.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
