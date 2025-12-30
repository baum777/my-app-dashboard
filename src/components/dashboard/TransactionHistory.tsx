import { useWallet } from "@solana/wallet-adapter-react";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  type: "send" | "receive" | "swap";
  token: string;
  amount: number;
  value: number;
  timestamp: string;
  hash: string;
}

export const TransactionHistory = () => {
  const { connected } = useWallet();

  // Mock data
  const transactions: Transaction[] = connected
    ? [
        { id: "1", type: "swap", token: "SOL → BONK", amount: 2.5, value: 250, timestamp: "vor 2 Std.", hash: "abc123" },
        { id: "2", type: "receive", token: "SOL", amount: 10, value: 1000, timestamp: "vor 5 Std.", hash: "def456" },
        { id: "3", type: "send", token: "JUP", amount: 500, value: 750, timestamp: "vor 1 Tag", hash: "ghi789" },
        { id: "4", type: "swap", token: "BONK → SOL", amount: 5000000, value: 150, timestamp: "vor 2 Tagen", hash: "jkl012" },
        { id: "5", type: "receive", token: "RAY", amount: 100, value: 280, timestamp: "vor 3 Tagen", hash: "mno345" },
      ]
    : [];

  const getTypeIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "send":
        return <ArrowUpRight className="h-4 w-4" />;
      case "receive":
        return <ArrowDownLeft className="h-4 w-4" />;
      case "swap":
        return <RefreshCw className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: Transaction["type"]) => {
    switch (type) {
      case "send":
        return "text-loss bg-loss/10";
      case "receive":
        return "text-profit bg-profit/10";
      case "swap":
        return "text-primary bg-primary/10";
    }
  };

  if (!connected) {
    return (
      <div className="glass rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Transaktionshistorie</h3>
        <div className="text-center py-8 text-muted-foreground">
          <p>Verbinde dein Wallet, um deine Transaktionen zu sehen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Transaktionshistorie</h3>
        <span className="text-sm text-muted-foreground">{transactions.length} Transaktionen</span>
      </div>
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg", getTypeColor(tx.type))}>
                {getTypeIcon(tx.type)}
              </div>
              <div>
                <p className="font-medium">{tx.token}</p>
                <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className={cn("font-mono font-medium", tx.type === "send" ? "text-loss" : "")}>
                  {tx.type === "send" ? "-" : "+"}${tx.value.toLocaleString("de-DE")}
                </p>
              </div>
              <a
                href={`https://solscan.io/tx/${tx.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
