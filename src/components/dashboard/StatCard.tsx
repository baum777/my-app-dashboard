import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-5 animate-fade-in transition-all hover:scale-[1.02]",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold tracking-tight font-mono">
            {value}
          </p>
          {(subtitle || trendValue) && (
            <div className="flex items-center gap-2 text-sm">
              {trendValue && (
                <span
                  className={cn(
                    "font-medium",
                    trend === "up" && "text-profit",
                    trend === "down" && "text-loss",
                    trend === "neutral" && "text-muted-foreground"
                  )}
                >
                  {trend === "up" && "+"}
                  {trendValue}
                </span>
              )}
              {subtitle && (
                <span className="text-muted-foreground">{subtitle}</span>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
