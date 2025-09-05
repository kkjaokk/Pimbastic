import { cn } from "@/lib/utils";

export function PimbasticLogo({ className }: { className?: string }) {
  return (
    <div className={cn("font-bold text-xl font-headline tracking-tight text-primary", className)}>
      Pimbastic
    </div>
  );
}
