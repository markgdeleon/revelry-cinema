import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
