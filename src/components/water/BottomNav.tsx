import { Home, ShoppingBag, Repeat, MapPin, User } from "lucide-react";

const items = [
  { icon: Home, label: "الرئيسية", id: "home" },
  { icon: ShoppingBag, label: "المتجر", id: "listing" },
  { icon: Repeat, label: "اشتراكات", id: "plans" },
  { icon: MapPin, label: "تتبع", id: "tracking" },
  { icon: User, label: "حسابي", id: "profile" },
];

export function BottomNav({ active = "home", onNavigate }: { active?: string; onNavigate?: (id: string) => void }) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pb-5 pt-2 bg-gradient-to-t from-background via-background to-background/0 pointer-events-none z-50">
      <div className="bg-card border border-border/60 rounded-[2rem] shadow-soft px-2 py-2 flex items-center justify-between pointer-events-auto" dir="rtl">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = it.id === active;
          return (
            <button
              key={it.id}
              onClick={() => onNavigate?.(it.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl transition ${
                isActive ? "bg-deep text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="size-[18px]" strokeWidth={2} />
              <span className="text-[10px] font-semibold">{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
