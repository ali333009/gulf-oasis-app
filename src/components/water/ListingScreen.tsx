import { ChevronLeft, Filter, Plus, Minus, Star } from "lucide-react";
import gallon from "@/assets/gallon.png";
import bottle from "@/assets/bottle.png";
import carton from "@/assets/carton.png";
import { BottomNav } from "./BottomNav";

const products = [
  { name: "وسام الخليج جالون 19 لتر", desc: "نبع طبيعي معدني", price: 18, img: gallon, badge: "كمية", rating: 4.9 },
  { name: "مياه زجاج فاخرة 750 مل", desc: "إصدار محدود", price: 14, img: bottle, badge: "فاخر", rating: 4.8 },
  { name: "كرتون · 24 × 330 مل", desc: "أساسي يومي", price: 22, img: carton, badge: "الأكثر مبيعاً", rating: 4.9 },
  { name: "كرتون · 12 × 1.5 لتر", desc: "عبوة عائلية", price: 28, img: carton, badge: "وفر 10%", rating: 4.7 },
];

export function ListingScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.("home")}
          className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft"
        >
          <ChevronLeft className="size-4 rotate-180" />
        </button>
        <div className="text-center">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">القسم</div>
          <div className="font-display text-[16px]">جوالين المياه</div>
        </div>
        <button className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft">
          <Filter className="size-4" />
        </button>
      </div>

      <div className="px-5 mt-2 flex gap-2 overflow-x-auto no-scrollbar">
        {["الكل", "جوالين", "كراتين", "زجاج", "مياه غازية", "قلوي"].map((t, i) => (
          <button
            key={t}
            className={`whitespace-nowrap px-4 h-9 rounded-full text-[12px] font-semibold ${
              i === 0 ? "bg-deep text-primary-foreground" : "bg-secondary text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="px-5 mt-2 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">128 منتج</span>
        <span className="text-[11px] font-semibold text-deep">ترتيب: الأكثر مبيعاً ▾</span>
      </div>

      <div className="px-5 mt-4 grid grid-cols-2 gap-3">
        {products.map((p, i) => (
          <div 
            key={p.name} 
            onClick={() => onNavigate?.("details")}
            className="bg-card border border-border/60 rounded-3xl p-3 shadow-soft cursor-pointer"
          >
            <div className="relative h-32 bg-gradient-water rounded-2xl flex items-center justify-center">
              <span className="absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase bg-card text-deep px-2 py-0.5 rounded-full">
                {p.badge}
              </span>
              <img src={p.img} alt={p.name} className="h-full object-contain" />
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-1">
                <Star className="size-3 fill-[oklch(0.78_0.15_80)] text-[oklch(0.78_0.15_80)]" />
                <span className="text-[10px] font-semibold">{p.rating}</span>
              </div>
              <div className="text-[12px] font-bold mt-0.5 leading-tight">{p.name}</div>
              <div className="text-[10px] text-muted-foreground">{p.desc}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-display text-[15px] text-deep">{p.price} ر.س</span>
                {i === 0 ? (
                  <div className="flex items-center gap-1.5 bg-secondary rounded-full p-0.5" onClick={(e) => e.stopPropagation()}>
                    <button className="size-6 rounded-full bg-card flex items-center justify-center"><Minus className="size-3" /></button>
                    <span className="text-[11px] font-bold w-3 text-center">2</span>
                    <button className="size-6 rounded-full bg-deep text-primary-foreground flex items-center justify-center"><Plus className="size-3" /></button>
                  </div>
                ) : (
                  <button className="size-7 rounded-full bg-deep text-primary-foreground flex items-center justify-center">
                    <Plus className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav active="listing" onNavigate={onNavigate} />
    </div>
  );
}
