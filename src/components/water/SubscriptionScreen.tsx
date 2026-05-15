import { ChevronLeft, Pause, Calendar, Sparkles, Check } from "lucide-react";
import gallon from "@/assets/gallon.png";
import { BottomNav } from "./BottomNav";

export function SubscriptionScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.("home")}
          className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft"
        >
          <ChevronLeft className="size-4 rotate-180" />
        </button>
        <div className="font-display text-[16px]">باقة الاشتراك</div>
        <button className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft">
          <Pause className="size-4" />
        </button>
      </div>

      {/* Active plan card */}
      <div className="px-5 mt-3">
        <div className="rounded-3xl p-5 bg-gradient-deep text-primary-foreground relative overflow-hidden shadow-float">
          <div className="absolute -right-6 -top-6 size-32 rounded-full bg-aqua/25 blur-2xl" />
          <div className="absolute left-2 top-3 h-32">
            <img src={gallon} alt="" className="h-full object-contain opacity-90 transform -scale-x-100" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-aqua">الاشتراك الحالي</span>
          <h2 className="font-display text-[22px] mt-2">أسبوعي · 4 جوالين</h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-aqua animate-pulse" />
            <span className="text-[11px] text-primary-foreground/80">التوصيل القادم · الأحد، 24 مارس</span>
          </div>
          <div className="mt-5 flex gap-2">
            <button className="bg-aqua text-deep rounded-full px-3 py-1.5 text-[11px] font-bold">إدارة</button>
            <button className="bg-card/15 backdrop-blur text-primary-foreground rounded-full px-3 py-1.5 text-[11px] font-bold">تخطي أسبوع</button>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="px-5 mt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-[16px]">التوصيلات القادمة</h3>
          <Calendar className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-3 space-y-2">
          {[
            { d: "أحد", n: "24", m: "مارس", t: "6 – 8 م", q: "4 جوالين", next: true },
            { d: "أحد", n: "31", m: "مارس", t: "6 – 8 م", q: "4 جوالين" },
            { d: "أحد", n: "07", m: "أبريل", t: "6 – 8 م", q: "4 جوالين" },
          ].map((d, i) => (
            <div key={i} className={`rounded-2xl p-3 flex items-center gap-3 border ${d.next ? "bg-deep/5 border-deep/30" : "bg-card border-border/60"}`}>
              <div className="size-12 rounded-xl bg-card border border-border/60 flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold uppercase text-muted-foreground">{d.d}</span>
                <span className="font-display text-[16px] leading-none text-deep">{d.n}</span>
              </div>
              <div className="flex-1">
                <div className="text-[12px] font-bold">{d.q} · {d.m}</div>
                <div className="text-[10px] text-muted-foreground">{d.t}</div>
              </div>
              {d.next && <span className="text-[9px] font-bold uppercase tracking-wider text-aqua">التالي</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Switch plan */}
      <div className="px-5 mt-6">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-aqua" />
          <h3 className="font-display text-[16px]">تغيير الباقة</h3>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[
            { n: "أسبوعي", p: 49, sub: "4 جوالين / أسبوع", best: false, active: true },
            { n: "نصف شهري", p: 89, sub: "8 جوالين / أسبوعين", best: true, active: false },
          ].map((p) => (
            <div key={p.n} className={`rounded-3xl p-4 border-2 ${p.active ? "border-deep bg-deep/5" : "border-border/60 bg-card"}`}>
              {p.best && <span className="text-[9px] font-bold uppercase tracking-wider bg-aqua text-deep px-2 py-0.5 rounded-full">وفر 18%</span>}
              <div className="font-display text-[18px] mt-2">{p.n}</div>
              <div className="text-[10px] text-muted-foreground">{p.sub}</div>
              <div className="font-display text-[20px] text-deep mt-3">{p.p} ر.س<span className="text-[10px] font-sans text-muted-foreground"> / دورة</span></div>
              {p.active && (
                <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-aqua">
                  <Check className="size-3" /> الباقة الحالية
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="plans" onNavigate={onNavigate} />
    </div>
  );
}
