import { ChevronLeft, MapPin, Heart, Receipt, Repeat, Bell, Globe, ChevronRight, Settings } from "lucide-react";
import { BottomNav } from "./BottomNav";

export function ProfileScreen({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <button 
          onClick={() => onNavigate?.("home")}
          className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft"
        >
          <ChevronLeft className="size-4 rotate-180" />
        </button>
        <div className="font-display text-[16px]">حسابي</div>
        <button className="size-10 rounded-2xl bg-card border border-border/60 flex items-center justify-center shadow-soft">
          <Settings className="size-4" />
        </button>
      </div>

      {/* Profile head */}
      <div className="px-5 mt-3">
        <div className="rounded-3xl p-5 bg-gradient-deep text-primary-foreground relative overflow-hidden shadow-float">
          <div className="absolute -right-10 -bottom-10 size-44 rounded-full bg-aqua/20 blur-2xl" />
          <div className="flex items-center gap-3">
            <div className="size-14 rounded-2xl bg-aqua/30 backdrop-blur flex items-center justify-center font-display text-[22px]">A</div>
            <div>
              <div className="font-display text-[20px]">أحمد صالح</div>
              <div className="text-[11px] text-primary-foreground/70" dir="ltr">+966 55 ··· 4291 · عضو منذ 2023</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              { v: "48", l: "طلب" },
              { v: "12", l: "جالون / شهر" },
              { v: "ذهبي", l: "المستوى" },
            ].map((s) => (
              <div key={s.l} className="bg-card/15 backdrop-blur rounded-2xl p-2.5 text-center">
                <div className="font-display text-[16px]">{s.v}</div>
                <div className="text-[9px] text-primary-foreground/70 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="px-5 mt-5 space-y-3">
        <Group title="التسوق">
          <Row icon={Receipt} label="سجل الطلبات" sub="48 طلب مكتمل" onClick={() => onNavigate?.("tracking")} />
          <Row icon={Heart} label="المفضلة" sub="12 منتج" />
          <Row icon={Repeat} label="الاشتراكات" sub="اشتراك واحد نشط · أسبوعي" onClick={() => onNavigate?.("plans")} />
        </Group>

        <Group title="الحساب">
          <Row icon={MapPin} label="العناوين المحفوظة" sub="3 مواقع" />
          <Row icon={Bell} label="الإشعارات" sub="مفعل" />
          <Row icon={Globe} label="اللغة" sub="English · العربية" />
        </Group>
      </div>

      <div className="px-5 mt-6">
        <button className="w-full h-12 rounded-full border border-border text-[12px] font-bold text-muted-foreground">
          تسجيل الخروج
        </button>
        <div className="text-center text-[10px] text-muted-foreground mt-4">وسام الخليج · v2.4.1</div>
      </div>

      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground px-1 mb-2">{title}</div>
      <div className="bg-card border border-border/60 rounded-2xl divide-y divide-border/60 shadow-soft">{children}</div>
    </div>
  );
}

function Row({ icon: Icon, label, sub, onClick }: { icon: any; label: string; sub: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="w-full p-4 flex items-center gap-3">
      <div className="size-9 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="size-4 text-deep" />
      </div>
      <div className="flex-1 text-right">
        <div className="text-[12px] font-bold">{label}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
      <ChevronLeft className="size-4 text-muted-foreground rotate-180" />
    </button>
  );
}
