import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Teste</CardTitle>
          <CardDescription>Descrição</CardDescription>
        </CardHeader>

        <CardContent>Contéudo</CardContent>

        <CardFooter>
          <Button>Click</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
