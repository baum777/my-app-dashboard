import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Journal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Journal</h1>
        <p className="text-muted-foreground">Dokumentiere deine Trades und Learnings</p>
      </div>

      <Card className="glass border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Trading Journal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hier kannst du bald deine Trades dokumentieren und analysieren.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Journal;
