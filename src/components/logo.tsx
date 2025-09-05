import { cn } from "@/lib/utils";

export function PimpasticLogo({ className }: { className?: string }) {
  return (
    <div className={cn("font-bold text-xl font-headline tracking-tight text-primary", className)}>
      Pimpastic
    </div>
  );
}
