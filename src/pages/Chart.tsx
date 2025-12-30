import { LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Chart = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Chart</h1>
        <p className="text-muted-foreground">Analysiere Token-Charts und Marktdaten</p>
      </div>

      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-primary" />
            Chart-Analyse
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hier werden bald interaktive Charts für deine Token angezeigt.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chart;
