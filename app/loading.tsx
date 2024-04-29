import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Personalised Post for you</h1>
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3">
        {new Array(15).fill("")?.map((_item, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="truncate break-words">
                  <Skeleton className="w-[90%] h-8" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
