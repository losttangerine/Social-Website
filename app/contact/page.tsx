import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Lost Tangerine",
  description: "Get in touch with Lost Tangerine for custom illustrations, emotes, and animation projects.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
