import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main>
        <Header />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
