import { ChevronLeft, Heart, Share2, Droplet, Shield, Truck, Plus, Minus, Star } from "lucide-react";
import gallon from "@/assets/gallon.png";
import bottle from "@/assets/bottle.png";

export function DetailsScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-28 bg-background min-h-screen">
      {/* Image hero */}
      <div className="relative bg-gradient-water h-[420px]">
        <div className="absolute inset-x-0 top-0 px-5 pt-2 flex items-center justify-between z-10">
          <button 
            onClick={() => onNavigate?.("listing")}
            className="size-10 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center shadow-soft"
          >
            <ChevronLeft className="size-4 rotate-180" />
          </button>
          <div className="flex gap-2">
            <button className="size-10 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center shadow-soft">
              <Share2 className="size-4" />
            </button>
            <button className="size-10 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center shadow-soft">
              <Heart className="size-4 text-deep" />
            </button>
          </div>
        </div>
        <img src={gallon} alt="" className="absolute inset-0 size-full object-contain p-10" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          <span className="size-2 rounded-full bg-deep" />
          <span className="size-2 rounded-full bg-deep/30" />
          <span className="size-2 rounded-full bg-deep/30" />
        </div>
      </div>

      <div className="px-5 -mt-6 relative bg-background rounded-t-[2rem] pt-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-aqua">وسام الخليج · السعودية</span>
          <span className="text-[10px] text-muted-foreground">·</span>
          <div className="flex items-center gap-1">
            <Star className="size-3 fill-[oklch(0.78_0.15_80)] text-[oklch(0.78_0.15_80)]" />
            <span className="text-[10px] font-semibold">4.9 (2,148)</span>
          </div>
        </div>
        <h1 className="font-display text-[24px] mt-2 leading-tight">جالون مياه 19 لتر نقي</h1>
        <p className="text-[12px] text-muted-foreground mt-1.5 leading-relaxed">
          مستخرجة من آبار عميقة نقية. مفلترة طبيعياً لتحافظ على المعادن الأساسية.
        </p>

        {/* Purity stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { v: "7.8", l: "توازن pH" },
            { v: "<10", l: "أملاح ذائبة" },
            { v: "100%", l: "خالي من BPA" },
          ].map((s) => (
            <div key={s.l} className="bg-secondary rounded-2xl p-3 text-center">
              <div className="font-display text-[18px] text-deep">{s.v}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Delivery */}
        <div className="mt-4 rounded-2xl border border-border/60 p-3.5 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-aqua flex items-center justify-center">
            <Truck className="size-4 text-deep transform -scale-x-100" />
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-bold">توصيل اليوم، 6–8 مساءً</div>
            <div className="text-[10px] text-muted-foreground">إلى الطائف · مجاني للطلبات فوق 60 ر.س</div>
          </div>
          <Shield className="size-4 text-aqua" />
        </div>

        {/* Bundles */}
        <h3 className="font-display text-[16px] mt-5">وفر مع الباقات</h3>
        <div className="mt-2 space-y-2">
          {[
            { q: "حبة واحدة", p: 18, save: null, active: false },
            { q: "باقة 4 حبات", p: 64, save: "وفر 12%", active: true },
            { q: "باقة 8 حبات", p: 120, save: "وفر 18%", active: false },
          ].map((b) => (
            <div
              key={b.q}
              className={`rounded-2xl p-3.5 border-2 flex items-center justify-between ${
                b.active ? "border-deep bg-deep/5" : "border-border/60"
              }`}
            >
              <div>
                <div className="text-[13px] font-bold">{b.q}</div>
                {b.save && <div className="text-[10px] font-semibold text-aqua">{b.save}</div>}
              </div>
              <div className="font-display text-[15px] text-deep">{b.p} ر.س</div>
            </div>
          ))}
        </div>

        {/* Frequently bought */}
        <h3 className="font-display text-[16px] mt-5">يُشترى معها غالباً</h3>
        <div className="mt-2 flex gap-2">
          {[bottle, bottle].map((img, i) => (
            <div key={i} className="flex-1 bg-card border border-border/60 rounded-2xl p-3">
              <div className="h-20 bg-gradient-water rounded-xl flex items-center justify-center">
                <img src={img} alt="" className="h-full object-contain" />
              </div>
              <div className="mt-2 text-[11px] font-bold leading-tight">مياه زجاج 330 مل</div>
              <div className="text-[12px] font-bold text-deep mt-1">4.5 ر.س</div>
            </div>
          ))}
        </div>

        {/* Bottom action */}
        <div className="mt-6 -mx-5 px-5 py-4 border-t border-border/60 bg-card flex items-center gap-3">
          <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
            <button className="size-8 rounded-full bg-card flex items-center justify-center"><Minus className="size-3.5" /></button>
            <span className="text-[13px] font-bold w-4 text-center">2</span>
            <button className="size-8 rounded-full bg-deep text-primary-foreground flex items-center justify-center"><Plus className="size-3.5" /></button>
          </div>
          <button 
            onClick={() => onNavigate?.("checkout")}
            className="flex-1 h-12 rounded-full bg-deep text-primary-foreground font-bold text-[13px] flex items-center justify-center gap-2"
          >
            إضافة للسلة · 64 ر.س
          </button>
        </div>
      </div>
    </div>
  );
}
