import { UpcomingMatch } from '@/components/upcoming-match';
import { UpcomingMatches } from './next-matches';
import { PreviousMatches } from './last-matches';
export default interface ResponseData {
  table: TableData;
  upcomingMatches: UpcomingMatches;
  previousMatches: PreviousMatches;
}
