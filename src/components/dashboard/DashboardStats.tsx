import { DollarSign, TrendingUp, Activity, Target, Flame } from "lucide-react";
import { StatCard } from "./StatCard";
import { useWallet } from "@solana/wallet-adapter-react";

export const DashboardStats = () => {
  const { connected } = useWallet();

  // Mock data - würde später durch echte On-Chain-Daten ersetzt
  const stats = connected
    ? {
        portfolioValue: "$12,458.32",
        pnl: "+$1,234.56",
        pnlPercent: "+12.4%",
        todayActivity: "8",
        winrate: "67%",
        journalStreak: "14",
      }
    : {
        portfolioValue: "$0.00",
        pnl: "$0.00",
        pnlPercent: "0%",
        todayActivity: "0",
        winrate: "0%",
        journalStreak: "0",
      };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <StatCard
        title="Portfolio-Wert"
        value={stats.portfolioValue}
        icon={<DollarSign className="h-5 w-5" />}
        trend="up"
        trendValue={stats.pnlPercent}
        subtitle="Gesamt"
      />
      <StatCard
        title="PnL (7 Tage)"
        value={stats.pnl}
        icon={<TrendingUp className="h-5 w-5" />}
        trend="up"
        trendValue={stats.pnlPercent}
      />
      <StatCard
        title="Trades Heute"
        value={stats.todayActivity}
        icon={<Activity className="h-5 w-5" />}
        subtitle="Transaktionen"
      />
      <StatCard
        title="Winrate"
        value={stats.winrate}
        icon={<Target className="h-5 w-5" />}
        trend="up"
        trendValue="2%"
        subtitle="vs. letzte Woche"
      />
      <StatCard
        title="Journal Streak"
        value={`${stats.journalStreak} Tage`}
        icon={<Flame className="h-5 w-5" />}
        trend="up"
        subtitle="Aktiv 🔥"
      />
    </div>
  );
};
