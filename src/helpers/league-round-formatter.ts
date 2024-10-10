export default function leagueRoundFormatter(round: string, format: 'numeric' | 'full'): string {
  const roundNumber = round.replace('Regular Season - ', '');
  return format === 'numeric' ? roundNumber : `${roundNumber}ª rodada`;
}
