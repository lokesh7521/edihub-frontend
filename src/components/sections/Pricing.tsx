import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Link } from "react-router-dom";

const ACCENT_BLUE = "#0066FF";

const plans = [
  {
    name: "Essential",
    price: 2400,
    period: "/month",
    description: "For businesses ready to level up their digital presence with a professional website and brand identity.",
    cta: "Get Started Today",
    teamMembers: "2",
    features: [
      "1 active project at a time",
      "Web design & development",
      "Basic brand design",
      "Monthly design iterations",
      "Response within 48h",
      "3-month minimum commitment",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: 4000,
    period: "/month",
    description: "For companies who need ongoing design and development across web, brand, and product.",
    cta: "Get Started Today",
    teamMembers: "3",
    features: [
      "2 active projects at a time",
      "Product design",
      "Full brand identity",
      "Weekly design iterations",
      "Response within 24h",
      "2-month minimum commitment",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: 6300,
    period: "/month",
    description: "For established businesses who need a dedicated team to handle all their digital needs.",
    cta: "Get Started Today",
    teamMembers: "Unlimited",
    features: [
      "3 active projects at a time",
      "Advanced motion graphics",
      "Full brand strategy",
      "Unlimited design iterations",
      "Same-day response",
      "1-month minimum commitment",
    ],
    highlight: false,
  },
];

function SlackIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" style={{ color: ACCENT_BLUE }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="pricing" className="bg-[#F4F3EF]">
      <Container>
        <div ref={ref} className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.18em] text-black/60">
              /PRICING/
            </span>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="text-[44px] font-semibold leading-[0.98] tracking-[-2.6px] text-[#111] sm:text-[56px] lg:text-[72px]"
            >
              Start growing today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
              className="mt-5 max-w-[62ch] text-[14px] leading-[1.65] text-black/55 sm:text-[15px]"
            >
              Choose a plan that fits your needs. Get access to our team of designers and developers ready to help you grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span
                className={`text-[12px] ${!yearly ? "font-semibold text-black" : "text-black/45"}`}
              >
                Monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={yearly}
                onClick={() => setYearly((y) => !y)}
                className="relative h-6 w-11 rounded-full bg-black/25"
              >
                <motion.span
                  className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow"
                  animate={{ x: yearly ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </button>
              <span
                className={`text-[12px] ${yearly ? "font-semibold text-black" : "text-black/45"}`}
              >
                Yearly
              </span>
              <span className="text-[11px] font-semibold text-[#6EA8FF]">
                Save 20%
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mx-auto grid max-w-[1180px] items-stretch gap-6 md:grid-cols-3 md:gap-8">
            {plans.map((plan, i) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className={`relative flex flex-col rounded-[24px] border p-7 shadow-sm md:p-8 ${
                  plan.highlight
                    ? "border-black/10 bg-white"
                    : "border-black/10 bg-[#F4F3EF]"
                }`}
              >
              {plan.highlight && (
                <span
                  className="absolute -top-4 right-8 rounded-md px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  Best Value!
                </span>
              )}
              <h3 className="text-[16px] font-semibold text-[#1A1A1A]">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[34px] font-semibold tracking-[-0.02em] text-[#1A1A1A] md:text-[40px]">
                  ${plan.price.toLocaleString()}
                </span>
                <span className="text-[12px] text-black/45">{plan.period}</span>
              </div>
              <p className="mt-3 min-h-[56px] text-[12px] leading-[1.6] text-black/55">{plan.description}</p>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-[12px] font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[#101310] text-white hover:bg-[#0066FF]"
                      : "border border-black/10 bg-white text-[#1A1A1A] hover:border-black/20 hover:bg-[#0066FF] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-[12px] text-black/60">
                <div className="flex items-center gap-2">
                  <SlackIcon />
                  <span>Slack Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon />
                  <span>{plan.teamMembers} Team members</span>
                </div>
              </div>

              <div className="mt-6 border-t border-black/10 pt-5">
                <p className="text-[11px] font-semibold text-black/45">Includes:</p>
              </div>
              <ul className="mt-3 flex-1 space-y-2 text-[12px] text-black/60">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">
                      <ArrowIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
