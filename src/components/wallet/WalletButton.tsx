import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet, LogOut, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

export const WalletButton = () => {
  const { publicKey, disconnect, connected } = useWallet();
  const [copied, setCopied] = useState(false);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const copyAddress = async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey.toBase58());
      setCopied(true);
      toast({
        title: "Adresse kopiert",
        description: "Wallet-Adresse wurde in die Zwischenablage kopiert",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!connected) {
    return <WalletMultiButton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 font-mono text-sm">
          <Wallet className="h-4 w-4" />
          {publicKey && shortenAddress(publicKey.toBase58())}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={copyAddress} className="gap-2 cursor-pointer">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          Adresse kopieren
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => disconnect()}
          className="gap-2 cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Trennen
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
