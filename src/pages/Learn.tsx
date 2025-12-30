import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Learn = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Learn</h1>
        <p className="text-muted-foreground">Lerne neue Trading-Strategien und Konzepte</p>
      </div>

      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Lernbereich
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hier findest du bald Tutorials, Guides und Ressourcen zum Trading.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Learn;
