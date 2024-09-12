interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Goals {
  for: number;
  against: number;
}

interface Statistics {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

interface TableEntry {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: 'same' | 'up' | 'down';
  description: string;
  all: Statistics;
  home: Statistics;
  away: Statistics;
  update: string; // ISO 8601 date format
}

export type TableData = TableEntry[];
