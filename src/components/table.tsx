import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { TableData } from '@/types/table-data';

interface ILeagueTableProps {
  table: TableData;
}

const league = process.env.LEAGUE;

export default function LeagueTable({ table }: ILeagueTableProps) {
  if (league === 'brasileirao') {
    return (
      <Table className="overflow-auto">
        <TableHeader>
          <TableRow className="whitespace-nowrap bg-accent font-bold">
            <TableHead colSpan={2}>SÉRIE A</TableHead>
            <TableHead>PG</TableHead>
            <TableHead>J</TableHead>
            <TableHead>V</TableHead>
            <TableHead>E</TableHead>
            <TableHead>D</TableHead>
            <TableHead>SG</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.map((row, index) => {
            return (
              <TableRow key={row.rank} className={cn(index % 2 === 0 ? 'bg-popover' : 'bg-accent')}>
                <TableCell
                  className={cn(
                    'max-w-5',
                    row.rank <= 4 ? 'border-l-4 border-l-emerald-500' : '',
                    row.rank >= 17 ? 'border-l-4 border-l-red-500' : '',
                  )}
                >
                  {row.rank}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Image src={row.team.logo} alt={`${row.team.name} logo`} width={24} height={24} />
                  <span className="whitespace-nowrap">{row.team.name}</span>
                </TableCell>

                <TableCell>{row.points}</TableCell>
                <TableCell>{row.all.played}</TableCell>
                <TableCell>{row.all.win}</TableCell>
                <TableCell>{row.all.draw}</TableCell>
                <TableCell>{row.all.lose}</TableCell>
                <TableCell>{row.goalsDiff}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  if (league === 'catarinense') {
    return (
      <Table className="overflow-auto">
        <TableHeader>
          <TableRow className="whitespace-nowrap bg-accent font-bold">
            <TableHead colSpan={2}>CATARINENSE</TableHead>
            <TableHead>PG</TableHead>
            <TableHead>J</TableHead>
            <TableHead>V</TableHead>
            <TableHead>E</TableHead>
            <TableHead>D</TableHead>
            <TableHead>SG</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.map((row, index) => {
            return (
              <TableRow key={row.rank} className={cn(index % 2 === 0 ? 'bg-popover' : 'bg-accent')}>
                <TableCell
                  className={cn(
                    'max-w-5',
                    row.rank <= 8 ? 'border-l-4 border-l-emerald-500' : '',
                    row.rank >= 11 ? 'border-l-4 border-l-red-500' : '',
                  )}
                >
                  {row.rank}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Image src={row.team.logo} alt={`${row.team.name} logo`} width={24} height={24} />
                  <span className="whitespace-nowrap">{row.team.name}</span>
                </TableCell>

                <TableCell>{row.points}</TableCell>
                <TableCell>{row.all.played}</TableCell>
                <TableCell>{row.all.win}</TableCell>
                <TableCell>{row.all.draw}</TableCell>
                <TableCell>{row.all.lose}</TableCell>
                <TableCell>{row.goalsDiff}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
