import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import videoBg from "@/assets/download.mp4";

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

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="cta"
      className="relative h-[460px] max-h-[460px] overflow-hidden md:h-[520px] md:max-h-[520px] lg:h-[620px] lg:max-h-[620px]"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={videoBg}
      />
      
      {/* Gradient Overlay: 100% at bottom, 50% at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 pt-8 md:pt-12 lg:pt-14">
        <motion.div
          ref={ref}
          variants={list}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex max-w-7xl flex-col items-center text-center"
        >
          <motion.h2
            variants={item}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-6xl lg:text-9xl"
          >
            Let's build something
            <br />
            great together
          </motion.h2>
          
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl font-semibold tracking-[-0.02em] text-lg text-white/60 sm:mt-10 sm:text-xl md:mt-14 md:text-3xl"
          >
            Get in touch to explore how we can help your business reach its full potential.
          </motion.p>
          
          <motion.a
            variants={item}
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-12 py-5 text-lg font-semibold tracking-[-0.02em] text-black transition-all hover:bg-white/90 sm:mt-10 sm:px-14 sm:py-5 sm:text-xl md:mt-12 md:px-20 md:py-7 md:text-3xl"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
