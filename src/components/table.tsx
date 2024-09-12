import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import mock from '@/mock/response.json';
import { ResponseData } from '@/types';
import Image from 'next/image';

const data = mock as ResponseData;
const tableData = mock.tableData;

import { cn } from '@/lib/utils';

export default function Component() {
  return (
    <Table>
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
        {tableData.map((row, index) => {
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
