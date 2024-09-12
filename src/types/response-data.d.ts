import { LastMatchesData } from './last-matches';
import { NextMatchesData } from './next-matches';
import { TableData } from './table-data';

export default interface ResponseData {
  tableData: TableData;
  nextMatchesData: NextMatchesData;
  lastMatchesData: LastMatchesData;
}
