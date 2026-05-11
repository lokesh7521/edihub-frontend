import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8 pb-28">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/80">
            @2025 Opus, All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm text-white/80">
            <a href="#" className="transition-opacity hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="transition-opacity hover:opacity-100">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
