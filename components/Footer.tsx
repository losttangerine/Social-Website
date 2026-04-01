import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-orange-500">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-2xl font-headline font-black text-stone-50">
            Lost Tangerine
          </span>
          <p className="text-orange-100/80 font-body text-sm max-w-xs">
            Curated digital art and motion storytelling.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link
              href="/commissions"
              className="text-orange-100/80 hover:text-white transition-colors font-body text-sm"
            >
              Commissions
            </Link>
            <Link
              href="/contact"
              className="text-white underline font-body text-sm"
            >
              Studio Invite
            </Link>
          </div>
          <p className="text-stone-50/60 text-xs font-body">
            © {new Date().getFullYear()} Lost Tangerine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}