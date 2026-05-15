import { ChevronLeft, Phone, MessageCircle, Check, Truck, Package, Home } from "lucide-react";
import driver from "@/assets/driver.jpg";
import { BottomNav } from "./BottomNav";

export function TrackingScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.("home")}
          className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft"
        >
          <ChevronLeft className="size-4 rotate-180" />
        </button>
        <div className="font-display text-[16px]">طلب #BR-29481</div>
        <span className="text-[11px] font-semibold text-aqua">مباشر</span>
      </div>

      {/* Map mock */}
      <div className="px-5 mt-2">
        <div className="relative h-[230px] rounded-3xl overflow-hidden bg-gradient-to-b from-[oklch(0.94_0.03_215)] to-[oklch(0.88_0.06_215)] shadow-soft" dir="ltr">
          {/* roads */}
          <svg className="absolute inset-0 size-full" viewBox="0 0 400 230" fill="none">
            <path d="M-20 80 Q 100 40 200 100 T 420 60" stroke="white" strokeWidth="14" />
            <path d="M-20 80 Q 100 40 200 100 T 420 60" stroke="oklch(0.85 0.05 215)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M50 230 L 80 140 L 180 100 L 260 160 L 380 230" stroke="white" strokeWidth="10" />
            <path d="M0 180 H 400" stroke="white" strokeWidth="8" opacity="0.6" />
          </svg>
          <div className="absolute top-[28%] left-[18%] size-3 rounded-full bg-deep ring-4 ring-deep/20" />
          <div className="absolute top-[55%] right-[18%] size-9 rounded-full bg-deep flex items-center justify-center ring-4 ring-deep/20">
            <Truck className="size-4 text-primary-foreground transform -scale-x-100" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 bg-card rounded-2xl p-3 flex items-center gap-3 shadow-float" dir="rtl">
            <div className="font-display text-[28px] text-deep leading-none">24<span className="text-[11px] font-sans"> دقيقة</span></div>
            <div className="flex-1">
              <div className="text-[11px] font-bold">يصل قريباً</div>
              <div className="text-[10px] text-muted-foreground">محمد يبعد 2.4 كم</div>
            </div>
          </div>
        </div>
      </div>

      {/* Driver */}
      <div className="px-5 mt-4">
        <div className="bg-card border border-border/60 rounded-2xl p-3 flex items-center gap-3 shadow-soft">
          <img src={driver} alt="driver" className="size-12 rounded-xl object-cover" />
          <div className="flex-1">
            <div className="text-[13px] font-bold">محمد الحربي</div>
            <div className="text-[10px] text-muted-foreground">وسام إكسبرس · لوحة 4821</div>
          </div>
          <button className="size-10 rounded-xl bg-secondary flex items-center justify-center"><MessageCircle className="size-4 text-deep transform -scale-x-100" /></button>
          <button className="size-10 rounded-xl bg-deep flex items-center justify-center"><Phone className="size-4 text-primary-foreground" /></button>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 mt-5">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">حالة الطلب</div>
        <div className="mt-3 space-y-4 relative">
          <div className="absolute right-[15px] top-2 bottom-2 w-px bg-border" />
          {[
            { i: Check, t: "تم تأكيد الطلب", s: "9:24 ص", done: true },
            { i: Package, t: "تم التجهيز في المركز", s: "9:48 ص", done: true },
            { i: Truck, t: "في الطريق إليك", s: "10:12 ص · الآن", done: true, active: true },
            { i: Home, t: "تم التوصيل", s: "الوقت المتوقع 10:36 ص", done: false },
          ].map((step) => (
            <div key={step.t} className="flex items-center gap-3 relative">
              <div className={`size-8 rounded-full flex items-center justify-center z-10 ${
                step.active ? "bg-deep text-primary-foreground ring-4 ring-deep/15" :
                step.done ? "bg-aqua text-deep" : "bg-secondary text-muted-foreground"
              }`}>
                <step.i className={`size-3.5 ${step.i === Truck ? 'transform -scale-x-100' : ''}`} />
              </div>
              <div className="flex-1">
                <div className={`text-[12px] font-bold ${step.done ? "" : "text-muted-foreground"}`}>{step.t}</div>
                <div className="text-[10px] text-muted-foreground">{step.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="tracking" onNavigate={onNavigate} />
    </div>
  );
}
