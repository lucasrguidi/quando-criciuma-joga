import { format, setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';

setDefaultOptions({
  locale: ptBR,
});

export default function dateFormatterWeekDayAndDate(date: string) {
  return (
    format(date, 'iiiiii, dd/MM').charAt(0).toUpperCase() + format(date, 'iiiiii, dd/MM').slice(1)
  );
}
