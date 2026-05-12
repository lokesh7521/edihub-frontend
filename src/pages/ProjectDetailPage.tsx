import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import pexels1 from "@/assets/projects/pexels-1.jpg";
import pexels2 from "@/assets/projects/pexels-2.jpg";
import pexels3 from "@/assets/projects/pexels-3.jpg";
import pexels4 from "@/assets/projects/pexels-4.jpg";
import pexels5 from "@/assets/projects/pexels-5.jpg";

const imageMap: Record<string, string> = {
  "pexels-1.jpg": pexels1,
  "pexels-2.jpg": pexels2,
  "pexels-3.jpg": pexels3,
  "pexels-4.jpg": pexels4,
  "pexels-5.jpg": pexels5,
};

type Project = {
  title: string;
  tags: string[];
  slug: string;
  image: string;
  category: string;
  client: string;
  year: string;
  description: string;
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        const found = data.find((p) => p.slug === slug);
        if (found) {
          setProject(found);
        } else {
          navigate("/projects");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setLoading(false);
      });
      
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0066FF] border-t-transparent" />
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <Section className="pb-12">
          <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[14px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
                / {project.category} /
              </p>
              <h1 className="mt-8 text-[48px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111827] sm:text-[64px] md:text-[80px] lg:text-[110px]">
                {project.title}
              </h1>
            </motion.div>
          </Container>
        </Section>

        {/* Hero Image */}
        <Section className="py-0">
          <Container className="px-0 sm:px-8 lg:px-14 xl:px-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[16/9] w-full overflow-hidden sm:rounded-[2rem]"
            >
              <img
                src={imageMap[project.image] || project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section className="py-24 lg:py-32">
          <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
              {/* Left Side: Metadata */}
              <div className="lg:col-span-4">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                      Client
                    </h4>
                    <p className="mt-3 text-[18px] font-medium text-[#111827]">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                      Year
                    </h4>
                    <p className="mt-3 text-[18px] font-medium text-[#111827]">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                      Services
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[14px] font-medium text-[#4B5563]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Description */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl">
                  <h3 className="text-[28px] font-semibold leading-[1.2] text-[#111827] sm:text-[36px]">
                    The Challenge & Solution
                  </h3>
                  <p className="mt-8 text-[18px] leading-[1.6] text-[#4B5563] sm:text-[20px]">
                    {project.description}
                  </p>
                  <p className="mt-8 text-[18px] leading-[1.6] text-[#4B5563] sm:text-[20px]">
                    We approached this project with a focus on delivering a high-end digital experience that reflects the client's values and vision. Every detail, from the color palette to the typography, was carefully considered to ensure a cohesive and impactful brand identity.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Next Project Section */}
        <Section className="pb-32">
          <Container className="px-6 sm:px-8 lg:px-14 xl:px-20">
            <div className="border-t border-[#E5E7EB] pt-24">
              <p className="text-[14px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase text-center">
                / Next Project /
              </p>
              
              {(() => {
                // Find next project logic
                const currentIndex = projects.findIndex(p => p.slug === slug);
                const nextProject = projects[(currentIndex + 1) % projects.length];
                
                if (!nextProject) return null;

                return (
                  <Link
                    to={`/projects/${nextProject.slug}`}
                    className="group mt-12 block text-center"
                  >
                    <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-[2rem]">
                      <img
                        src={imageMap[nextProject.image] || nextProject.image}
                        alt={nextProject.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-[40px] font-bold text-white sm:text-[64px] lg:text-[80px]">
                          {nextProject.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                );
              })()}

              <div className="mt-16 text-center">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 text-[18px] font-bold text-[#111827] transition-colors hover:text-[#0066FF]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180 transition-transform group-hover:-translate-x-2">
                    <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to All Projects
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
