import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { CtaSection } from "@/components/sections/CtaSection";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { AboutPage } from "@/pages/AboutPage";
import { AdminLogin } from "@/pages/AdminLogin";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { Route, Routes, useLocation } from "react-router-dom";

import GradualBlur from "@/components/ui/GradualBlur.jsx";

import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <SmoothScrollProvider />
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={2000}
        style={{ pointerEvents: "none" }}
      />
    <div className="relative min-h-screen">
      {!isAdminPage && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Vision />
                <ClientMarquee />
                <Services />
                <Process />
                <Projects />
                <Pricing />
                <Testimonials />
                <Faq />
                <CtaSection />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/services"
            element={
              <>
                <Services />
                <Pricing />
                <Faq />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <Projects />
                <Testimonials />
                <CtaSection />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <CtaSection />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/career"
            element={
              <>
                <CtaSection />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
