import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Token {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  icon?: string;
}

export const TokenList = () => {
  const { connected } = useWallet();

  // Mock data
  const tokens: Token[] = connected
    ? [
        { symbol: "SOL", name: "Solana", balance: 45.23, value: 4523.0, change24h: 5.2 },
        { symbol: "BONK", name: "Bonk", balance: 15000000, value: 450.0, change24h: -2.3 },
        { symbol: "JUP", name: "Jupiter", balance: 1250, value: 1875.0, change24h: 8.7 },
        { symbol: "RAY", name: "Raydium", balance: 320, value: 896.0, change24h: 3.1 },
        { symbol: "ORCA", name: "Orca", balance: 180, value: 324.0, change24h: -1.5 },
      ]
    : [];

  if (!connected) {
    return (
      <div className="glass rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Token-Übersicht</h3>
        <div className="text-center py-8 text-muted-foreground">
          <p>Verbinde dein Wallet, um deine Token zu sehen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Token-Übersicht</h3>
        <span className="text-sm text-muted-foreground">{tokens.length} Token</span>
      </div>
      <div className="space-y-3">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-sm">
                {token.symbol.slice(0, 2)}
              </div>
              <div>
                <p className="font-medium">{token.symbol}</p>
                <p className="text-sm text-muted-foreground">{token.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium">
                ${token.value.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
              </p>
              <p
                className={cn(
                  "text-sm font-mono",
                  token.change24h >= 0 ? "text-profit" : "text-loss"
                )}
              >
                {token.change24h >= 0 ? "+" : ""}
                {token.change24h}%
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};
