import {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { socials } from "@/data/socials";

const ICON_MAP: Record<string, IconType> = {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
};

export default function SideNav() {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full py-4 bg-stone-100/50 glass-nav shadow-xl shadow-orange-900/5 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-2 px-2">
        {/* Avatar / initials */}
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2 text-on-primary font-headline font-bold text-sm select-none">
          LT
        </div>

        {socials.map((link) => {
          const Icon = ICON_MAP[link.iconName];
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              aria-label={link.label}
              className="text-stone-500 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 rounded-full"
              style={{ "--brand": link.brandColor } as React.CSSProperties}
            >
              {Icon && (
                <Icon
                  className="text-xl hover:text-[var(--brand)] transition-colors"
                  aria-hidden="true"
                />
              )}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
