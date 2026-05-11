import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const posts = [
  { date: "Jan 16, 2025", title: "Custom vs. Off-the-Shelf: Choose Wisely", href: "#blog" },
  { date: "Jan 9, 2025", title: "Design That Converts: Our Approach", href: "#blog" },
  { date: "Jan 3, 2025", title: "7 Critical Steps to Successfully Launch Your Digital Product", href: "#blog" },
];

export function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="blog" className="bg-white">
      <Container>
        <div ref={ref} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#333333]"
            >
              / Blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl"
            >
              Our perspectives
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-4 max-w-xl text-[#666666]"
            >
              Stay ahead with actionable insights, expert advice, and practical strategies for digital success.
            </motion.p>
          </div>
          <motion.a
            href="#blog"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group inline-flex items-center gap-2 text-lg font-medium text-[#0066FF] transition-colors hover:text-[#0052cc]"
          >
            All articles
            <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group block overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-video w-full bg-zinc-200 transition-colors group-hover:bg-zinc-300" />
              <div className="p-6">
                <time className="text-sm text-[#888]">{post.date}</time>
                <h3 className="mt-2 text-lg font-bold text-[#1A1A1A]">{post.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
