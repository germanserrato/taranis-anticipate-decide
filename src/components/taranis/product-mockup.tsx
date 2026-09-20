import { CloudRain, Droplets, Layers3, MapPin, RadioTower } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return <div className={cn("product-frame relative overflow-hidden rounded-[1.4rem] p-2 text-on-dark", className)} aria-label="Representación visual de la plataforma TARANIS">
    <div className="flex h-9 items-center justify-between border-b border-on-dark/10 px-3 text-[10px] text-on-dark/45"><div className="flex gap-1.5"><span className="size-1.5 rounded-full bg-primary/80"/><span className="size-1.5 rounded-full bg-on-dark/20"/><span className="size-1.5 rounded-full bg-on-dark/20"/></div><span className="font-display tracking-[.16em]">TARANIS / CUENCA 04</span><span>14:32 UTC</span></div>
    <div className={cn("grid min-h-[360px] grid-cols-[64px_1fr]", !compact && "md:min-h-[520px] md:grid-cols-[160px_1fr]") }>
      <aside className="border-r border-on-dark/10 p-3"><div className="mb-8 hidden text-xs font-semibold md:block">Capas</div><div className="space-y-3">{[Layers3, CloudRain, RadioTower, Droplets].map((Icon,i)=><div key={i} className={cn("flex items-center gap-2 rounded-lg p-2 text-[10px]", i===1 ? "bg-primary/15 text-primary" : "text-on-dark/45")}><Icon className="size-3.5"/><span className="hidden md:inline">{["Territorio","Precipitación","Estaciones","Caudal"][i]}</span></div>)}</div></aside>
      <div className="relative overflow-hidden bg-deep-soft">
        <svg viewBox="0 0 800 500" className="absolute inset-0 size-full" role="img" aria-label="Visualización abstracta de una cuenca y red fluvial, no cartografía real">
          <defs><radialGradient id="rain"><stop offset="0" stopColor="var(--aqua)" stopOpacity=".25"/><stop offset="1" stopColor="var(--aqua)" stopOpacity="0"/></radialGradient></defs>
          <g fill="none" stroke="var(--on-dark)" opacity=".12">{[70,100,130,160,190].map((r)=><ellipse key={r} cx="540" cy="210" rx={r*1.5} ry={r}/>)}</g>
          <circle cx="520" cy="200" r="170" fill="url(#rain)" className="radar-pulse"/>
          <g fill="none" stroke="var(--aqua)" strokeWidth="2" opacity=".75"><path d="M110 50 C190 120,170 170,270 210 S390 260,430 440"/><path d="M180 90 C220 150,270 130,292 224"/><path d="M390 40 C350 120,390 170,330 250"/><path d="M650 80 C570 140,600 210,438 320"/></g>
          <path d="M110 50 C190 120,170 170,270 210 S390 260,430 440" fill="none" stroke="var(--aqua-soft)" strokeWidth="3" className="flow-line"/>
          {[{x:180,y:140},{x:302,y:230},{x:430,y:320},{x:595,y:160}].map((p,i)=><g key={i} transform={`translate(${p.x} ${p.y})`}><circle r="9" fill="var(--deep)" stroke="var(--aqua)"/><circle r="3" fill="var(--aqua)"/></g>)}
        </svg>
        <div className="absolute left-4 top-4 rounded-xl border border-on-dark/10 bg-deep/80 p-3 backdrop-blur-md md:left-6 md:top-6"><p className="text-[9px] uppercase tracking-[.14em] text-on-dark/40">Precipitación acumulada</p><div className="mt-1 flex items-end gap-2"><strong className="font-display text-xl text-on-dark">38.4</strong><span className="pb-1 text-[9px] text-on-dark/50">mm</span></div></div>
        <div className="absolute right-4 top-4 rounded-xl border border-primary/20 bg-deep/80 p-3 backdrop-blur-md md:right-6 md:top-6"><p className="text-[9px] uppercase tracking-[.14em] text-primary">Previsión +24 h</p><div className="mt-2 flex items-center gap-2 text-xs"><span className="size-2 rounded-full bg-warning"/><span>Vigilancia</span></div></div>
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 rounded-xl border border-on-dark/10 bg-deep/85 p-3 backdrop-blur-md md:bottom-6 md:left-6 md:right-6 md:p-4">
          {["Caudal","Nivel","Tendencia"].map((x,i)=><div key={x} className={cn("border-on-dark/10", i<2 && "border-r")}><p className="text-[8px] uppercase text-on-dark/40">{x}</p><p className="mt-1 font-display text-xs md:text-base">{["42.8 m³/s","1.82 m","Ascendente"][i]}</p></div>)}
        </div>
        <MapPin className="data-rise absolute left-[48%] top-[42%] size-6 text-primary"/>
      </div>
    </div>
  </div>;
}