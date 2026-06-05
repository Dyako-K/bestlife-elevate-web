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
            <span className="text-xs font-bold tracking-tight text-background">
              نەخۆشخانەی بێست لایف
            </span>
            <span className="text-[9px] font-medium tracking-widest uppercase text-background/60">
              Best Life Hospital
            </span>
          </div>
        </div>

        {/* Contact (LTR numbers/email) */}
        <div
          dir="ltr"
          className="flex flex-col items-center gap-1 text-center font-[Inter] text-xs text-background/70 md:flex-row md:gap-4"
        >
          <span>07709510001</span>
          <span className="hidden h-3 w-px bg-background/20 md:block" />
          <span>info@bestlifehospital.com</span>
        </div>

        {/* Developer credit — strictly English LTR */}
        <p
          dir="ltr"
          className="text-center font-[Inter] text-xs text-background/60"
        >
          Developed by Diako Kaso - 07713846655 - diako.kaso@gmail.com
        </p>
      </div>
    </footer>
  );
}
