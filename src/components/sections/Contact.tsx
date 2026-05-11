import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribble", href: "#" },
  { label: "Behance", href: "#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Contact() {
  return (
    <Section className="bg-black py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-6xl font-bold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
                OPUS
              </h3>
              <p className="mt-8 max-w-6xl text-2xl tracking-[-0.04em] leading-relaxed text-white/80 md:text-3xl">
                We help businesses succeed in the digital space by creating thoughtful solutions that combine smart design, reliable technology, and a deep understanding of what your users really need.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:text-right">
              <p className="text-xl text-white/80 md:text-2xl">You can also email us at:</p>
              <a
                href="mailto:contact@opushq.com"
                className="mt-4 inline-block text-4xl tracking-[-0.04em] font-bold text-white transition-opacity hover:opacity-80 md:text-5xl"
              >
                contact@opushq.com
              </a>

              <div className="mt-14 grid grid-cols-2 gap-14 lg:mt-12 lg:block">
                <nav className="lg:mt-12">
                  <ul className="flex flex-col gap-4 text-xl text-white md:text-2xl lg:flex-row lg:flex-wrap lg:justify-end lg:gap-10">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="transition-opacity hover:opacity-80">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex flex-col gap-4 text-xl text-white md:text-2xl lg:hidden">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className="transition-opacity hover:opacity-80">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 hidden flex-wrap justify-start gap-8 text-xl text-white md:text-2xl lg:flex">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-opacity hover:opacity-80">
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </Section>
    );
}
