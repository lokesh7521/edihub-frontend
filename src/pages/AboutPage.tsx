import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import teamImage from "@/assets/team.jpg";
import statsImage from "@/assets/stats.jpg";
import logoIcon from "@/assets/e.webp";
import { CtaSection } from "@/components/sections/CtaSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const list = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const heroImagesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroImagesRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero - Building digital excellence since 2019 */}
      <Section className="bg-white pt-20 md:pt-28 lg:pt-36 xl:pt-80">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            ref={heroRef}
            variants={list}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={item}
              className="max-w-[22ch] text-[40px] font-semibold leading-[0.95] tracking-[-0.09em] text-[#111827] sm:text-[52px] md:text-[64px] lg:text-[72px]"
            >
              Building digital
              <br />
              excellence since 2014
            </motion.h1>

            <div
              ref={heroImagesRef}
              className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12"
            >
              {/* Left image card */}
              <motion.div variants={item} className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl bg-zinc-200 lg:max-h-[720px]">
                  <motion.img
                    src={teamImage}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                    style={{ y: imageY, scale: 1.2, willChange: "transform" }}
                  />
                </div>
              </motion.div>

              {/* Right text + image stack */}
              <motion.div
                variants={item}
                className="flex flex-col gap-6 lg:col-span-6"
              >
                <p className="max-w-[52ch] text-[14px] leading-[1.7] text-[#4B5563] sm:text-[16px] md:text-[18px]">
                  We are a full-service digital agency driven by creativity, powered by technology, and accelerated by AI. From building brands to developing scalable digital products, we help businesses transform ideas into impactful digital experiences.
                </p>
                <div className="mt-2 overflow-hidden rounded-3xl bg-zinc-200 lg:max-h-[720px]">
                  <motion.img
                    src={statsImage}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                    style={{ y: imageY, scale: 1.2, willChange: "transform" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Story + large quote */}
      <Section className="bg-white py-16 md:py-24 lg:py-32">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            ref={storyRef}
            variants={list}
            initial="hidden"
            animate="show"
          >
            {/* Top: Title and paragraph on left */}
            <motion.div variants={item} className="lg:w-[55%]">
              <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#111827] sm:text-[38px] md:text-[44px] lg:text-[56px]">
                From humble beginnings to a trusted digital partner
              </h2>
              <p className="mt-18 text-[15px] leading-[1.5] text-[#6B7280] font-semibold tracking-[-0.05em] sm:text-[16px] lg:text-[22px] lg:w-[90%]">
                What started as a small team of three developers working from a tiny office has grown into a dynamic
                digital agency trusted by businesses across multiple industries. Through dedication to quality,
                transparent communication, and a deep understanding of our clients&apos; needs, we&apos;ve built lasting
                partnerships and delivered solutions that make a difference.
              </p>
            </motion.div>

            {/* Bottom: Quote section aligned right */}
            <motion.div
              variants={item}
              className="mt-24 md:mt-32 lg:mt-40 flex justify-center lg:justify-end"
            >
              <div className="lg:w-[55%]">
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Quote mark */}
                  <span className="text-[56px] font-bold leading-[0.8] text-[#0066FF] sm:text-[72px] lg:text-[150px] flex-shrink-0">
                    ❝
                  </span>
                  {/* Quote text */}
                  <p className="text-[20px] leading-[1.35] text-[#111827] sm:text-[26px] md:text-[30px] lg:text-[42px] font-semibold tracking-[-0.07em]">
                    When we founded OPUS, we had a simple vision - to help businesses succeed in the digital world by
                    combining technical excellence with genuine care for our clients&apos; success. That vision still drives
                    everything we do today.
                  </p>
                </div>
                {/* Author */}
                <div className="mt-8 flex items-center gap-4 ml-16 sm:ml-20 lg:ml-30">
                  <div className="h-14 w-14 lg:h-26 lg:w-26 overflow-hidden rounded-full bg-zinc-200">
                    <img
                      src={teamImage}
                      alt="Markus Chen"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold text-[#111827] sm:text-[18px] lg:text-[30px]">Markus Chen</div>
                    <div className="text-[14px] text-[#6B7280] sm:text-[15px] lg:text-[18px]">CEO & Co-founder</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section className="bg-white py-16 md:py-24 lg:py-32">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={item}
              className="text-[12px] font-medium tracking-[0.1em] text-[#111827] sm:text-[13px]"
            >
              /OUR APPROACH/
            </motion.p>

            <motion.div
              variants={item}
              className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-48 lg:mt-16"
            >
              {/* 01 */}
              <div>
                <span className="text-[36px] font-semibold text-[#111827] tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
                  01
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-[#111827] tracking-[-0.03em] sm:text-[22px] lg:text-[28px]">
                  Strategy-First Thinking
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#6B7280] lg:text-[20px]">
                  We focus on understanding before executing, ensuring every decision has purpose.
                </p>
              </div>

              {/* 02 */}
              <div>
                <span className="text-[36px] font-semibold text-[#111827] tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
                  02
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-[#111827] tracking-[-0.03em] sm:text-[22px] lg:text-[28px]">
                  Creative + Technical Balance
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#6B7280] lg:text-[20px]">
                  We merge design and development to create cohesive, high-performing solutions.
                </p>
              </div>

              {/* 03 */}
              <div>
                <span className="text-[36px] font-semibold text-[#111827] tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
                  03
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-[#111827] tracking-[-0.03em] sm:text-[22px] lg:text-[28px]">
                  Long-Term Partnership
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#6B7280] lg:text-[20px]">
                  We don’t just deliver projects — we build relationships that grow over time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="bg-white py-16 md:py-24 lg:py-32 border-t border-zinc-100">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-12 lg:flex-row lg:gap-24 xl:gap-32"
          >
            <motion.div variants={item} className="lg:w-[25%] lg:flex-shrink-0">
              <p className="text-[12px] font-medium tracking-[0.1em] text-[#111827] sm:text-[13px]">
                /OUR VALUES/
              </p>
            </motion.div>

            <motion.div variants={item} className="lg:w-[55%]">
              <div className="flex flex-col gap-14 sm:gap-20">
                {/* Value 1 */}
                <div>
                  <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827] sm:text-[32px] md:text-[38px] lg:text-[42px]">
                    A culture of innovation
                  </h3>
                  <p className="mt-5 max-w-[60ch] text-[15px] font-medium leading-[1.65] text-[#6B7280] sm:text-[16px] lg:text-[18px]">
                    At OPUS, we foster a culture of continuous learning and innovation. Our team members are encouraged to experiment, share ideas, and push the boundaries of what&apos;s possible in digital solutions.
                  </p>
                </div>

                {/* Value 2 */}
                <div>
                  <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827] sm:text-[32px] md:text-[38px] lg:text-[42px]">
                    A dedication to craft
                  </h3>
                  <p className="mt-5 max-w-[60ch] text-[15px] font-medium leading-[1.65] text-[#6B7280] sm:text-[16px] lg:text-[18px]">
                    We believe that great work comes from mastery of our craft. Every line of code, every design decision, and every strategic recommendation is backed by deep expertise and attention to detail.
                  </p>
                </div>

                {/* Value 3 */}
                <div>
                  <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827] sm:text-[32px] md:text-[38px] lg:text-[42px]">
                    A foundation of trust
                  </h3>
                  <p className="mt-5 max-w-[60ch] text-[15px] font-medium leading-[1.65] text-[#6B7280] sm:text-[16px] lg:text-[18px]">
                    We cultivate lasting partnerships by being direct, honest, and clear in our communication. Our clients always know where their projects stand and what decisions are being made to drive their success forward.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Team grid */}
      <Section className="bg-white py-16 md:py-24 lg:py-32">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            ref={teamRef}
            variants={list}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6"
            >
              {[
                { name: "Markus Chen", role: "CEO & Co-founder" },
                { name: "Sarah Rodriguez", role: "Head of Development" },
                { name: "David Park", role: "Creative Director" },
                { name: "Emily Thompson", role: "Head of PM" },
                { name: "Michael O'Brien", role: "Technical Lead" },
                { name: "Lisa Wong", role: "UX Research Lead" },
                { name: "Jean Grey", role: "Web Designer" },
                { name: "Oscar Mendez", role: "Developer" },
              ].map((person) => (
                <div key={person.name} className="flex flex-col">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-zinc-100">
                    <img
                      src={teamImage}
                      alt={person.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 lg:mt-5">
                    <div className="text-[16px] font-semibold text-[#111827] tracking-[-0.02em] sm:text-[18px] lg:text-[26px]">{person.name}</div>
                    <div className="mt-1 text-[14px] font-medium tracking-[-0.02em] text-[#6B7280] sm:text-[15px] lg:text-[20px]">{person.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Help us shape the future */}
      <Section className="bg-white pt-32 pb-48 md:pt-40 md:pb-56 lg:pt-56 lg:pb-72">
        <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex md:justify-end md:pr-10 lg:pr-36"
          >
            <div className="w-full max-w-3xl lg:max-w-4xl grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-6 lg:gap-x-8">
              {/* Blue logo icon */}
              <motion.div variants={item} className="col-start-1 row-start-1 row-span-3 -mt-1 lg:-mt-2">
                <img
                  src={logoIcon}
                  alt="Edihub"
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-contain"
                />
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={item}
                className="col-start-2 text-[36px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111827] sm:text-[48px] md:text-[56px] lg:text-[72px]"
              >
                Help us shape the future of digital
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={item}
                className="col-start-2 mt-8 text-[16px] font-medium leading-[1.6] text-[#6B7280] sm:text-[18px] lg:text-[22px] max-w-[52ch]"
              >
                We&apos;re always looking for talented individuals who share our passion for digital excellence and client success.
              </motion.p>

              {/* Let's talk link */}
              <motion.div variants={item} className="col-start-2 mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-[#111827] sm:text-[18px] group"
                >
                  <span className="border-b-2 border-[#111827] pb-1">Let&apos;s talk</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA + contact + footer to match the bottom of the layout */}
      <CtaSection />
      <Contact />
      <Footer />
    </>
  );
}

