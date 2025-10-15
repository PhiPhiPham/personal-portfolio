
import { Footer } from './components/FooterComponent';
import HeroSection from './components/HeroSection'
import PortfolioShowcase from './components/portfolio-showcase';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full font-[family-name:var(--font-inter)]">
      <HeroSection />
      <div className="container mx-auto flex-1">
        <PortfolioShowcase />
      </div>
      <Footer />
    </main>
  );
}
