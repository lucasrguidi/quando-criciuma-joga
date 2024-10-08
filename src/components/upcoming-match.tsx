'use client';
import dateFormatter from '@/helpers/date-formatter';
import dateFormatterWeekDayAndDate from '@/helpers/date-formatter-weekday-and-date';
import leagueRoundFormatter from '@/helpers/league-round-formatter';
import { Match } from '@/types/next-matches';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { MdOutlineStadium } from 'react-icons/md';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface UpcomingMatchProps {
  match: Match;
}

export default function UpcomingMatch({ match }: UpcomingMatchProps) {
  return (
    <Card className="h-fit w-full">
      <CardContent className="flex items-center justify-between p-4 pb-0">
        <Image
          src={match.teams.home.logo}
          alt={`Logo do ${match.teams.home.logo}`}
          title={match.teams.home.name}
          width={match.teams.home.id === 140 ? 70 : 55}
          height={match.teams.home.id === 140 ? 70 : 55}
        />

        <div className="flex flex-col items-center justify-center gap-1">
          <CardTitle className="flex items-center justify-center gap-1 whitespace-nowrap text-base">
            <Calendar size={24} />
            {dateFormatterWeekDayAndDate(match.fixture.date)}
          </CardTitle>
          <CardDescription className="flex items-center justify-center gap-1 text-sm font-bold">
            <Clock size={14} />
            {match.fixture.status.short === 'TBD' ? (
              <span>A definir</span>
            ) : (
              <span>{dateFormatter(match.fixture.date, 'p')}h</span>
            )}
          </CardDescription>
        </div>

        <Image
          src={match.teams.away.logo}
          alt={`Logo do ${match.teams.away.logo}`}
          title={match.teams.away.name}
          width={match.teams.away.id === 140 ? 70 : 55}
          height={match.teams.away.id === 140 ? 70 : 55}
        />
      </CardContent>
      <Separator className="my-2" />

      <CardFooter className="flex flex-col items-center justify-center gap-1 p-4 pt-0">
        <div className="flex justify-center text-lg font-bold">
          <span>
            {match.teams.home.name} X {match.teams.away.name}
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-sm">
            {match.league.name} - {leagueRoundFormatter(match.league.round, 'full')}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <MdOutlineStadium size={16} />
          <span className="text-sm font-semibold">{match.fixture.venue.name}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
