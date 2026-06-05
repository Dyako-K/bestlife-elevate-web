import { Mail, Phone } from "lucide-react";
import logoAsset from "@/assets/best-life-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background p-1">
            <img
              src={logoAsset.url}
              alt="Best Life Hospital logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-bold tracking-tight text-background">Best Life</span>
            <span className="text-[9px] font-medium tracking-widest uppercase text-background/60">
              Hospital
            </span>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="flex flex-col items-center gap-1 text-center md:flex-row md:gap-4">
          <span className="flex items-center gap-1.5 text-xs text-background/70">
            <Phone className="h-3 w-3" />
            07709510001
          </span>
          <span className="hidden h-3 w-px bg-background/20 md:block" />
          <span className="flex items-center gap-1.5 text-xs text-background/70">
            <Mail className="h-3 w-3" />
            info@bestlifehospital.com
          </span>
        </div>

        <p className="text-xs text-background/50">
          Developed by <span className="font-medium text-background/70">Diako Kaso</span> · 07713846655 · diako.kaso@gmail.com
        </p>
      </div>
    </footer>
  );
}
