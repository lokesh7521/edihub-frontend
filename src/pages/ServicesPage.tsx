import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { CtaSection } from "@/components/sections/CtaSection";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";

const fallbackServices = [
  {
    number: "01",
    title: "Website Design",
    description: "Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return."
  },
  {
    number: "02",
    title: "Product Design",
    description: "We transform complex user needs into intuitive, elegant solutions that solve real business challenges and create meaningful interactions."
  },
  {
    number: "03",
    title: "Branding",
    description: "Our branding process goes beyond visual identity, crafting narratives that capture your unique essence and create lasting connections."
  }
];

const list = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
    fetch(`${apiUrl}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data.length > 0 ? data : fallbackServices))
      .catch((err) => {
        console.error("Error fetching services:", err);
        setServices(fallbackServices);
      });
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.p
              variants={item}
              className="text-[14px] font-bold tracking-[0.2em] text-[#0066FF] uppercase"
            >
              / Our Expertise /
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-8 text-[48px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111827] sm:text-[64px] md:text-[80px] lg:text-[96px]"
            >
              Solutions that scale with your vision.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-10 max-w-[32ch] text-[18px] leading-relaxed text-[#4B5563] sm:text-[22px] lg:text-[26px]"
            >
              We combine strategic thinking with technical excellence to build digital products that drive impact.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="pb-32">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.length > 0 ? (
              services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-[2rem] bg-[#F9FAFB] p-8 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 lg:p-12"
                >
                  <div>
                    <span className="text-[14px] font-bold text-[#0066FF]">{service.number}</span>
                    <h3 className="mt-6 text-[28px] font-bold tracking-tight text-[#111827] lg:text-[36px]">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-[16px] leading-relaxed text-[#4B5563] lg:text-[18px]">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-12">
                     <ul className="space-y-3">
                        {["Custom Solutions", "Scalable Tech", "Premium Quality"].map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-[14px] font-medium text-[#111827]">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                            {feature}
                          </li>
                        ))}
                     </ul>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-zinc-400">Loading services...</p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Process />

      {/* FAQ */}
      <Faq />

      {/* CTA / Contact / Footer */}
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
}
