import { Card, CardContent, CardHeader } from '@/components/ui/card';

import dateFormatter from '@/helpers/date-formatter';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResponseData } from '@/types';

import Footer from '@/components/footer';
import NextMatch from '@/components/next-match';
import PreviousMatch from '@/components/previous-match';
import LeagueTable from '@/components/table';
import UpcomingMatch from '@/components/upcoming-match';

export default async function Home() {
  const data = (await fetch(process.env.API_URL as string, {
    cache: 'no-cache',
  }).then((res) => res.json())) as ResponseData;

  const nextMatch = data.upcomingMatches[0];

  return (
    <div className="flex h-full flex-col bg-primary">
      <div className="flex h-[95%] w-full flex-col justify-center gap-4 p-4 lg:flex-row-reverse lg:items-center">
        <NextMatch match={nextMatch} />

        <Card className="h-full w-full overflow-auto">
          <Tabs className="w-full" defaultValue="table">
            <CardHeader className="px-4 lg:justify-center">
              <TabsList>
                <TabsTrigger value="table">Tabela</TabsTrigger>
                <TabsTrigger value="upcoming-matches">Próximos Jogos</TabsTrigger>
                <TabsTrigger value="previous-matches">Últimos Jogos</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="w-full px-4">
              <TabsContent value="table">
                <LeagueTable table={data.table} />
                <span className="text-xs">
                  Atualizado em: {dateFormatter(data.table[0].update, 'Pp')}
                </span>
              </TabsContent>
              <TabsContent value="upcoming-matches">
                <div className="flex flex-col gap-4">
                  {data.upcomingMatches.slice(1).map((match, index) => {
                    return <UpcomingMatch key={index} match={match} />;
                  })}
                </div>
              </TabsContent>
              <TabsContent value="previous-matches">
                <div className="flex flex-col gap-4">
                  {data.previousMatches.map((match, index) => {
                    return <PreviousMatch key={index} match={match} />;
                  })}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

// function dateFormatter(date: string, pattern: string) {
//   return format(date, pattern);
// }
