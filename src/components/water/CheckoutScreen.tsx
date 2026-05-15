import { ChevronLeft, MapPin, Clock, CreditCard, Apple, Plus, Minus } from "lucide-react";
import gallon from "@/assets/gallon.png";
import carton from "@/assets/carton.png";

export function CheckoutScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.("details")}
          className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft"
        >
          <ChevronLeft className="size-4 rotate-180" />
        </button>
        <div className="font-display text-[16px]">الدفع</div>
        <span className="text-[11px] text-muted-foreground">الخطوة 2/3</span>
      </div>

      {/* Items */}
      <div className="px-5 mt-3 space-y-3">
        {[
          { n: "جالون 19 لتر × 2", p: 36, img: gallon },
          { n: "كرتون زجاج 330 مل", p: 22, img: carton },
        ].map((it) => (
          <div key={it.n} className="bg-card border border-border/60 rounded-2xl p-3 flex gap-3 items-center shadow-soft">
            <div className="size-16 rounded-xl bg-gradient-water flex items-center justify-center">
              <img src={it.img} alt="" className="h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-bold">{it.n}</div>
              <div className="text-[13px] font-display text-deep mt-1">{it.p} ر.س</div>
            </div>
            <div className="flex items-center gap-1.5 bg-secondary rounded-full p-0.5">
              <button className="size-6 rounded-full bg-card flex items-center justify-center"><Minus className="size-3" /></button>
              <span className="text-[11px] font-bold w-3 text-center">1</span>
              <button className="size-6 rounded-full bg-deep text-primary-foreground flex items-center justify-center"><Plus className="size-3" /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery */}
      <div className="px-5 mt-5">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">التوصيل</div>
        <div className="mt-2 bg-card border border-border/60 rounded-2xl divide-y divide-border/60">
          <div className="p-4 flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-aqua flex items-center justify-center"><MapPin className="size-4 text-deep" /></div>
            <div className="flex-1">
              <div className="text-[12px] font-bold">المنزل · الطائف</div>
              <div className="text-[10px] text-muted-foreground">شارع شهار، عمارة 12، الدور 8</div>
            </div>
            <button className="text-[11px] font-semibold text-aqua">تغيير</button>
          </div>
          <div className="p-4 flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-aqua flex items-center justify-center"><Clock className="size-4 text-deep" /></div>
            <div className="flex-1">
              <div className="text-[12px] font-bold">اليوم · 6:00 – 8:00 مساءً</div>
              <div className="text-[10px] text-muted-foreground">وقت محدد · +5 ر.س</div>
            </div>
            <button className="text-[11px] font-semibold text-aqua">تعديل</button>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="px-5 mt-5">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">طريقة الدفع</div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <button className="aspect-[3/2] rounded-2xl border-2 border-deep bg-deep text-primary-foreground flex items-center justify-center" dir="ltr">
            <Apple className="size-5" /> <span className="text-[11px] font-bold ml-1">Pay</span>
          </button>
          <button className="aspect-[3/2] rounded-2xl border border-border/60 bg-card flex items-center justify-center" dir="ltr">
            <CreditCard className="size-4 text-deep mr-1" /> <span className="text-[10px] font-bold">•• 4291</span>
          </button>
          <button className="aspect-[3/2] rounded-2xl border border-border/60 bg-card flex items-center justify-center">
            <span className="text-[10px] font-bold text-deep">+ إضافة</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="px-5 mt-5">
        <div className="bg-secondary rounded-2xl p-4 space-y-2 text-[12px]">
          <Row l="المجموع الفرعي" v="58.00 ر.س" />
          <Row l="التوصيل (محدد)" v="5.00 ر.س" />
          <Row l="ضريبة القيمة المضافة 15%" v="9.45 ر.س" />
          <div className="border-t border-border/60 pt-2 mt-2 flex items-center justify-between">
            <span className="font-bold text-[13px]">الإجمالي</span>
            <span className="font-display text-[18px] text-deep">72.45 ر.س</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-5 py-4 bg-card border-t border-border/60 z-40">
        <button 
          onClick={() => onNavigate?.("tracking")}
          className="w-full h-13 py-4 rounded-full bg-deep text-primary-foreground font-bold text-[13px] flex items-center justify-center gap-2"
        >
          <Apple className="size-4" /> دفع باستخدام Apple Pay · 72.45 ر.س
        </button>
      </div>
    </div>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{l}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}
