'use client';

import { Spinner } from '@/components/ui/spinner';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== '/') {
    router.push('/');
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner size="large" className="text-foreground" />
    </div>
  );
}
