import { format, intervalToDuration, setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';

setDefaultOptions({
  locale: ptBR,
});

function dateFormatterWeekDayAndDate(date: string) {
  return (
    format(date, 'iiiiii, dd/MM').charAt(0).toUpperCase() + format(date, 'iiiiii, dd/MM').slice(1)
  );
}

function dateFormatter(date: string, pattern: string) {
  return format(date, pattern);
}

function timeLeft(targetDate: string) {
  return () => {
    const now = new Date();
    const target = new Date(targetDate);

    const duration = intervalToDuration({
      start: now,
      end: target,
    });

    const getProperty = (value?: number): number => value ?? 0;

    const formatted = [
      getProperty(duration.years) > 0 &&
        `${getProperty(duration.years)} ano${getProperty(duration.years) > 1 ? 's' : ''}`,
      getProperty(duration.months) > 0 &&
        `${getProperty(duration.months)} mese${getProperty(duration.months) > 1 ? 's' : ''}`,
      getProperty(duration.days) > 0 &&
        `${getProperty(duration.days)} dia${getProperty(duration.days) > 1 ? 's' : ''}`,
      getProperty(duration.hours) > 0 &&
        `${getProperty(duration.hours)} hora${getProperty(duration.hours) > 1 ? 's' : ''}`,
      getProperty(duration.minutes) > 0 &&
        `${getProperty(duration.minutes)} minuto${getProperty(duration.minutes) > 1 ? 's' : ''}`,
      getProperty(duration.seconds) > 0 &&
        `${getProperty(duration.seconds)} segundo${getProperty(duration.seconds) > 1 ? 's' : ''}`,
    ]
      .filter(Boolean)
      .join(', ');

    return formatted;
  };
}

function leagueRoundFormatter(round: string, format: 'numeric' | 'full'): string {
  const roundNumber = round.replace('Regular Season - ', '');
  return format === 'numeric' ? roundNumber : `${roundNumber}ª rodada`;
}

export { dateFormatterWeekDayAndDate, leagueRoundFormatter, timeLeft, dateFormatter };
