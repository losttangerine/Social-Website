import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Commissions | Lost Tangerine",
  description: "Commission pricing and terms for Lost Tangerine — custom illustrations, emotes, and animated emotes.",
};

export default function CommissionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">

        {/* Status badge + Hero */}
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-primary text-xs font-headline font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Commission Status: Open
          </div>

          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
            Bring Your{" "}
            <span className="text-primary italic">Vision</span>{" "}
            to Life
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
            Custom digital illustrations and smooth animations crafted with
            meticulous care.
          </p>
        </header>

        {/* Pricing Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">

          {/* Character Illustrations */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">
                Character Illustrations
              </h3>
              <p className="text-on-surface-variant font-body text-sm mb-6">
                Per character — all styles include sketch revision before lining
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Sketch", price: "$5–10" },
                  { label: "Headshot / Chibi", price: "$40" },
                  { label: "Half Body", price: "$55" },
                  { label: "Full Body", price: "$85" },
                  { label: "Simple / Blurred Background", price: "+$5" },
                ].map(({ label, price }) => (
                  <li
                    key={label}
                    className="flex justify-between items-center py-2 border-b border-outline-variant/30 last:border-0"
                  >
                    <span className="font-body text-on-surface">{label}</span>
                    <span className="font-headline font-bold text-primary">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Streaming Emotes */}
          <div className="md:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                Streaming Emotes
              </h3>
              <p className="text-on-surface-variant font-body mb-6 text-sm">
                Optimized for Twitch, Discord, and YouTube.
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Per Emote", price: "$30" },
                  { label: "Set of Three", price: "$75" },
                  { label: "Set of Five", price: "$125" },
                ].map(({ label, price }) => (
                  <li key={label} className="flex justify-between items-center py-2 border-b border-outline-variant/30 last:border-0">
                    <span className="font-body text-on-surface">{label}</span>
                    <span className="font-headline font-bold text-on-surface">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Animated Emotes — full row */}
          <div className="md:col-span-12 bg-primary-container rounded-xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-headline font-black mb-4 tracking-tighter text-on-primary-container">
                Animated Emotes
              </h3>
              <p className="text-on-primary-container/80 font-body mb-8">
                Smooth frame-by-frame animation. Base price per emote with
                complexity surcharges based on moving parts.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Base Price", price: "$50" },
                  { label: "4–5 Moving Parts", price: "+$10" },
                  { label: "6–7 Moving Parts", price: "+$15" },
                  { label: "8–9 Moving Parts", price: "+$20" },
                ].map(({ label, price }) => (
                  <div key={label} className="bg-white/10 backdrop-blur p-4 rounded-xl">
                    <span className="block text-xs font-headline font-bold uppercase tracking-widest text-on-primary-container/60 mb-1">
                      {label}
                    </span>
                    <span className="text-xl font-headline font-bold text-on-primary-container">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-on-primary-container/70 font-body text-sm">
                Already have a drawn emote and want it animated? Just reach out — we can work out pricing based on complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-24 px-8 py-12 bg-surface-container-low rounded-xl border-l-4 border-primary">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-10">
            Terms of Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                01. Payment
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Paypal, Venmo, or Cash App.</li>
                <li>Upfront or after sketch confirmation.</li>
                <li className="font-bold text-on-surface">No refunds.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                02. Usage
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Please provide credit when sharing.</li>
                <li>Do not claim my work as your own.</li>
                <li>I retain the right to showcase in portfolio.</li>
                <li>No NSFW. Slightly lewd is fine.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                03. Revisions &amp; Timeline
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>2 major revision limit. Extra fees may apply.</li>
                <li>3–7 day turnaround depending on complexity.</li>
                <li>I can decline commissions I don&apos;t want to do.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                04. Process &amp; Delivery
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Drawing process may be streamed publicly unless you request otherwise.</li>
                <li>Files delivered via Discord or Email — send those in advance.</li>
                <li>Questions? DM @losttangerine on Twitter.</li>
              </ul>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
