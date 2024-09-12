import TimeLeft from '@/components/time-left';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { dateFormatter, leagueRoundFormatter } from '@/helpers/formatters';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import mock from '@/mock/response.json';
import { ResponseData } from '@/types';

import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { MdOutlineStadium } from 'react-icons/md';

import Table from '@/components/table';

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export default function Home() {
  const data = mock as ResponseData;

  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
      <Card className="w-full">
        <CardHeader className="flex flex-col">
          <CardTitle className="flex items-center justify-center gap-1">
            <Calendar size={24} />
            {dateFormatter(data.nextMatchesData[0].fixture.date, 'iiiiii, dd/MM')}
          </CardTitle>
          <CardDescription className="flex items-center justify-center gap-1 font-bold">
            <Clock size={14} />
            16h00
          </CardDescription>
          <TimeLeft targetDate={data.nextMatchesData[0].fixture.date} />
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-3 items-center justify-items-center">
            <Image
              src={data.nextMatchesData[0].teams.home.logo}
              alt={`Logo do ${data.nextMatchesData[0].teams.home.logo}`}
              title={data.nextMatchesData[0].teams.home.name}
              width={data.nextMatchesData[0].teams.home.id === 140 ? 150 : 80}
              height={data.nextMatchesData[0].teams.home.id === 140 ? 150 : 80}
            />
            <span className="text-4xl">X</span>
            <Image
              src={data.nextMatchesData[0].teams.away.logo}
              alt={`Logo do ${data.nextMatchesData[0].teams.away.logo}`}
              title={data.nextMatchesData[0].teams.away.name}
              width={data.nextMatchesData[0].teams.away.id === 140 ? 150 : 80}
              height={data.nextMatchesData[0].teams.away.id === 140 ? 150 : 80}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              {data.nextMatchesData[0].teams.home.name}
              <span>X</span>
              {data.nextMatchesData[0].teams.away.name}
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={data.nextMatchesData[0].league.flag}
                alt={`Bandeira do ${data.nextMatchesData[0].league.country}`}
                title={data.nextMatchesData[0].league.country}
                width={20}
                height={20}
              />
              <span className="text-base">{data.nextMatchesData[0].league.name}</span>
              <Image
                src={data.nextMatchesData[0].league.logo}
                alt={`Logo do campeonato ${data.nextMatchesData[0].league.name}`}
                title={data.nextMatchesData[0].league.name}
                width={24}
                height={24}
              />
            </div>
            <span className="text-base font-semibold">
              {leagueRoundFormatter(data.nextMatchesData[0].league.round, 'full')}
            </span>
            <div className="flex items-center gap-1">
              <MdOutlineStadium size={16} />
              <span className="text-base font-semibold">
                {data.nextMatchesData[0].fixture.venue.name}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <Tabs className="w-full" defaultValue="table">
          <CardHeader className="px-4">
            <TabsList>
              <TabsTrigger value="table">Tabela</TabsTrigger>
              <TabsTrigger value="next-matches">Próximos Jogos</TabsTrigger>
              <TabsTrigger value="last-matches">Últimos Jogos</TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            <TabsContent value="table">
              <Table />
            </TabsContent>
            <TabsContent value="next-matches">next matches</TabsContent>
            <TabsContent value="last-matches">last-matches</TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
