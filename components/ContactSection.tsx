"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-primary-container px-4 sm:px-8 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-primary-container">
            STUDIO INVITE
          </h2>
          <p className="text-xl text-on-primary-container/80 font-body max-w-2xl mx-auto">
            Interested in a custom illustration or looking to collaborate on a
            motion project? Let&apos;s bring your vision to life.
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Project Vision
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface resize-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-5 bg-on-primary-container text-surface-container-lowest rounded-full font-headline font-extrabold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              SEND PROPOSAL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}