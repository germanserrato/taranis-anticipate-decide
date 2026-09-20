import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Menu, Waves, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const navItems = [
  ["Producto", "/producto"], ["Cómo funciona", "/producto"], ["Soluciones", "/soluciones"],
  ["Tecnología", "/tecnologia"], ["Recursos", "/recursos"], ["TARANIS", "/empresa"], ["Contacto", "/contacto"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className="group flex items-center gap-3" aria-label="TARANIS, inicio">
    <span className="relative grid size-9 place-items-center overflow-hidden rounded-full border border-primary/40 bg-primary/10 text-primary">
      <Waves className="size-5 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden="true" />
    </span>
    {!compact && <span className="font-display text-lg font-semibold tracking-[0.14em] text-inherit">TARANIS</span>}
  </Link>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={cn("fixed inset-x-0 top-0 z-50 text-on-dark transition-all duration-500", scrolled && "border-b border-on-dark/10 bg-deep/90 backdrop-blur-xl") }>
    <div className="section-shell flex h-20 items-center justify-between">
      <Brand />
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegación principal">
        {navItems.map(([label, to]) => <Link key={label} to={to} className="text-xs font-medium text-on-dark/70 transition-colors hover:text-on-dark" activeProps={{ className: "text-primary" }}>{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-1 text-xs" aria-label="Idioma"><span className="text-primary">ES</span><span className="text-on-dark/30">/</span><button type="button" className="text-on-dark/55 hover:text-on-dark" aria-label="English, próximamente">EN</button></div>
        <Button asChild variant="hero"><Link to="/contacto">Solicitar demo <ArrowRight /></Link></Button>
      </div>
      <Button variant="glass" size="icon" className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="border-t border-on-dark/10 bg-deep px-4 py-6 md:hidden">
      <nav className="mx-auto flex max-w-lg flex-col" aria-label="Navegación móvil">
        {navItems.map(([label, to]) => <Link key={label} to={to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-on-dark/10 py-4 text-on-dark/80">{label}<ChevronRight className="size-4" /></Link>)}
        <Button asChild variant="hero" size="lg" className="mt-6"><Link to="/contacto" onClick={() => setOpen(false)}>Solicitar demo</Link></Button>
      </nav>
    </div>}
  </header>;
}

export function SectionHeader({ eyebrow, title, text, dark = false, align = "left" }: { eyebrow: string; title: ReactNode; text?: string; dark?: boolean; align?: "left" | "center" }) {
  return <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center") }>
    <p className="eyebrow mb-5">{eyebrow}</p>
    <h2 className={cn("display-title text-balance", dark ? "text-on-dark" : "text-foreground")}>{title}</h2>
    {text && <p className={cn("mt-7 max-w-2xl text-lg leading-8", align === "center" && "mx-auto", dark ? "text-on-dark/65" : "text-muted-foreground")}>{text}</p>}
  </div>;
}

export function Footer() {
  return <footer className="border-t border-on-dark/10 bg-deep py-14 text-on-dark">
    <div className="section-shell">
      <div className="grid gap-12 border-b border-on-dark/10 pb-12 lg:grid-cols-[1.5fr_2fr]">
        <div><Brand /><p className="mt-5 max-w-xs text-sm leading-6 text-on-dark/55">Inteligencia hidrológica para anticipar el riesgo.</p></div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:grid-cols-6">
          {navItems.slice(0,6).map(([label,to]) => <div key={label}><p className="mb-3 font-semibold">{label}</p><Link to={to} className="text-on-dark/55 hover:text-primary">Explorar</Link></div>)}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-xs text-on-dark/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 TARANIS. Información legal y privacidad.</p><div className="flex gap-5"><span>LinkedIn</span><span>YouTube</span><span>X</span><span>ES / EN</span></div>
      </div>
    </div>
  </footer>;
}

export function PageIntro({ eyebrow, title, text, children }: { eyebrow: string; title: ReactNode; text: string; children?: ReactNode }) {
  return <main><section className="dark-band topo-field min-h-[72vh] pt-36"><div className="section-shell section-space"><div className="max-w-5xl"><p className="eyebrow mb-6">{eyebrow}</p><h1 className="font-display text-[clamp(3.4rem,8vw,7rem)] font-medium leading-[.95] text-on-dark">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-on-dark/65">{text}</p></div></div></section>{children}</main>;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const update = () => setProgress((window.scrollY / Math.max(document.documentElement.scrollHeight - innerHeight, 1)) * 100); update(); addEventListener("scroll", update, { passive: true }); return () => removeEventListener("scroll", update); }, []);
  return <div className="fixed left-0 top-0 z-[60] h-0.5 bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} aria-hidden="true" />;
}