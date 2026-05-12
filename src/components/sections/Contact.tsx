import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const countryCodes = [
  { code: "+91", label: "IN (+91)" },
  { code: "+1", label: "US (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+81", label: "JP (+81)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    projectInfo: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const payload = {
        ...formData,
        phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : "",
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", countryCode: "+91", phone: "", projectInfo: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-white py-24 lg:py-32">
      <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] font-bold tracking-tight text-[#111827]">
                OPUS
              </h2>
              
              <div className="mt-16 space-y-12">
                <div>
                  <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                    E-mail
                  </h4>
                  <a 
                    href="mailto:contact@opushq.com" 
                    className="mt-3 block text-[18px] font-medium text-[#111827] hover:text-[#0066FF] transition-colors"
                  >
                    contact@opushq.com
                  </a>
                </div>

                <div>
                  <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                    Phone
                  </h4>
                  <a 
                    href="tel:+15551234567" 
                    className="mt-3 block text-[18px] font-medium text-[#111827] hover:text-[#0066FF] transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>

                <div>
                  <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                    Address
                  </h4>
                  <p className="mt-3 text-[18px] font-medium leading-relaxed text-[#111827]">
                    42 Pixel Place, Suite 404,<br />
                    New York, NY 10012
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111827] sm:text-[44px] md:text-[56px]">
                Got a project in mind? We'd love to hear about it. Big or small, we're here to help bring your ideas to life.
              </h3>

              <form onSubmit={handleSubmit} className="mt-20 space-y-12">
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-[#E5E7EB] bg-transparent py-4 text-[18px] font-medium text-[#111827] outline-none transition-colors focus:border-[#0066FF] placeholder:text-[#9CA3AF]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-[#E5E7EB] bg-transparent py-4 text-[18px] font-medium text-[#111827] outline-none transition-colors focus:border-[#0066FF] placeholder:text-[#9CA3AF]"
                    />
                  </div>
                </div>

                <div className="relative flex gap-4 border-b border-[#E5E7EB] transition-colors focus-within:border-[#0066FF]">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="bg-transparent py-4 text-[18px] font-medium text-[#111827] outline-none cursor-pointer"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Contact Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 bg-transparent py-4 text-[18px] font-medium text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="projectInfo"
                    required
                    placeholder="Project Information *"
                    rows={4}
                    value={formData.projectInfo}
                    onChange={(e) => setFormData({ ...formData, projectInfo: e.target.value })}
                    className="w-full resize-none border-b border-[#E5E7EB] bg-transparent py-4 text-[18px] font-medium text-[#111827] outline-none transition-colors focus:border-[#0066FF] placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center gap-2 border-b-2 border-[#111827] pb-1 text-[18px] font-bold text-[#111827] transition-all hover:border-[#0066FF] hover:text-[#0066FF] disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[16px] font-bold text-green-600"
                    >
                      ✓ Message sent successfully!
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[16px] font-bold text-red-600"
                    >
                      ✕ Failed to send. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
