interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed: number | null;
}

interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string; // ISO 8601 date format
  timestamp: number;
  periods: {
    first: number | null;
    second: number | null;
  };
  venue: Venue;
  status: Status;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Match {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
}

export type NextMatchesData = Match[];
