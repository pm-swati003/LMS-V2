import { cn } from "@/lib/utils";

interface NewsTickerProps {
  items: string[];
  className?: string;
  speed?: number; // Duration in seconds
}

export function NewsTicker({ items, className, speed = 40 }: NewsTickerProps) {
  return (
    <div className={cn("relative overflow-hidden bg-muted/50 border-y border-border/40 py-2", className)}>
      <div className="flex whitespace-nowrap">
        <div 
          className="animate-ticker flex items-center"
          style={{ animationDuration: `${speed}s` }}
        >
          {items.map((item, i) => (
            <span key={i} className="mx-8 text-sm font-medium text-muted-foreground inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3 shrink-0" />
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div 
          className="animate-ticker flex items-center"
          style={{ animationDuration: `${speed}s` }}
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="mx-8 text-sm font-medium text-muted-foreground inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
