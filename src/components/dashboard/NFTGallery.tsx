import { useWallet } from "@solana/wallet-adapter-react";
import { ExternalLink } from "lucide-react";

interface NFT {
  id: string;
  name: string;
  collection: string;
  image: string;
}

export const NFTGallery = () => {
  const { connected } = useWallet();

  // Mock data
  const nfts: NFT[] = connected
    ? [
        { id: "1", name: "Mad Lad #1234", collection: "Mad Lads", image: "" },
        { id: "2", name: "Okay Bear #567", collection: "Okay Bears", image: "" },
        { id: "3", name: "DeGod #890", collection: "DeGods", image: "" },
        { id: "4", name: "SMB #2468", collection: "SMB Gen2", image: "" },
      ]
    : [];

  if (!connected) {
    return (
      <div className="glass rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">NFT-Galerie</h3>
        <div className="text-center py-8 text-muted-foreground">
          <p>Verbinde dein Wallet, um deine NFTs zu sehen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">NFT-Galerie</h3>
        <span className="text-sm text-muted-foreground">{nfts.length} NFTs</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="group relative aspect-square rounded-lg bg-secondary overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <span className="text-2xl font-bold opacity-50">{nft.name.slice(0, 2)}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-2">
              <p className="text-xs font-medium truncate">{nft.name}</p>
              <p className="text-xs text-muted-foreground truncate">{nft.collection}</p>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-4 w-4 text-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
