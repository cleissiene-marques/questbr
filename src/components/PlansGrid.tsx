import { whatsappLink, planMsg, PLANS } from "@/lib/data";

export default function PlansGrid() {
  return (
    <div className="plans-grid">
      {PLANS.map((plan) => (
        <article key={plan.slug} className={`plan-card${plan.featured ? " plan-featured" : ""}`}>
          {plan.badge && <div className="plan-badge">{plan.badge}</div>}
          <div className="plan-name">{plan.eyebrow}</div>
          <div className="plan-title">{plan.name}</div>
          <div className="plan-price">
            <span className="plan-currency">R$</span>
            <span className="plan-amount">{plan.price}</span>
            <span className="plan-period">{plan.period}</span>
          </div>
          <div className="plan-equiv">{plan.equiv}</div>
          <ul className="plan-features">
            {plan.features.map((feature) => (
              <li key={feature} className="plan-feat">{feature}</li>
            ))}
          </ul>
          <a
            href={whatsappLink(planMsg(plan.slug))}
            className={`btn plan-cta ${plan.featured ? "plan-cta-feat" : "plan-cta-default"}`}
            target="_blank"
            rel="noopener"
          >
            Assinar Agora
          </a>
        </article>
      ))}
    </div>
  );
}
