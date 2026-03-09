import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <SocialLinks />
        <PortfolioSection />
      </main>
      <footer className="text-center py-8 text-xs text-white/20 border-t border-surface-border">
        © {new Date().getFullYear()} Lost Tangerine. All rights reserved.
      </footer>
    </>
  );
}
