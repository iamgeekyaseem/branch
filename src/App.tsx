import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Showcase } from "@/components/site/Showcase";
import { Cost } from "@/components/site/Cost";
import { Download } from "@/components/site/Download";
import { Maker } from "@/components/site/Maker";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Cost />
        <Download />
        <Maker />
      </main>
      <Footer />
    </div>
  );
}
