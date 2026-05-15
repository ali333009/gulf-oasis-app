import { ReactNode } from "react";

export function PhoneFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
      <div className="relative w-[390px] h-[844px] rounded-[3rem] bg-[oklch(0.12_0.04_255)] p-[10px] shadow-float">
        <div className="relative w-full h-full rounded-[2.5rem] bg-background overflow-hidden">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] h-[30px] rounded-full bg-[oklch(0.12_0.04_255)] z-50" />
          {/* status bar */}
          <div className="absolute top-0 inset-x-0 h-12 flex items-center justify-between px-8 text-[13px] font-semibold text-foreground z-40">
            <span>9:41</span>
            <span className="opacity-0">.</span>
            <span className="flex items-center gap-1">
              <span className="text-[10px]">●●●●</span>
              <span>􀙇</span>
            </span>
          </div>
          <div className="absolute inset-0 pt-12 overflow-y-auto no-scrollbar">{children}</div>
        </div>
      </div>
    </div>
  );
}
