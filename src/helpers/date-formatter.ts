'use client';

import { format, setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';

setDefaultOptions({
  locale: ptBR,
});

export default function dateFormatter(date: string, pattern: string) {
  return format(date, pattern);
}
