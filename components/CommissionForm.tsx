"use client";

export default function CommissionForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
          Email Address
        </label>
        <input
          type="email"
          placeholder="hello@example.com"
          className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
          Commission Type
        </label>
        <select className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none">
          <option>Character Illustration</option>
          <option>Emote Pack</option>
          <option>Animated Emote</option>
          <option>Other / Custom</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Describe your character, setting, and mood..."
          className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-on-primary-container text-white font-headline font-bold py-5 rounded-full hover:scale-[1.02] transition-transform shadow-lg"
      >
        Send Request
      </button>
    </form>
  );
}
