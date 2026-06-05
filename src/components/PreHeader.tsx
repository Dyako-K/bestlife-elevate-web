import { Code2, Phone, Mail } from "lucide-react";

export function PreHeader() {
  return (
    <div className="border-b border-border/40 bg-navy text-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-1.5 text-[11px] font-medium tracking-wide md:justify-between">
        <span className="hidden items-center gap-1.5 text-background/70 md:inline-flex">
          <Code2 className="h-3 w-3 text-teal" />
          Developed by <span className="text-background">Diako Kaso</span>
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a
            href="tel:07713846655"
            className="inline-flex items-center gap-1.5 text-background/80 transition-colors hover:text-teal"
          >
            <Phone className="h-3 w-3" />
            07713846655
          </a>
          <span className="hidden h-3 w-px bg-background/20 sm:block" />
          <a
            href="mailto:diako.kaso@gmail.com"
            className="inline-flex items-center gap-1.5 text-background/80 transition-colors hover:text-teal"
          >
            <Mail className="h-3 w-3" />
            diako.kaso@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
