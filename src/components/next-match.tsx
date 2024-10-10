'use client';

import dateFormatter from '@/helpers/date-formatter';
import dateFormatterWeekDayAndDate from '@/helpers/date-formatter-weekday-and-date';
import leagueRoundFormatter from '@/helpers/league-round-formatter';
import { Match } from '@/types/next-matches';
import { Separator } from '@radix-ui/react-separator';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { MdOutlineStadium } from 'react-icons/md';
import TimeLeft from './time-left';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface NextMatchProps {
  match: Match;
}

export default function NextMatch({ match }: NextMatchProps) {
  return (
    <Card className="h-fit w-full">
      <CardHeader className="flex flex-col">
        <CardTitle className="flex items-center justify-center gap-1">
          <Calendar size={24} />
          {dateFormatterWeekDayAndDate(match.fixture.date)}
        </CardTitle>
        <CardDescription className="flex items-center justify-center gap-1 font-bold">
          <Clock size={14} />
          {dateFormatter(match.fixture.date, 'p')}h
        </CardDescription>
        <TimeLeft targetDate={match.fixture.date} />
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-center justify-items-center">
          <Image
            src={match.teams.home.logo}
            alt={`Logo do ${match.teams.home.logo}`}
            title={match.teams.home.name}
            width={match.teams.home.id === 140 ? 170 : 120}
            height={match.teams.home.id === 140 ? 170 : 120}
          />
          <span className="text-4xl lg:text-6xl">X</span>
          <Image
            src={match.teams.away.logo}
            alt={`Logo do ${match.teams.away.logo}`}
            title={match.teams.away.name}
            width={match.teams.away.id === 140 ? 170 : 120}
            height={match.teams.away.id === 140 ? 170 : 120}
          />
        </div>
      </CardContent>

      <Separator className="my-2 lg:my-0" />

      <CardFooter className="justify-center lg:pt-6">
        <div className="flex flex-col items-center gap-1">
          <div className="whitespace-nowrap text-lg font-bold lg:text-2xl">
            <span>
              {match.teams.home.name} X {match.teams.away.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={match.league.flag}
              alt={`Bandeira do ${match.league.country}`}
              title={match.league.country}
              width={20}
              height={20}
            />
            <span className="text-base">{match.league.name}</span>
            <Image
              src={match.league.logo}
              alt={`Logo do campeonato ${match.league.name}`}
              title={match.league.name}
              width={24}
              height={24}
            />
          </div>
          <span className="text-base font-semibold lg:text-lg">
            {leagueRoundFormatter(match.league.round, 'full')}
          </span>
          <div className="flex items-center gap-1">
            <MdOutlineStadium size={16} />
            <span className="text-base font-semibold lg:text-lg">{match.fixture.venue.name}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
