import { useWallet } from "@solana/wallet-adapter-react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { TokenList } from "@/components/dashboard/TokenList";
import { NFTGallery } from "@/components/dashboard/NFTGallery";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";

const Index = () => {
  const { connected } = useWallet();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Dein Solana Trading Überblick
          </p>
        </div>
      </div>

      {/* Connect Wallet Prompt */}
      {!connected && (
        <div className="glass rounded-xl p-8 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <Wallet className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Wallet verbinden</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Verbinde dein Solana-Wallet, um dein Portfolio, Token, NFTs und
            Transaktionshistorie zu sehen.
          </p>
          <WalletMultiButton />
        </div>
      )}

      {/* Stats Cards */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TokenList />
        <NFTGallery />
      </div>

      {/* Transaction History */}
      <TransactionHistory />
    </div>
  );
};

export default Index;
