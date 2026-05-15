import { Search, Bell, MapPin, Droplets, Package, Truck, Crown, Star, Plus, ChevronLeft, ShoppingCart, Ticket, Building2, Menu } from "lucide-react";
import gallon from "@/assets/gallon.png";
import bottle from "@/assets/bottle.png";
import carton from "@/assets/carton.png";
import hero from "@/assets/hero.jpg";
import { BottomNav } from "./BottomNav";

export function HomeScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen font-arabic" dir="rtl">
      {/* Header */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
        <div className="relative">
          <button 
            onClick={() => onNavigate?.("checkout")}
            className="size-10 rounded-full flex items-center justify-center text-primary relative"
          >
            <ShoppingCart className="size-6" />
            <span className="absolute -top-1 -right-1 size-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="size-10 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="size-full fill-accent">
                 <path d="M50 10 C30 30 10 50 10 70 A40 40 0 0 0 90 70 C90 50 70 30 50 10" />
               </svg>
            </div>
            <div className="flex flex-col items-center leading-tight">
              <span className="font-bold text-[18px] text-primary">وسام الخليج</span>
              <span className="text-[9px] text-muted-foreground">موزع معتمد لمياه نستله والمنهل</span>
            </div>
          </div>
        </div>

        <button className="size-10 flex items-center justify-center text-primary">
          <Search className="size-6" />
        </button>
      </div>

      {/* Banner */}
      <div className="px-5 mt-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-accent/10" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
             <div className="text-center">
               <h2 className="text-[20px] font-bold text-primary">أقوى عروض الطائف</h2>
               <p className="text-[12px] text-accent font-bold mt-1">من مياه نستله</p>
             </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="size-1.5 rounded-full bg-primary" />
            <div className="size-1.5 rounded-full bg-primary/30" />
            <div className="size-1.5 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-5 mt-8 grid grid-cols-3 gap-y-8 gap-x-4">
        {[
          { id: "plans", icon: Droplets, label: "عروض اشتراك القوارير", color: "bg-blue-50" },
          { id: "listing", icon: Package, label: "طلب مياة الكرتون للمنازل", color: "bg-cyan-50" },
          { id: "listing", icon: Ticket, label: "اعادة شراء كوبونات المنهل", color: "bg-indigo-50" },
          { id: "listing", icon: Building2, label: "طلبات المساجد", color: "bg-blue-900/10" },
          { id: "home", icon: Star, label: "عروض الافتتاح", color: "bg-yellow-50" },
          { id: "listing", icon: Menu, label: "الكافيهات - المطاعم", color: "bg-slate-50" },
        ].map((cat, i) => (
          <button 
            key={i} 
            onClick={() => onNavigate?.(cat.id)}
            className="flex flex-col items-center group"
          >
            <div className={`size-20 rounded-full ${cat.color} flex items-center justify-center shadow-sm group-active:scale-95 transition-transform overflow-hidden border border-border/50`}>
              <cat.icon className="size-10 text-primary/80" />
            </div>
            <span className="mt-3 text-[11px] font-bold text-center leading-tight text-foreground/80 h-8 flex items-center">
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Promotion Section */}
      <div className="px-5 mt-10">
        <div className="rounded-2xl bg-accent/5 p-4 border border-accent/10 flex items-center gap-4">
          <div className="flex-1">
            <h3 className="text-primary font-bold text-[15px]">بيتك يستحق مياه نقية</h3>
            <p className="text-[11px] text-muted-foreground mt-1">متوفرة دائماً لخدمتكم</p>
            <button 
              onClick={() => onNavigate?.("listing")}
              className="mt-3 bg-primary text-white px-4 py-1.5 rounded-full text-[11px] font-bold"
            >
              اطلب الآن
            </button>
          </div>
          <div className="size-24 bg-white rounded-xl shadow-soft flex items-center justify-center">
            <img src={gallon} alt="Water" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="px-5 mt-8 flex items-center justify-between">
        <h3 className="font-bold text-[16px] text-primary">الأكثر طلباً</h3>
        <button 
          onClick={() => onNavigate?.("listing")}
          className="text-[11px] font-bold text-accent"
        >عرض المزيد</button>
      </div>
      
      <div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar px-5 pb-4" dir="rtl">
        {[
          { name: "مياه نستله بيور لايف 0.6 لتر", price: "6.77", original: "9.03", img: carton },
          { name: "مياه نستله بيور لايف 0.33 لتر", price: "4.53", original: "6.04", img: carton },
          { name: "جالون 19 لتر", price: "18.00", original: "20.00", img: gallon },
        ].map((p, i) => (
          <div 
            key={i} 
            onClick={() => onNavigate?.("details")}
            className="min-w-[160px] bg-white rounded-2xl border border-border/60 p-3 shadow-sm relative cursor-pointer"
          >
            <div className="absolute top-2 right-2 bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full">خصم</div>
            <div className="h-28 flex items-center justify-center p-2">
              <img src={p.img} alt={p.name} className="h-full object-contain" />
            </div>
            <div className="mt-2 text-[11px] font-bold line-clamp-2 h-8 leading-tight">{p.name}</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[14px] font-bold text-primary">{p.price} ر.س</span>
              <span className="text-[10px] text-muted-foreground line-through">{p.original} ر.س</span>
            </div>
            <button className="mt-3 w-full bg-secondary text-primary font-bold py-2 rounded-xl text-[11px] active:bg-primary active:text-white transition-colors">
              إضافة للسلة
            </button>
          </div>
        ))}
      </div>

      <BottomNav onNavigate={onNavigate} />
    </div>
  );
}

